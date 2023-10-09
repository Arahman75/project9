import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { service_name, _id, image, price, description } = service;
    return (
        <div className="card card-compact bg-gray-100 shadow-xl">
            <figure><img className='h-64 w-full ' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{service_name}</h2>
                <p className='text-xl font-semibold'>{price}</p>
                <p className='text-lg'>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn text-red-600 bg-gray-300"><Link to={`service/${_id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Service;