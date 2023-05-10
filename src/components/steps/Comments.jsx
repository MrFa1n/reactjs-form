import React from 'react'
import { StepperContext } from '../contexts/StepperContext'
import { useContext } from 'react'

function Comments() {
    const { userData, setUserData } = useContext(StepperContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    return (
        <div className="flex flex-col">
            <label class="block mb-2 text-sm font-medium text-gray-900 uppercase">Comments <i className="normal-case font-light">(Optional)</i></label>
            <div className="bg-white p-1 flex border border-gray-200 rounded-lg">
                <textarea
                    onChange={handleChange}
                    value={userData["comments"] || ""}
                    name='comments'
                    placeholder='Comments'
                    rows="1 "
                    className='p-1 px-2 w-full text-gray-800 border-0'
                ></textarea>

            </div>
        </div>
    )
}

export default Comments