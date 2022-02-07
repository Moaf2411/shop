import React from 'react'
import ReactDom from 'react-dom'
import styles from './Modal.module.css'


const Modal = props => {
    return(
        <div className={styles.modal}>
            {props.children}
        </div>
    )
}



const Overlay = props => {
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Modal children={props.children} />,document.getElementById('overlay'))}
        </React.Fragment>
    )
}


export default Overlay