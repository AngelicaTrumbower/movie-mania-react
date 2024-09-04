import React from "react";

const Filter = () => {
    return (
        <div className="filter">
            <select id="filter" onclick="filterMovies(event)" >
                <option value disabled selected>Sort</option>
                <option value="Title:A-Z">Title:A-Z</option>
                <option value="Year:New to Old">Year:New to Old</option>
                <option value="Year:Old to New">Year:Old to New</option>
            </select>
        </div>
    );
}

export default Filter;