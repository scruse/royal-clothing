import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";
import Button from "../ui/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/checkout");
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={routeChange}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
