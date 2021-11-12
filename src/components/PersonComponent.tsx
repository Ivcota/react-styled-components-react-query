import React from "react";
import styled from "styled-components";
import AttributeComponent from "./AttributeComponent";

export interface Person {
  birth_year?: string;
  created?: string;
  edited?: string;
  eye_color?: string;
  films?: string[];
  gender?: string;
  hair_color?: string;
  height?: string;
  homeworld?: string;
  mass?: string;
  name?: string;
  skin_color?: string;
  species?: [];
  starships?: string[];
  url?: string;
  vehicles?: string[];
}

interface Props {
  person?: Person;
}

const PersonComponent: React.FC<Props> = ({ person }) => {
  return (
    <Wrapper>
      <h2>{person?.name}</h2>
      <AttributeComponent type="Gender" value={person?.gender} />
      <AttributeComponent type="Planet" value={person?.homeworld} />
      <AttributeComponent type="Height" value={person?.height} />
      <AttributeComponent type="Mass" value={person?.mass} />
      <AttributeComponent type="Eye Color" value={person?.eye_color} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  width: 20rem;
  padding: 1rem 1.3rem;
  background-color: #464650;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: all;
  transition-duration: 200ms;
  cursor: pointer;

  :hover {
    background-color: #222230;
    transform: translateY(-0.3rem);
  }

  h2 {
    margin: 0.5rem 0;
  }
`;

export default PersonComponent;
