import React, { useState } from 'react'

const CheckoutPage = (props) => {
  
    const[price, setPrice] = useState(0);
    const calculateSubtotal = () => {
        let subtotal = 0;
        props.cart.forEach(item => {
          subtotal += item.price * item.value;
        });
        return subtotal;
      };
  return (
    <div className="container my-4">
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Unit price</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.value}</td>
              <td>₱{item.price.toFixed(2)}</td>
              <td>₱{(item.price * item.value).toFixed(2)}</td>
              <td>
                <a onClick={() => props.onDelete(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash text-center" viewBox="0 0 16 16" color="red">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                </a>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end">
        <strong>Subtotal:</strong> ₱{calculateSubtotal().toFixed(2)}
      </div>
    </div>
  )
}

export default CheckoutPage