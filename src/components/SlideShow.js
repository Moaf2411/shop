import { useDispatch } from "react-redux"
import ItemGallery from "./ItemGallery"
import { uiActions } from "../store/index"

import styles from './SlideShow.module.css'
import closeIcon from '../images/icon-close.svg'

const SlideShow = props => {
    
    const dispatch = useDispatch()
    function close(){
        dispatch(uiActions.toggleModal())
    }

 return(
        <div className={styles.wrapper} >
            <img src={closeIcon} className={styles.close} onClick={close}/>
            <ItemGallery who='modal'/>
        </div>
    )
}


export default SlideShow