import React from 'react';
import photo from '../../assets/image/section.jpg';
import { Link } from 'react-router-dom';

const OnlineService = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                <img src={photo} alt="" />
                <div className='p-12'>
                    <h2 className='text-4xl font-bold'>Our Special Service</h2>
                    <p className='text-lg font-semibold my-4'>Wedding Bliss Bangladesh is a leading event management company.Our special service.
                        Our special service. Marriage in Bangladesh is one of the best marriage management.
                        We can provide a better service to our customers.
                        If you arrange a wedding. You go to our website and register your event. Thank you.</p>
                    <div className="card-actions justify-start">
                        <button className="btn text-red-600 bg-gray-300"><Link to="/about">About Us</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineService;