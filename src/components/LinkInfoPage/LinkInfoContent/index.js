import React from "react";
import styled from "styled-components";
import config from "../../../config";
import LinksPopup from "../LinksPopup";
import "./index.css";

const InfoPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const InfoContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin-bottom: 30px;
    @media (max-width: 650px) {
      flex-direction: column;
    }
`;

const SingleInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: LifehackBasic-Regular;
    font-size: 19px;
    font-weight: 100;
    @media (max-width: 650px) {
      margin-bottom: 20px;
    }
`;

const InfoDateContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const TagsListItem = styled.li`
  transition: all .3s ease;
  cursor: pointer;
  &:hover {
    color: rgba(0, 188, 212, 0.7);
  }
`;

export default class LinkInfoContent extends React.Component {
  state = {
    isButtonClicked: false,
  };
  render() {
    return (
      <InfoPageWrapper>
        {this.props.shortUrl && !this.props.errorMessage ?
          <InfoPageWrapper>
            <InfoContentWrapper>
              <SingleInfoContainer>
                <span>Original url</span>
                <a href={`${this.props.originalUrl}`}
                   className="text-info">
                  {this.props.originalUrl}
                </a>
              </SingleInfoContainer>

              <SingleInfoContainer>
                <span>Short url</span>
                <a href={`${config.api}/${this.props.shortUrl}`}
                   className="text-info">
                  {`${config.api}/${this.props.shortUrl}`}
                </a>
              </SingleInfoContainer>
            </InfoContentWrapper>

            <InfoDateContentWrapper>
              <SingleInfoContainer>
                <span>Post date of the link</span>
                <span className="text-info">
                  {new Date(this.props.postDate).toDateString()}
                </span>
              </SingleInfoContainer>
            </InfoDateContentWrapper>

            <InfoContentWrapper>
              <SingleInfoContainer>
                <span>Link's description</span>
                <p className="text-info">
                  {this.props.description}
                </p>
              </SingleInfoContainer>

              <SingleInfoContainer>
                <span>Link's tags:</span>
                <ul className="text-info" onClick={this.tagClickHandle}>
                  {this.props.tags.map((item) => {
                    return <TagsListItem key={item._id}>{item.tagName}</TagsListItem>;
                  })}
                </ul>
              </SingleInfoContainer>
            </InfoContentWrapper>

            <LinksPopup changeButtonClickState={this.changeButtonClickState}
                        isButtonClicked={this.state.isButtonClicked}
                        errorMessage={this.props.errorMessage}
                        getLinkInfo={this.props.getLinkInfo}
                        isLinksForInfo={true}
                        links={this.props.links}/>

          </InfoPageWrapper>
          : (this.props.errorMessage ? <span>
              {this.props.errorMessage}
            </span> : "")
        }
      </InfoPageWrapper>
    );
  }

  changeButtonClickState = () => {
    this.props.clearGuestLinks(false);

    this.setState({
      isButtonClicked: !this.state.isButtonClicked,
    });
  };

  tagClickHandle = (event) => {
    if (event.target.tagName === "UL") {
        return;
    }
    this.changeButtonClickState();
    this.props.getLinksByTagName({
      tagName: event.target.innerText,
      shortUrl: this.props.shortUrl
    }); // to dispatch into redux
  }
}
