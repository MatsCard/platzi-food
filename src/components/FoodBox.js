import React from 'react';


function FoodBox({img, title, description, cost, review }) {
    return (
        
        <div className="mx-2 lg:mx-auto-0 mt-4 w-1/2 lg:flex rounded-lg lg:bg-gray-300">
            <img className="w-full lg:w-48 lg:h-full object-cover object-left rounded-lg lg:rounded-r-none" src={img} alt=""/>
            <div className="relative mx-2 p-2 shadow-lg rounded-lg -mt-2 lg:shadow-none bg-gray-300 lg:bg-transparent lg:pt-3">
                <h2 className="text-xl tracking-tight font-semibold uppercase text-gray-900 lg:text-lg">{title}</h2>
                <p className="text-gray-700 leading-snug">{description}</p>
                <div className="mt-2 text-sm font-semibold text-gray-700">{cost}</div>
                <div className="mt-2 text-xs text-yellow-700"> &#9733;&#9733;&#9733;&#9733;&#9734; / {review} Reseñas</div>
            </div>
        </div>
    )
}

export default FoodBox;