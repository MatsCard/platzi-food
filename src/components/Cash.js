import React from 'react';


function Cash(props) {

  const items = ['$', '$$', '$$$', '$$$$', '$$$$']

  const [cash, setCash] = React.useState(0)

  const cashItems = items.map( (item, key) => {
    return (<div key={key} className={`ml-2 ${key === cash && "text-primary" } `} onClick={() => {setCash(key)}}>{item}</div>)
  });

    return (
        
        <div className="flex" >
        {cashItems}
      </div>
    )
}

export default Cash;