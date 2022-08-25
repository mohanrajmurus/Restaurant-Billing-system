import React,{useState} from 'react'

export default function Test() {
    const[count,setCount] = useState(1);
const handleClick = () => {
    setCount(count+1);
    const Text = ()=> {
        return(
            <div>
                <h1>Hello World</h1>
            </div>
         )
    }
    if(count > 0){
        return <Text/>;
    }
}
  return (
    <div>
        <button onClick={handleClick}>click</button>
        <div><Text /></div>
    </div>
  )
}
