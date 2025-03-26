"use client"
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
    const [ keyword , setKeyword ] = useState("");

    const handleInput = (e)=>{
        const target = e.target.value;
        setKeyword( target );
        handleFocus();
        if( target.length === 0 ){
            handleBlur();
        }
    }


  return (
    <div id="search-bar" className="flex w-full justify-between items-center border border-gray-400 rounded-lg px-4 py-2">
        <input 
            type="text" 
            name="keyword" 
            id="search-word" 
            placeholder="Search Products"
            className="p-1 text-sm outline-none w-full"
            onChange={handleInput}
            value={keyword}
        />
        <button className="border-l border-gray-400 px-2">
            <Search />
        </button>
    </div>
  );
};

export default SearchBar;
