import React, { useEffect, useState } from "react";

function FilterComponent() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const fetchProduct = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/products");
    setData(await response.json());
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>Search Products</h1>
      </div>
      <div className="body">
        <input
          className="input-style "
          type="text"
          name="product"
          onChange={(e) => setInput(e.target.value)}
        />

        <h2>list of products</h2>
        <ul className="ul-items">
          {data
            .filter((data) => data.product_name.toLowerCase().includes(input))
            .map((items) => {
              return (
                <>
                  <li className="list-items" key={items.id}>
                    {items.product_name}
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
export default FilterComponent;
