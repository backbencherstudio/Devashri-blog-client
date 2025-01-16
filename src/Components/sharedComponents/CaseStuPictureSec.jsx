import React from 'react';

const CaseStuPictureSec = ({image}) => {
    console.log(image);
    return (
        <div className='mt-48'>
            <img src={image} alt="Case Studies Picture" />
        </div>
    );
};

export default CaseStuPictureSec;