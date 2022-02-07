import styles from './Item.module.css'
import React from 'react'
import ItemGallery from './ItemGallery'
import ItemBody from './ItemBody'


const Item = props => {
    return(
        <div className={styles.wrapper}>
            <ItemGallery who='main'/>
            <ItemBody />
        </div>
    )
}


export default Item