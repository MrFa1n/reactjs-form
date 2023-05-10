import React from 'react'
import { StepperContext } from '../contexts/StepperContext'
import { useContext, useState } from 'react'

function DateAndTimeInterval() {
    const { userData, setUserData } = useContext(StepperContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    return (
        <div className="flex flex-col">
            <label class="block mb-2 text-sm font-medium text-gray-900 uppercase">Date and time of booking room</label>
            <div className="flex flex-row w-full">
                <div className="bg-white w-full p-1 flex border border-gray-200 rounded-lg">
                    <input
                        type='date'
                        onChange={handleChange}
                        value={userData["date"] || ""}
                        name='date'
                        className="w-full m-auto"
                    ></input>
                </div>
                <div className="bg-white w-full p-1 flex border border-gray-200 rounded-lg">
                    <input
                        type='time'
                        onChange={handleChange}
                        value={userData["time"] || ""}
                        name='time'
                        className='p-1 px-2 w-full text-gray-800 border-0'
                    ></input>
                </div>
            </div>
        </div>
    )
}

export default DateAndTimeInterval