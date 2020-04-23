import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/The-PicSome-webshop/">
                    <Photos />
                </Route>
                
                <Route path="/The-PicSome-webshop/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App