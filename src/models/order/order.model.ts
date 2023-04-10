// /**
//  *
//  * @interface Order
//  */

// import { OrderStatusEnum } from "@constants/order-status";
// import { CartItem } from "../Cart/cart-item.model";
// import { OrderDetails } from "./order-details.model";

// export class Order  {
//   constructor(
//     public id?: number ,
//     public name?: string ,
//     public orderNumber?: string ,
//     public note?: string ,
//     public subtotal?: number ,
//     public totalPrice?: number ,
//     public deliveryPrice?: number ,
//     public chargeAmount?: number ,

//     public shopId?: number ,
//     public SubtotalName?: string ,

//     public deliveryMethodId?: number ,
//     public paymentMethodId?: number ,
//     public userAddressId?: number ,
//     public orderStatus?: OrderStatusEnum ,
//     public userId?: string ,
//     public userName?: string ,
//     public orderDetails?: OrderDetails[] ,
//     public cartItems? : CartItem[],
//     public shipToAddress?:any
//   ){}
// }
