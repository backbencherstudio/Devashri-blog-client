import React from 'react';

const ProjectGoal = () => {
    return (
        <div>
            <p className='active font-extrabold text-5xl'>PROJECT GOALS</p>

            <div className='mt-12'>
                <div className='flex gap-1 font-bold'>
                    <h1 className='bg-white py-3 px-32 border-l-4 border-black'>Goal</h1>
                    <h1 className='bg-white py-3 px-32'>Desired Outcome</h1>
                    <h1 className='bg-white py-3 px-32'>Anticipated Outcome</h1>
                </div>
                
                <div className='flex mt-1 gap-1 font-bold h-[296px]'>
                    <h1 className='bg-white py-3 px-32 border-l-4 border-red-600'>Goal</h1>
                    <h1 className='bg-white py-3 px-32'>Desired Outcome</h1>
                    <h1 className='bg-white py-3 px-32'>Anticipated Outcome</h1>
                </div>

                <div className='flex mt-1 gap-1 font-bold h-[296px]'>
                    <h1 className='bg-white py-3 px-32 border-l-4 border-yellow-600'>Goal</h1>
                    <h1 className='bg-white py-3 px-32'>Desired Outcome</h1>
                    <h1 className='bg-white py-3 px-32'>Anticipated Outcome</h1>
                </div>
                <div className='flex mt-1 gap-1 font-bold h-[296px]'>
                    <h1 className='bg-white py-3 px-32 border-l-4 border-blue-600'>Goal</h1>
                    <h1 className='bg-white py-3 px-32'>Desired Outcome</h1>
                    <h1 className='bg-white py-3 px-32'>Anticipated Outcome</h1>
                </div>
            </div>
        </div>
    );
};

export default ProjectGoal;