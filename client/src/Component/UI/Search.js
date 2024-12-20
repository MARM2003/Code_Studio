import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import SearchResult from './SearchResult';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setShowSearch(value !== "");
    }

    return (
        <>
            <div className="xl:w-3/6 relative">
                <input
                    type="text"
                    className="rounded-xl shadow-md text-black text-[25px] font-normal xl:w-full h-14 bg-white pl-14 placeholder:-tracking-tight"
                    placeholder="QuestionSearch"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button
                    type="submit"
                    className="absolute text-white align-middle inline-flex justify-center items-center xl:w-12 h-14 right-0 bg-orange-600 rounded-tr-xl rounded-br-xl text-[25px]"
                >
                    <AiOutlineSearch />
                </button>
            </div>
            {showSearch &&
                <SearchResult search={searchQuery} />
            }
        </>
    );
}

export default Search;
