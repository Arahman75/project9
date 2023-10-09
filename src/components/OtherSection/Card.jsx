import React from 'react';

const Card = ({ service }) => {
    const { name, image, price } = service;
    return (
        <div className="card  bg-gray-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" className="w-full h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className='text-lg font-semibold'>Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn text-white font-semibold bg-red-500">Confirm Now</button>
                </div>
            </div>

        </div>
    );
};

export default Card;