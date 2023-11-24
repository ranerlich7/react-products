import { useState } from "react";

function AddProduct({ productAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  function fetchexample() {
    console.log(fetch("https://jsonplaceholder.typicode.com/todos"));
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }
  return (
    <>
      Name:
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Price:
      <br />
      <input type="number" step="0.1" value={price} onChange={(e) => setPrice(e.target.value)} />
      <br />
      <button
        className="btn btn-success"
        onClick={() => {
          fetchexample();
          productAdded(name, price);
        }}
      >
        Add Product
      </button>
    </>
  );
}
export default AddProduct;
