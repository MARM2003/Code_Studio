import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const KeywordSearch = () => {
    const [keyword, setKeyword] = useState("");
    const [tags, setTags] = useState([]);
    const [filteredTags, setFilteredTags] = useState([]);

    const handleKeywordInput = (e) => {
        const input = e.target.value.toLowerCase();
        setKeyword(input);
        const filtered = tags.filter(tag => tag.toLowerCase().includes(input));
        setFilteredTags(filtered);
    };

    const fetchTag = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/v1/question");
            let tagsArray = [];
            response.data.forEach((ele) => {
                let tagList = ele.question.question.tag.split(",");
                tagsArray.push(...tagList);
            });
            tagsArray = [...new Set(tagsArray)]; // Remove duplicates
            setTags(tagsArray);
            setFilteredTags(tagsArray);
        } catch (error) {
            console.error("Error fetching tags:", error);
        }
    };

    useEffect(() => {
        fetchTag();
    }, []);

    return (
        <div className="min-w-[300px] max-w-[300px] h-fit pt-8 pl-10 pr-10 pb-10 bg-white rounded-[17px] sticky top-32">
            <div className="Heading text-black 2xl:text-[35px] font-normal my-2">Tags</div>
            <div className="search flex items-center w-full relative">
                <input
                    className="relative w-full border border-black h-10 rounded-[7px] text-black text-lg font-light tracking-[3.24px] pl-8 focus:outline-orange-600"
                    type="text"
                    placeholder="Search"
                    onChange={handleKeywordInput}
                    value={keyword}
                />
                <AiOutlineSearch className="absolute left-3 text-xl" />
            </div>
            <div className="tags flex flex-wrap mt-7 gap-2">
                {filteredTags.map(tag => (
                    <Link
                        to={`/question/${tag}/`}
                        key={tag}
                        className="w-fit border rounded-2xl py-2 px-3 hover:border-orange-600 capitalize">
                        {tag.split('"')}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default KeywordSearch;
