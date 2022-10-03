import React, { useMemo, useRef, useState } from "react";

//useMemo là một Hooks
//Tránh thực hiện lại một logic nào đó ko cần thiết

function UseMemo(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  //Lấy đc DOM element thật của input
  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name: name,
        price: +price, //để convert price to number(Number(price), parseInt(price)
      },
    ]);
    setName("");
    setPrice("");

    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((sum, product) => {
      console.log("Bị tính toán lại");
      return sum + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div>
      <h1>useMemo</h1>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <p>Total: {total}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
