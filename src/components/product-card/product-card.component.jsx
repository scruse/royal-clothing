import {useContext } from 'react';
import "./product-card.styles.scss";
import Button from "../ui/button.component";

import { CartContext } from "../../contexts/cart.context";

const ProductCard = (product) => {
  const { name, price, imageUrl } = product.products;

  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(product.products)


  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted" onClick={addToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
