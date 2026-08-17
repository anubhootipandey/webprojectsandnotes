import React, { useState } from "react";

const products = [
  { id: 1, name: "Product A", price: 40 },
  { id: 2, name: "Product B", price: 100 },
  { id: 3, name: "Product C", price: 70 },
];

const SearchAndSort = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      (sort === "name" ? a.name.localeCompare(b.name) : a.price - b.price
    ));

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="name">Sort by name</option>
        <option value="price">Sort by price</option>
      </select>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchAndSort;
