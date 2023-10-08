import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { service_name, id, image, price, description } = service;
    return (
        <div className="card card-compact bg-gray-100 shadow-xl">
            <figure><img className='h-56 w-full ' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`service/:${id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Service;