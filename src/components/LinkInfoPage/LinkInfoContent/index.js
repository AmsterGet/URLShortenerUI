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
  render() {
    return (
      <InfoPageWrapper>
        {this.props.shortUrl ?
          <InfoPageWrapper>
            <InfoContentWrapper>
              <SingleInfoContainer>
                <span>Original url</span>
                <a href={`${this.props.originalUrl}`} className="text-info">
                  {this.props.originalUrl}
                </a>
              </SingleInfoContainer>

              <SingleInfoContainer>
                <span>Short url</span>
                <a
                  href={`${config.api + this.props.shortUrl}`}
                  className="text-info">
                  {config.api + this.props.shortUrl}
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
                <span>Link description</span>
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

            <LinksPopup isPopupOpen={this.props.isPopupOpen}/>

          </InfoPageWrapper>
          :
          <span>
            404: Link was not found
          </span>
        }
      </InfoPageWrapper>
    );
  }

  tagClickHandle = (event) => {
    if (event.target.tagName==="UL") {
        return;
    }
    console.log(event.target.innerHTML);
    // this.props.getLinksByTagName(event.target.innerText); // to dispatch into redux
  }
}
