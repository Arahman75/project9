import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceDetails = () => {
    const [service] = useLoaderData()
    // const { id } = useParams();
    console.log(service);
    return (
        <div>
            <img src={service.image} alt="" />
            <h2>{service.id}</h2>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceDetails;