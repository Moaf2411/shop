import styles from './ItemGallery.module.css'
import React, { useEffect, useState } from 'react'
import big1 from '../images/image-product-1.jpg'
import small1 from '../images/image-product-1-thumbnail.jpg'
import big2 from '../images/image-product-2.jpg'
import small2 from '../images/image-product-2-thumbnail.jpg'
import big3 from '../images/image-product-3.jpg'
import small3 from '../images/image-product-3-thumbnail.jpg'
import big4 from '../images/image-product-4.jpg'
import small4 from '../images/image-product-4-thumbnail.jpg'
import Thumbnail from './Thumbnail'
import next from '../images/icon-next.svg'
import prev from '../images/icon-previous.svg'

import { uiActions } from '../store'
import { useDispatch, useSelector } from 'react-redux'


const ItemGallery = props => {
    const thums = [small1,small2,small3,small4]
    const bigs = [big1,big2,big3,big4]
    const [image,setImage] = useState(bigs[0])
    const dispatch = useDispatch()
    const modal = useSelector(state => state.ui.modal)
    const active = useSelector(state => state.ui.thumb)
    


    function open(image){
        for(let i = 0;i<thums.length;i++){
            if(thums[i] == image){
                setImage(bigs[i])
                if(modal === true){
                    dispatch(uiActions.setActive({active:i,who:'modal'}))
                }
                else{
                    dispatch(uiActions.setActive({active:i,who:'main'}))
                }
                break
            }
        }
    }


    function prev1(){
        let j = 0
        if(active.active === 0){
            j = bigs.length - 1
        }
        else{
            j = active.active - 1
        }

        setImage(bigs[j])
        dispatch(uiActions.setActive({active:j,who:props.who}))
    }

    function next1(){
        let j = 0
        if(active.active === bigs.length - 1){
            j = 0
        }
        else{
            j = active.active + 1
        }

        setImage(bigs[j])
        dispatch(uiActions.setActive({active:j,who:props.who}))
    }



    function openModal(){
        dispatch(uiActions.toggleModal())
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.big} >
               <img src={prev} className={styles.prev} onClick={prev1} />
               <img src={image} className={styles.bigimage} onClick={openModal}/>
               <img src={next} className={styles.next} onClick={next1} />
            </div>
            <div className={styles.small}>
                {thums.map((m,i)=><Thumbnail img={m} open={open} num={i} key={i} who={props.who}/>)}
            </div>
        </div>
    )
}


export default ItemGallery




