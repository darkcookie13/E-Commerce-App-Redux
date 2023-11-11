//In this code it defines a React component that renders single item in the shopping cart.
// to call reducer actions 
import { useDispatch } from "react-redux";

// thunk actions from Product Reducer
import {removeFromCartThunk,increaseQuantThunk,decreaseQuantThunk} from "../../Redux/Reducers/productReducer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';



// css styles from old other file
import oldStyles from "../../styles/itemCard.module.css"
// new css styles 
import styles from "../../styles/cart.module.css";


// render single cart item 
export default function CartItem(props){
    // for calling actions
    const dispatch = useDispatch();

    // product data from props
    const {name,image,price,category,quantity}=props.product;


    return(
        <>
            {/* item card container */}
            <div className={oldStyles.cardContainer} >
                
                {/* image container */}
                <div className={styles.imageContainer}>
                    {/* product image */}
                    <img src={image} alt={category} />
                </div>

                {/* description of the product name,price, add button */}
                <div className={styles.itemInfo}>
                    {/* product name */}
                    <div className={styles.namePrice}>
                        {name}
                    </div>
                    
                    <div className={styles.priceQuant}>
                        {/* price of the product */}
                        <div className={styles.price}>
                            ₹{price}   
                        </div>

                        {/* quantity of the product */}
                        <div className={styles.quantity}>

                            {/* to decrease product quantity */}
                            <span className={styles.minus}>
                                <FontAwesomeIcon icon = {faCircleMinus}
                                    // decrease product quantity 
                                    onClick={() => dispatch(decreaseQuantThunk(props.product))} />
                            </span>

                            {/* quantity */}
                             &nbsp; {quantity} &nbsp;

                            {/* increase product quantity */}
                            <span className={styles.plus}>
                                <FontAwesomeIcon icon={faCirclePlus}
                                    // increase product quantity
                                    onClick={() => dispatch(increaseQuantThunk(props.product))}/>    
                            </span>
                            
                        </div>

                    </div>

                    {/* remove from cart button */}
                    <div className={styles.btnContainer}>
                        <button className={styles.removeBtn}
                                // remove product from cart
                                onClick={() => dispatch(removeFromCartThunk(props.product))}>
                            Remove From Cart
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}
