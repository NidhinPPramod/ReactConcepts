import React, {useEffect, useState} from 'react'

function Counter1  ()  {

    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log('Mounting');
        console.log('Updating'+count);

        return ()=>{
            console.log('clean Up'+count)
        }

    },[count])

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Add</button>
      <h1>Helo I am the Component:{count}</h1>
    </div>
  )
}

export default Counter1
