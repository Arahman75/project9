import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [detail, setDetail] = useState({})

    const { id } = useParams();
    const ServiceDetail = useLoaderData()


    useEffect(() => {
        const findDetail = ServiceDetail?.find(service => JSON.stringify(service._id) === id)

        setDetail(findDetail)
    }, [id, ServiceDetail])

    return (
        <div className="card card-compact bg-gray-100 shadow-xl">
            <figure><img className='h-[400px] w-full ' src={detail.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{detail.service_name}</h2>
                <p className='text-xl font-semibold'>{detail.price}</p>
                <p className='text-lg'>{detail.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn text-red-600 bg-gray-300"><Link to="/">Go Back</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;