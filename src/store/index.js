import {createSlice,configureStore} from '@reduxjs/toolkit'


////////////////////// CART ////////////////////
const cartSlice = createSlice({
    name:'cart',
    initialState:{items:[],total:0},
    reducers:{
        addItem(state,action){
            state.total++
            let added = false
            for( let i of state.items){
                if(i.id === action.payload.id){
                    i.amount+=1
                    i.price+=action.payload.price
                    added = true
                }
            }
            if(!added){
                action.payload.amount = 1
                state.items=[...state.items,action.payload]
            }
        },
        removeItem(state,action){
            if(state.total === 0 ){
                return
            }
            state.total-=1
            for(let i of state.items){
                if(i.id === action.payload){
                    i.amount-=1
                }
            }


        }
    }
})



/////////////////////// UI //////////////////////
const uiSlice = createSlice({
    name:'ui',
    initialState:{cartOpen:false,isDesktop:false,thumb:{active:0,who:'main'},modal:false,ham:false},
    reducers:{
        toggle(state){
            state.cartOpen = !state.cartOpen
        },
        Desktop(state,action){
            state.isDesktop = action.payload
        },
        setActive(state,action){
            state.thumb = action.payload
        },
        toggleModal(state){
            state.modal = !state.modal
        },
        toggleHam(state){
            state.ham = !state.ham
        }
    }
})





const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        ui:uiSlice.reducer
    }
})

export default store
export const uiActions = uiSlice.actions
export const cartActions = cartSlice.actions







