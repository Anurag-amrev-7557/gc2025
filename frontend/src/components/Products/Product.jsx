import React, {useState,useEffect,useRef} from 'react'
import './Product.css'


function Product({name,price,quantity,image}) {
  return (
    <div id="productmain">
      <div id="producttop">
        <img src={image} />
      </div>
      <div id="productbottom">
        <div id="pb1"><i className="ri-timer-flash-fill"></i> Available</div>
        <div id="pb2"><h2>{name}</h2></div>
        <div id="pb3">
          <div id="quantity">{quantity}</div>
          <div id="price">₹ {price}</div>
        </div>
        <div id="pb4">
          <button id="addtocart">Add to Cart</button>
          <button id="buynow">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Product
