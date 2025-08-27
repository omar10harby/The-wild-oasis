import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortByValue = searchParams.get("sortBy") || "";
  function handleChange(value) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      value={currentSortByValue}
      onChange={handleChange}
      type={"white"}
    />
  );
}

export default SortBy;
