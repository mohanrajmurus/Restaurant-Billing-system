import React from 'react'

export default function Billing(props) {
    const items=props.items
  return (
    <section className='price-container'>
                    <h1>Billing System</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item,index) => {
                                    if(item.itemQantity){
                                        return(
                                            <tr key={index}>
                                                <td>{item.itemName}</td>
                                                <td>{item.itemQantity}</td>
                                                <td>{item.price}</td>
                                                <td>{item.itemQantity*item.price}</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })
                            }
                            <tr>
                                <td colSpan={3}><b>Total Amount</b></td>
                                
                                <td>{props.totalAmount(items)}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
  )
}
