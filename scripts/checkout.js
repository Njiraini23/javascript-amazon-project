import { renderOrderSummary } from "./checkout/ordersSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/backend-practice.js';
// import '../data/cart-class.js';

new Promise((resolve)=>{
    loadProducts(()=>{
        resolve( )
    })
}).then(()=>{

})

renderOrderSummary();
renderPaymentSummary();
