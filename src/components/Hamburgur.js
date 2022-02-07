import React, { useEffect, useRef } from 'react'
import styles from './Hamburgur.module.css'
import Overlay from './Modal'
import close from '../images/icon-close.svg'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/index'

const Hamburgur = props => {
    
    const dispatch = useDispatch()
    const hamb = useRef()

    useEffect(()=>{
        hamb.current.classList.add(styles.transform1)
    })


    function closeHam(){
        dispatch(uiActions.toggleHam())
    }


    return(
        <Overlay>
            <div className={styles.menu} ref={hamb}>
                <img src={close} className={styles.close} onClick={closeHam}/>
                    <ul className={styles.navbar}>
                        <li><a href='#'>Collection</a></li>
                        <li><a href='#'>Men</a></li>
                        <li><a href='#'>Women</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
            </div>
        </Overlay>
    )
}

export default Hamburgur