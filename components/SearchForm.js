import React,{ useState, useEffect } from "react";
import { organizationFields, ticketFields, userFields } from "../utils/helper";

const SearchForm = ({ handleSearch, tableName }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedField, setSelectedField] = useState("");

  useEffect(() => {
    setSelectedField(getFieldList()[0]);
  },[tableName]);

  const handleClick = () => {
    handleSearch(selectedField, searchValue);
  }

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  }

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

  const getFieldList = () => {
    switch (tableName) {
      case "organizations": return organizationFields;
      case "tickets": return ticketFields;
      case "users": return userFields;
    }
  }

  return(
    <React.Fragment>
      <div className="d-flex align-items-center mb-2">
        <span className="ms-2">Search by:</span>
        <span className="ms-2">
          <select className="form-select" required onChange={handleFieldChange} value={selectedField}>
            {
              getFieldList()?.map(field => <option value={field} key={field}>{field}</option>)
            }
          </select>
        </span>
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" onChange={handleSearchValue}/>
        <button className="btn btn-primary ms-3" type="button" onClick={handleClick}>Search</button>
      </div>
    </React.Fragment>
  )
};

export default SearchForm;