import React, { useState } from 'react'
import Info from './Info'
import List from './list.json'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'

export default function Pets(props) {

    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
    <div>
        <h1 className="text-3xl font-bold mb-3 mt-3 text-center">Adoptions Page</h1>   
            <h3 className="m-4 text-center">We would love for you for find your furever buddy! Please reach out to us, or swing by, with any and all interest that you may have!</h3> 
        <div className="mx-auto relative flex flex-col items-center w-[340px] h-[200px] rounded-lg">
            <button onClick={handleOpen} className="bg-purple-400 p-2 w-[80%] flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            >
                Filter Pets
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />
                ): (
                    <AiOutlineCaretUp className="h-8" />
                )
            }
            </button>
            {isOpen && (
                <div className="bg-purple-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-[80%]">
                    {List.map((item) => (
                        <div className="flex w-full justify-between p-2 hover:bg-purple-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                            <h3 className="font-bold">{item.type}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
      <div className="flex flex-wrap justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-8">
            <Info img="/Skarin.jpg" />
            <Info name="Skarin" />
            <Info type="Cat" />
            <Info age="12" />
            <Info bio="'Tubby kitty at heart'" />
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-8">
            <Info img="/Tiger.jpg" />
            <Info name="Tiger" />
            <Info type="Cat" />
            <Info age="12" />
            <Info bio="'Killer kittay'" />
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-8">
            <Info img="/Tripp.jpg" />
            <Info name="Tripp" />
            <Info type="Dog" />
            <Info age="8" />
            <Info bio="'Pee attack'" />
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-8">
            <Info img="/Harley.jpg" />
            <Info name="Harley" />
            <Info type="Dog" />
            <Info age="7" />
            <Info bio="'What a bitch'" />
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-8 flex relative justify-center opacity-60">
            <Info img="/dog.jpg" />
            <p className="text-red-500 absolute mt-32 text-2xl">COMING SOON!</p>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-8 flex relative justify-center opacity-60">
            <Info img="/cat.jpg" />
            <p className="text-red-500 absolute mt-40 text-2xl">COMING SOON!</p>
        </div>
      </div>
    </div>
    )
}