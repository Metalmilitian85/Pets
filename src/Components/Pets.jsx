import React, { useState } from 'react'
import list from './list.json'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import { useSearchParams } from 'react-router-dom'

export default function Pets() {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const typeFilter = searchParams.get("type");

    const petType = typeFilter ? list.filter(pet => pet.type === typeFilter) : list


    return (
    <div>
        <h1 className="text-3xl font-bold mb-3 mt-8 text-center">Adoptions Page</h1>   
            <h3 className="m-4 text-center">We would love for you for find your furever buddy! Please reach out to us, or swing by, with any and all interest that you may have!</h3>
                <div className="ml-10 p-2">
                    <button 
                        onClick={() => setSearchParams({type: "cat"})}
                        className={`filterbuttons mr-5 hover:scale-[105%] ease-in-out duration-75 hover:bg-purple-500 cursor-pointer rounded-lg border-purple-700 border-solid border-2
                            ${typeFilter === "cat" ? "selected" : ""}`}
                    >Cats</button>
                    <button 
                        onClick={() => setSearchParams({type: "dog"})}
                        className={`filterbuttons mr-5 hover:scale-[105%] ease-in-out duration-75 hover:bg-purple-300 cursor-pointer rounded-lg border-purple-700 border-solid border-2
                            ${typeFilter === "dog" ? "selected" : ""}`}
                    >Dogs</button>
                    <button 
                        onClick={() => setSearchParams({type: "soon"})}
                        className={`filterbuttons mr-5 hover:scale-[105%] ease-in-out duration-75 hover:bg-purple-300 cursor-pointer rounded-lg border-purple-700 border-solid border-2
                            ${typeFilter === "soon" ? "selected" : ""}`}
                    >Coming!</button>
                    <button 
                        onClick={() => setSearchParams({})}
                        className={`filterbuttons hover:scale-[105%] ease-in-out duration-75 hover:bg-purple-300 cursor-pointer rounded-lg border-purple-700 border-solid border-2
                            ${typeFilter === null ? "selected" : ""}`}
                    >All</button>
                </div>
                <div className="flex flex-wrap">
                {petType.map(pet => {
                    return (
                      <div className="flex flex-wrap m-auto">  
                        <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
                            <img src={ pet.pic } className="" />
                            <h3>{ pet.name }</h3>
                            <p>{ pet.bio }</p>
                        </div>
                      </div>
                    )
                })}
            </div>
    </div>
  )
}