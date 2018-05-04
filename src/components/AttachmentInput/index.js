import React from "react";
import styled from "styled-components";
import "./index.css";

const Root = styled.div`
  margin-top: 30px;
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
   margin-left: 8px;
   font-weight: bold;
   height: 17px;
   @media (max-width: 650px) {
    margin: 0;
   }
`;

export default class AttachmentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
    };
  }

  render() {
    console.log(this.state.fileName);
    return (
      <Root>
        <AttachmentLabel>
          <AttachmentInputWrapper type="file"
                                  name="file"
                                  accept=".csv"
                                  onChange={this.handleChange}/> { /* FIX view of this FILE INPUT */ }
          <span>
            Or via CSV file
          </span>
          <span className="attach-sprite"/>
          <FileNameInfo>
            {this.state.fileName}
          </FileNameInfo>
        </AttachmentLabel>
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
