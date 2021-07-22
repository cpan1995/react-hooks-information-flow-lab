import React, { useState } from "react";


export default function Filter({onCategoryChange}){
    let [currentState, setState] = useState('true')
    console.log(onCategoryChange)
    function test(e){
        setState();
        onCategoryChange(e)
    }
    return(
        <div className="Filter">
            <select name="filter" onChange={test}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    )
}