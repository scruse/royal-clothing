import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer className="cart-item-container">
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails className="item-details">
        <CartItemName as='span'>{name}</CartItemName>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
