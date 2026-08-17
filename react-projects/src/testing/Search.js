import React, { useState } from "react";

const userData = [
    {
        'name' : "Alice",
        'email' : "alice123@gmail.com"
    },
    {
        'name' : "Bob",
        'email' : "bob456@gmail.com"
    },
]

const Search = () => {
    const [search, setSearch] = useState(" ");

    const handleInputChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    const filteredData = userData.filter((user) => 
        user.toLocaleLowerCase().includes(search.toLowerCase())
    )
    
    return (
        <div>
            <input 
               type="search" 
               placeholder="Search here..." 
               onChange={handleInputChange}
            />
            {
                filteredData.map((user) => {
                    return <div>
                        <h1> {user.name} </h1>
                        <h1> {user.email} </h1>
                    </div>
                })
            }
        </div>
    );
};

export default Search;