import styles from './UserInfo.module.css'
import cartIcon from '../images/icon-cart.svg'
import profilePic from '../images/image-avatar.png'

import {useSelector,useDispatch} from 'react-redux'
import React from 'react'
import Cart from './Cart'
import { uiActions } from '../store/index'

const UserInfo = props => {
    const dispatch = useDispatch()

    const total = useSelector(state => state.cart.total)
    const showcart = useSelector(state => state.ui.cartOpen)

    function togglecart(){
        dispatch(uiActions.toggle())
    }


    return(
        <div className={styles.wrapper}>
            <div className={styles.userInfo}>
                <button className={styles.cart}>
                    {total !== 0 && <p className={styles.num}>{total}</p> }
                    <img src={cartIcon} className={styles.carticon}  onClick={togglecart} />
                    </button>
                <img src={profilePic} className={styles.avatar}/>
            </div>
            {showcart && <Cart />}
        </div>
    )
}


export default UserInfo

