import styles from './ItemBody.module.css'
import React, { useRef } from 'react'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import cart from '../images/icon-cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/index'

const ItemBody = props => {

    const total = useSelector(state => state.cart.total)
    const name = 'Fall Limited Edition Sneaker'
    const price = 125
    const items = useSelector(state => state.cart.items)
    const amount = useRef()

    const dispatch = useDispatch()

    function order(){
        if(amount.current.innerText ==='0'){
            return
        }
        for(let i = 0;i<parseInt(amount.current.innerText);i++){
            dispatch(cartActions.addItem({name:name,id:'i1',price:price}))
        }
        amount.current.innerText='0'
    }

    function inc(){
        
        let am = parseInt(amount.current.innerText)
        am += 1
        amount.current.innerText = am
    }
    
    function dec(){
        
        let am = parseInt(amount.current.innerText)
        am -= 1
        if(am < 0){
            return
        }
        amount.current.innerText = am
    }




    return(
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <p className={styles.company}>SNEAKER COMPANY</p>
                <h2 className={styles.title}>Fall Limited Edition Sneakers</h2>
                <p className={styles.desc}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <h3 className={styles.price}>$125.00</h3>

            </div>
            <div className={styles.ord}>
                <div className={styles.amount}>
                    <img src={minus} onClick={dec}/>
                    <p ref={amount}>{total} </p>
                    <img src={plus} onClick={inc}/>
                </div>
                <div className={styles.butt} onClick={order}>
                    <img src={cart} />
                    <p>Add to cart</p>
                </div>
            </div>
        </div>
    )
}


export default ItemBody


