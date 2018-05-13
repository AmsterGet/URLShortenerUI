import React from "react";
import styled from "styled-components";
import config from "../../config";
import "./index.css";

const Root = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const AttachmentLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const AttachmentInputWrapper = styled.input`
  display: none;
`;

const FileNameInfo = styled.span`
  margin: 0 8px;
  font-weight: bold;
  height: 17px;
  overflow: auto;
  max-width: 176px;
  border: 1px solid rgb(224, 224, 224);
  padding: 1px;
  border-radius: 2px;
  @media (max-width: 650px) {
    margin: 4px 0;
  }
`;

const FileTemplateLink = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export default class AttachmentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
    };
  }

  render() {
    return (
      <Root>
        <AttachmentLabel>
          <AttachmentInputWrapper type="file"
                                  name="file"
                                  accept=".csv"
                                  onChange={this.handleChange}/>
          <span>
            Or via CSV file
          </span>
          <span className="attach-sprite"/>
          {
            this.state.fileName ?
              <FileNameInfo>
                {this.state.fileName}
              </FileNameInfo> : ""
          }
        </AttachmentLabel>
        <FileTemplateLink href={`${config.api}/file/template`}>
          <span>
            Download
          </span>
          <span>
            CSV template
          </span>
        </FileTemplateLink>
      </Root>
    );
  }

  handleChange = (event) => {
    const fileName = event.target.value.replace(/.*\\/, "");
    this.props.handleAttach(event);
    this.setState({
      fileName,
    });
  };
}
