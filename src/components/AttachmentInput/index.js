import React from "react";
import styled from "styled-components";

const Root = styled.div`
  margin-top: 30px;
`;

const AttachmentLabel = styled.label`
  cursor: pointer;
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
                                  accept="*.csv"/>
          <span>Мой красивый аттач</span>
        </AttachmentLabel>
      </Root>
    );
  }
}
