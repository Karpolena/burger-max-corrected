import React, {Component} from "react";

import Layout from "./component/Layout/Layout";
import BurgerBuilder from "./containers/burgerBuilder/BurgerBuilder";
import Checkout from "./containers/checkout/Checkout";


class App extends Component {
   
    render () {
        return (
            <div>
                <Layout>
                    <BurgerBuilder />
                    <Checkout />
                </Layout>
            </div>
        );
    }
}
           
    

   
export default App;