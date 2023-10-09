import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const OtherSection = () => {
    const [extraCard, setExtraCard] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setExtraCard(data))
    }, [])
    // const { name, image, price, description } = service;
    return (
        <div className='mt-24'>
            <h2 className='text-5xl font-bold text-center mb-6'>Others Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    extraCard.map(service => <Card key={service.id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default OtherSection;