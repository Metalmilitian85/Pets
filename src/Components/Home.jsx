import React from 'react'
import Dropdown from './Dropdown'

export default function Home() {
    return (
        <div>
            <h1 className="text-center font-extrabold text-5xl text-purple-700 mt-8 mb-8">Welcome to Pet Adoptions!</h1>
                <p className="mx-8">Looking for the "purrrfect" companion?! Perhaps one that will cheer you up after a "ruff" day?! 
                    All of our adoption animals get 1 on 1 or group time together with staff and each other every day to support a loving environment! 
                    Anything is "paw-sible" when your heart melts after allowing a new member into your family!
                </p>
                <img src="./catdog.jpg" className="flex m-auto w-[450px]" />
        </div>
    )
}