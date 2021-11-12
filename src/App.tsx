import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import PersonComponent, { Person } from "./components/PersonComponent";
import SearchInput from "./components/SearchInput";
import { Title } from "./components/Title";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const query = useQuery(
    "people",
    async () => {
      const res = await axios.get(
        `https://swapi.dev/api/people/?search=${searchValue}`
      );
      console.log(res.data);
      return res.data.results as Person[];
    },
    {
      enabled: false,
    }
  );

  const refetch = () => {
    query.refetch();
  };

  return (
    <Wrapper>
      <Title> {query.isLoading ? "Loading..." : "Database Search"} </Title>
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        refetch={refetch}
      />
      {(query.data?.length as number) > 0 ? (
        <div className="main-grid">
          {(query.data as Person[])?.map((person) => {
            return <PersonComponent person={person} />;
          })}
        </div>
      ) : (
        <div id="center">
          <h2 id="none">Empty</h2>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-grid {
    margin: 1rem 0;
    display: grid;
    justify-items: center;
    gap: 0.5rem;
  }

  #none {
    color: white;
  }

  #center {
    display: flex;
    justify-content: center;
  }
`;

export default App;
