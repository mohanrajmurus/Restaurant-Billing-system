import React from 'react'

export default function Addnewitem(props) {
    const error=props.error;
    const newItem = props.newItem;
    const newPrice = props.newPrice;
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <h4>Add the New Item to Menu</h4>
            <div className='form'>
                <p>{error}</p>
                <input type={'text'} onChange={props.onChange} placeholder='Enter Item Name' name='newItem' value={newItem}/>
                <input type={'text'} onChange={props.onChangePrice} placeholder='Enter Item Price' name='newPrice' value={newPrice}/>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}
