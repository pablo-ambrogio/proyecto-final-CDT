import React from 'react';

const RenderCar = ({ base64Image }) => {
    return (
        <div>
            <img src={base64Image} alt='Vehiculo' />
        </div>
    );
};

export default RenderCar;
