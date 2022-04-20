import React, {useState} from "react"; 
import axios from "axios";

import "./Dictionary.css";


export default function Dictionary (){
  let [keyword, setKeyword] = useState("");

  function handleResponse (response) {
    console.log(response.data[0]);
  }


  function search(event){
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }


  return (
    <div className="SearchForm">
      <form onSubmit={search}>
        <div className="row">
          <div className="col">
            <input 
            className="WordSearch"
            type="search" onChange={handleKeywordChange}
            placeholder="What word do you wanna search today? "
            autoComplete="off"
            autoFocus={true}
            />
          </div>
          <div className="col">
            <input 
            type="submit"
            className="SearchButton"
            value="Search"/>

          </div>

        </div>
      </form>
      
    </div>
  );
}