import React from 'react'

// components
import Navbar from '../components/Navbar';

const HomeLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                {props.children}
            </div>

        </>
    );
};

export default HomeLayout;