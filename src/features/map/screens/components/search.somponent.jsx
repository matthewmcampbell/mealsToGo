import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../services/location/location.context";
import { SearchContainer } from "./search.styles";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="earth"
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
