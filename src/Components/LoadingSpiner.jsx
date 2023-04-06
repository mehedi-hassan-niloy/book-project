import React from 'react';

const LoadingSpiner = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
                <p className='font-thin text-7xl'>L</p>
                <div className='w-10 h-10 mt-5 border-8 border-blue-400 border-dashed rounded-full animate-spin'></div>
                <p className='font-thin text-7xl'>ading....</p>
            </div>
        </div>
    );
};

export default LoadingSpiner;