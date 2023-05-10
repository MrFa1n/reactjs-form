import React from 'react'
import { StepperContext } from '../contexts/StepperContext'
import { useContext } from 'react'

function Final() {
    const { userData, setUserData } = useContext(StepperContext);
    const objectData = [];
    for (let prop in userData) {
        objectData.push(
            <div key={prop} className="grid grid-cols-2 gap-4">
                <span>{prop}: </span>
                <span className="font-medium">{userData[prop]}</span>
            </div>
        );
    }

    return (
        <div>
            {objectData}
        </div>
    );
}

export default Final