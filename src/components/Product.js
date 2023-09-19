function Product({ product }) {
  return (
    <>
      {/* <li>
        {product.name} - {product.price} - {product.category}
      </li> */}
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={"https://picsum.photos/268/180?random=" + product.id}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {product.name} - category:{product.category}
          </h5>
          <p className="card-text">{product.price}</p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </>
  );
}

export default Product;
