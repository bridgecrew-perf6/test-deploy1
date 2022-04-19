import React from "react"; 

import "./SearchForm.css";


export default function SearchForm (){
  return (
    <div className="SearchForm">
      <form>
        <div className="row">
          <div className="col">
            <input 
            className="WordSearch"
            type="search"
            placeholder="What word do you wanna search today? "
            autoComplete="off"
            autoFocus="on"
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