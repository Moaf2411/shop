import React,{useState,useEffect} from 'react'
import styles from './Header.module.css'
import logo from '../images/logo.svg'
import ham from '../images/icon-menu.svg'

import UserInfo from './UserInfo'
import { uiActions } from '../store/index'
import { useDispatch, useSelector } from 'react-redux'
import Hamburgur from './Hamburgur'


const Header = props => {
  
  
  const dispatch = useDispatch()
  const isDesktop = useSelector(state => state.ui.isDesktop)

  useEffect(() => {
    if (window.innerWidth > 600) {
      dispatch(uiActions.Desktop(true))
    } else {
      dispatch(uiActions.Desktop(false))
    }
    const updateMedia = () => {
      if (window.innerWidth > 600) {
        dispatch(uiActions.Desktop(true))
      } else {
        dispatch(uiActions.Desktop(false))
      }
    }
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, [])


  const cart = useSelector(state => state.ui.cartOpen)
  function openMenu(){
    dispatch(uiActions.toggleHam())
    if(cart){
      dispatch(uiActions.toggle())
    }
  }

  const isham = useSelector(state => state.ui.ham)





    return(
        <React.Fragment>
            <div className={styles.header}>
                {!isDesktop && 
                <img src={ham} className={styles.menu} onClick={openMenu}/>
                }

                {!isDesktop && isham &&
                  <Hamburgur/>}
                
                <div className={styles.logo}>
                    <img src={logo} />
                    {isDesktop &&
                        <ul className={styles.navbar}>
                            <li><a href='#'>Collection</a></li>
                            <li><a href='#'>Men</a></li>
                            <li><a href='#'>Women</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    }
                </div>

                <div className={styles.userinfo}><UserInfo /></div>
            </div> 
        </React.Fragment>
    )

}

export default Header










