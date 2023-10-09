import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Service from '../../components/Service/Service';
import OnlineService from '../../components/OnlineService/OnlineService';
import OtherSection from '../../components/OtherSection/OtherSection';


const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='my-20'>
                <h2 className='text-5xl font-bold text-center mb-6'>Our Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
            <OnlineService></OnlineService>
            <OtherSection></OtherSection>
        </div>
    );
};

export default Home;