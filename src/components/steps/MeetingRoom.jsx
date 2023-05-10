import React from 'react'
import { StepperContext } from '../contexts/StepperContext'
import { useContext } from 'react'

function MeetingRoom() {
    const { userData, setUserData } = useContext(StepperContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    return (
        <div className="flex flex-col">
            <label for="meetingRoom" class="block mb-2 text-sm font-medium text-gray-900 uppercase">Select a Meeting Room</label>
            <select onChange={handleChange}
                value={userData["meetingRoom"] || ""}
                name='meetingRoom'
                id="meetingRoom"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected>Meeting Room</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
    )
}

export default MeetingRoom