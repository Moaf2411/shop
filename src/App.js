import Header from './components/Header';
import './App.css';
import Item from './components/Item';
import React from 'react';
import Overlay from './components/Modal';
import { useSelector } from 'react-redux';
import SlideShow from './components/SlideShow';

function App() {

  const modal = useSelector(state => state.ui.modal)



  return (
    <React.Fragment>
      {modal && 

      <Overlay >
          <SlideShow />
      </Overlay>
      
      }
      <Header />
      <Item />
      
    </React.Fragment>
  )
}

export default App;
