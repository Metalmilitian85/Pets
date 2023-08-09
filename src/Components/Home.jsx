import React from 'react'
import Dropdown from './Dropdown'

export default function Home() {
    return (
        <div>
            <h2 className="text-center font-extrabold text-5xl text-purple-700 mt-8 mb-8 mx-8">Welcome to Pet Adoptions!</h2>
            <img src="./adopt2.webp" className="flex m-auto mb-7 w-[450px] rounded-lg max-w-[80%] shadow-lg" />
                <p className="mx-8 text-center mb-7 lg:text-xl">Looking for the "purrrfect" companion?! Perhaps one that will cheer you up after a "ruff" day?! 
                    All of our adoption animals get 1 on 1 or group time together with staff and each other every day to support a loving environment! 
                    Anything is "paw-sible" when your heart melts after allowing a new member into your family!
                </p>
                <img src="./adopt.jpg" className="flex m-auto w-[450px] rounded-lg max-w-[80%] shadow-lg mb-7" />
                <p className="mx-8 text-center mb-7 lg:text-xl">Adopting a pet is giving them a much needed second chance to be happy. Whether it's your first pet, a companion for your child, 
                    or even just looking to expand the family there will always be a return of unwavering love from the heart and eyes of the pet 
                    that you decided to bring into your home and hearts!
                </p>
                <img src="./adopt3.jpg" className="flex m-auto w-[450px] rounded-lg max-w-[80%] shadow-lg mb-7 lg:text-xl" />
        </div>
    )
}