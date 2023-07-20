import React from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import list from './list.json'
import {useState} from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Dropdown() {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const typeFilter = searchParams.get("type");

    const petType = typeFilter ? list.filter(pet => pet.type === typeFilter) : list

    return (
        <div className="mx-auto relative flex flex-col items-center w-[340px] h-[200px] rounded-lg">
            <button onClick={handleOpen} className="bg-purple-400 p-2 w-[80%] flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            >
                Pet Filter
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />

                ): (
                    <AiOutlineCaretUp className="h-8" />
                )
            }
            </button>

            {isOpen && (
                <div className="bg-purple-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-[80%]">
                    {list.map((item) => (
                        <div className="flex w-full justify-between p-2 hover:bg-purple-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                            <button 
                                onClick={() => setSearchParams({type: "cat"})}
                                className={`filterbuttons hover:scale-[105%] ease-in-out duration-75 
                                    ${typeFilter === "cat" ? "selected" : ""}`}
                            >Cats</button>
                            <button 
                                onClick={() => setSearchParams({type: "dog"})}
                                className={`filterbuttons hover:scale-[105%] ease-in-out duration-75 
                                    ${typeFilter === "dog" ? "selected" : ""}`}
                            >Dogs</button>
                            <button 
                                onClick={() => setSearchParams({type: "soon"})}
                                className={`filterbuttons hover:scale-[105%] ease-in-out duration-75 
                                    ${typeFilter === "soon" ? "selected" : ""}`}
                            >Coming Soon</button>
                            <button 
                                onClick={() => setSearchParams({})}
                                className={`filterbuttons hover:scale-[105%] ease-in-out duration-75 
                                    ${typeFilter === null ? "selected" : ""}`}
                            >All</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}