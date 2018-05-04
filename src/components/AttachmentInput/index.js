import React from "react";
import styled from "styled-components";
import "./index.css";

const Root = styled.div`
  margin-top: 30px;
`;

const AttachmentLabel = styled.label`
  cursor: pointer;
  display: inline-block;
`;

const AttachmentInputWrapper = styled.input`
  display: none;
`;

export default class AttachmentInput extends React.Component {
  render() {
    return (
      <Root>
        <AttachmentLabel>
          <AttachmentInputWrapper type="file"
                                  name="file"
                                  accept="*.csv"
                                  onChange={this.props.handleAttach}/> { /* FIX view of this FILE INPUT */ }
          <span className="attach-message">
            Or via CSV file -
          </span>
          <span className="attach-sprite"/>
        </AttachmentLabel>
      </Root>
    );
  }
}
