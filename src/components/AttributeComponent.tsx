import React from "react";
import styled from "styled-components";

interface Props {
  type: string;
  value: any;
}

const AttributeComponent: React.FC<Props> = ({ type, value }) => {
  return (
    <Wrapper>
      <b>{type}</b>: {value}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & {
    transition: all;
    transition-duration: 200ms;
  }
`;

export default AttributeComponent;
