function Product({ product, colors }) {
  return (
    <>
      <li>
        {product.name} - {product.price} - {product.category}
      </li>
    </>
  );
}

export default Product;
