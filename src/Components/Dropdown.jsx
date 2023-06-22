import React from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import list from './list.json'
import {useState} from 'react'

export default function Dropdown() {

    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
            <button onClick={handleOpen} className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            >
                Dropdown
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />

                ): (
                    <AiOutlineCaretUp className="h-8" />
                )
            }
            </button>

            {isOpen && (
                <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                    {list.map((item) => (
                        <div className="flex w-full justify-between p-4 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                            <h3 className="font-bold">{item.type}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}