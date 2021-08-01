import React from 'react';


function Star(props) {

  const items = ['0;', '1;', '2', '3', '4']

  const [star, setStar] = React.useState(0)

  const cashItems = items.map( (item, key) => {
    return (<div  key={key} className={`ml-2 ${key - 1 < star && "text-primary" } `} onClick={() => {setStar(key)}} >&#9733;</div>)
  });

    return (
        
        <div className="flex">
        Calificacion
        {cashItems}
      </div>
    )
}

export default Star;
