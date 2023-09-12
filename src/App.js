import axios from "axios";

function App() {
  function getProducts() {
    axios
      .get("https://django-rest-product.onrender.com/product")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  return (
    <>
      <button onClick={getProducts}>Get Products</button>
    </>
  );
}

export default App;
