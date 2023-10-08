import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Service from '../../components/Service/Service';
import OnlineService from '../../components/OnlineService/OnlineService';

const Home = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div>
            <Banner></Banner>
            <div className='my-20'>
                <h2 >Our Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
            <OnlineService></OnlineService>
            <div>
                <h3 className='text-2xl text-red-600'>This is a home page</h3>
            </div>

        </div>
    );
};

export default Home;