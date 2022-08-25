import React,{useState} from 'react';
import './shopping.css'
import Menu from './Menu';
import Billing from './Billing';
import Addnewitem from './Addnewitem';

export default function Restaurant() {
    const [items,setItems] = useState([
        {
            itemName:'Chicken Biriyani',
            itemQantity: 0,
            price:180
        },
        {
            itemName:'Mutton Biriyani',
            itemQantity: 0,
            price:240
        },
        {
            itemName:'Beef Biriyani',
            itemQantity: 0,
            price:190
        }
    ]);

    const [newItem,setNewItem] = useState('');
    const [newPrice,setNewPrice] = useState('');
    const [error,setError] = useState('');



    const handleIncrease = (e) => {
        
        const itemIndex = e.target.attributes.itemindex.value;
        
        let newItem = [...items]
        newItem[itemIndex].itemQantity = items[itemIndex].itemQantity+1;
        setItems(newItem)  
    }
    const handleDecrease = (e) => {
         //console.log('clicked');
         const itemIndex = e.target.attributes.itemindex.value;
         //console.log(itemIndex);
         let newItem = [...items]
         if(newItem[itemIndex].itemQantity > 0){
            newItem[itemIndex].itemQantity = items[itemIndex].itemQantity-1;
            setItems(newItem)
         }  
    }

    const totalAmount = (items) => {
        let sum = 0;
        items.forEach(element => {
            sum += ((element.itemQantity*element.price))
        });
        return sum;
    }

    const handleChangeName = (e) => {
        setNewItem(e.target.value)
    }
    const handleChangePrice = (e) => {
        const value = Number(e.target.value);
        setNewPrice(value);
    }
    const validateForm = () => {
        let msg = ''
        if(!newItem && !newPrice)
            msg="Please Enter Details";
        setError(msg)
        return (msg.length === 0)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const isformValid = validateForm();
        if(isformValid)
        {
            const newItemList = {
                itemName:newItem,
                itemQantity:0,
                price:Number(newPrice)
            }
            setItems([...items,newItemList])
            setNewItem('')
            setNewPrice('')
        }
    
    }


  return (
    <React.Fragment>
        <div className='main-container'>
            <div className='container'>
                <Menu 
                    items={items} 
                    onClick={handleDecrease} 
                    onClick1={handleIncrease}
                    
                />
                <Billing 
                    items={items}
                    totalAmount={totalAmount}
                />
            </div>
            <Addnewitem 
                error={error}
                newItem={newItem}
                newPrice={newPrice}
                onSubmit={handleSubmit}
                onChange={handleChangeName}
                onChangePrice={handleChangePrice}
            />
        </div>
    </React.Fragment>
  )
}
