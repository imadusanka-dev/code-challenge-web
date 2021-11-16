import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import RadioGroup from "./RadioGroup";
import SearchForm from "./SearchForm";

import Organizations from "./Organizations";
import Users from "./Users";
import Tickets from "./Tickets";
import searchService from "../service/SearchService";

const ContentWrapper = () => {
  const [selectedTableName, setSelectedTableName] = useState("organizations");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults([]);
  }, [selectedTableName]);

  const handleSearch = (field, searchValue) => {
    switch (selectedTableName) {
      case "organizations": searchOrganizations(field, searchValue);
      break;
      case "tickets": searchTickets(field, searchValue);
      break;
      default: searchUsers(field, searchValue);
    }
  }

  const searchOrganizations = async (field, searchValue) => {
    try {
      const response = await searchService.searchOrganizations(field, searchValue);
      setResults(response?.data);
    } catch (e) {
      toast.error(e.response.data);
    }
  }

  const searchTickets = async (field, searchValue) => {
    try {
      const response = await searchService.searchTickets(field, searchValue);
      setResults(response?.data);
    } catch (e) {
      toast.error(e.response.data);
    }
  }

  const searchUsers = async (field, searchValue) => {
    try {
      const response = await searchService.searchUsers(field, searchValue);
      setResults(response?.data);
    } catch (e) {
      toast.error(e.response.data);
    }
  }

  const getResultsDisplayComponent = () => {
    switch (selectedTableName) {
      case "organizations": return <Organizations data={results}/>
      case "users": return <Users data={results}/>
      case "tickets": return <Tickets data={results}/>
    }
  }

  return(
    <div className="mt-5">
      <RadioGroup
        handleRadio={setSelectedTableName}
      />
      <SearchForm
        tableName={selectedTableName}
        handleSearch={handleSearch}
      />
      {getResultsDisplayComponent()}
    </div>
  )
}

export default ContentWrapper;