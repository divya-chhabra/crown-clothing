import { CheckoutContainer, Total, CheckoutHeader, HeaderBlock } from './checkout.styles';
import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () =>{

    const { cartItems, cartTotal } = useContext(CartContext);
    console.log(cartItems);

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem)=>{
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                })
            }

            <Total>
                <span>Total:${cartTotal}</span>
            </Total>
        </CheckoutContainer>
    )

}

export default Checkout;
