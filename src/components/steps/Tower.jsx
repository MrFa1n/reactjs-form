import React from 'react'
import { StepperContext } from '../contexts/StepperContext'
import { useContext } from 'react'

function Tower() {
    const { userData, setUserData } = useContext(StepperContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    return (
        <div className="flex flex-col">
            <label for="tower" class="block mb-2 text-sm font-medium text-gray-900 uppercase">Select a tower</label>
            <select onChange={handleChange}
                value={userData["tower"] || ""}
                name='tower'
                id="tower"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="" selected>Tower</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
        </div>
    )
}

export default Tower