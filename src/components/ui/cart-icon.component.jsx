import { useContext } from "react";
import { CartContext } from '../../contexts/cart.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const onClickHandler = () => {
        console.log(isCartOpen);
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartIconContainer onClick={onClickHandler} >
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;