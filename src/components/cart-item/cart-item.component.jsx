import { CartItemContainer, ItemDetails} from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    console.log("Coming from cart item");
    console.log(cartItem);
    const { name, quantity, imageUrl, price} = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
            
            
        </CartItemContainer>
    )
}

export default CartItem;
