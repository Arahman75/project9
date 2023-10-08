import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [detail, setDetail] = useState({})

    const { id } = useParams();
    const ServiceDetail = useLoaderData()


    useEffect(() => {
        const findDetail = ServiceDetail?.find(service => JSON.stringify(service._id) === id)

        setDetail(findDetail)
    }, [id, ServiceDetail])

    return (
        <div>
            <h3>detail : {id}</h3>
            <img src={detail.image} alt="wedding" />
            <h2>{detail._id}</h2>
            <p>{detail.description}</p>
        </div>
    );
};

export default ServiceDetails;