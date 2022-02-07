import Item from './Item'
import { useSelector } from 'react-redux'
import styles from './Cart.module.css'


const Cart = props => {
    const total = useSelector(state => state.cart.total)
    const items = useSelector(state => state.cart.items)
    
    return(
        <div className={styles.cart}>
            <div className={styles.textWrapper}>
                <p className={styles.text}>Cart</p>
            </div>
            <div className={styles.items}>
                {items.map(m => 
                <div className={styles.item}>
                    <p className={styles.name}>{m.name}</p>
                    <p className={styles.amount}>amount : {m.amount}</p>
                    <p className={styles.price}>price : {m.price}</p>
                </div>
                    
                    
                    
                    
                    )}
            </div>
            {total === 0 && <div className={styles.empty}>Your cart is empty!</div>}
        </div>
    )
}

export default Cart