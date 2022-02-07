import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/index'
import styles from './Thumbnail.module.css'

const Thumbnail = props => {
    const im = useRef()
    const thumb = useSelector(state => state.ui.thumb)
    const dispatch = useDispatch()

    function open(){
        props.open(props.img)
    }





    return(
        <div className={(thumb.active===props.num&&thumb.who===props.who)? styles.bord:'' + ' ' + styles.wrapper}>
            <img ref={im} src={props.img} className={styles.image + ` ${(thumb.active===props.num && thumb.who===props.who)? styles.active:''}`} onClick={open}/>
        </div>
    )
}

export default Thumbnail