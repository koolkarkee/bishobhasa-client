import React from 'react'
import AppRoutes from './routing/app.routing' 
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from "react-redux";
import { store } from "./store";

function Welcome(args){
  console.log('args >> ', args)

  return (
    <div className="container"> 
      <Provider store={store}>
        <AppRoutes></AppRoutes>
        <ToastContainer></ToastContainer>
      </Provider>  
    </div>
  )  
}

export const App = Welcome