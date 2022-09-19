import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer, ImageContainer, Quantity, Name, Price, RemoveButton } from './checkout-item.styles';


const CheckoutItem = ({cartItem}) =>{

    const { name, price, quantity, imageUrl} = cartItem;

    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);

    const addItemHandler = () => addItemToCart(cartItem);

    const removeItemHandler = () => removeItemFromCart(cartItem);

    return(

        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            
            <Name>{name}</Name>

            <Quantity>
                <div className='arrow' onClick={removeItemHandler}>&lt;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&gt;</div>
            </Quantity>
            <Price>${price}</Price>
            <RemoveButton onClick={clearItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    )

}

export default  CheckoutItem;