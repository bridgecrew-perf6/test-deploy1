import React, {useState} from "react"; 

import "./SearchForm.css";


export default function SearchForm (){
  let [keyword, setKeyword] = useState("");


  function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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