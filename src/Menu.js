import React from 'react'

export default function Menu(props) {
    const items = props.items;
  return (
                <section className='section-container'>
                    <h1>Restaurant Menu </h1>
                    <ul>
                        {
                            items.map((item,index) => {
                                return(
                                    <li className='item-list' key={index} >
                                        <p className='item-name'>{item.itemName} - {item.price}</p>
                                        <p className='item-quantity'>
                                            <span className='decrease' onClick={props.onClick}itemindex={index}>-</span>
                                            <span className='quantity'>{item.itemQantity}</span>
                                            <span className='increase' onClick={props.onClick1}itemindex={index}>+</span>
                                        </p>
                                        
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </section>
  )
}
