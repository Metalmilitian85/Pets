import React from 'react'
import slides from './slides.json'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function Mission() {

    const slideLeft = () => {
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div>
            <h2 className="text-center font-bold text-3xl mt-8 mb-3 text-purple-700">Our Mission</h2>
                <img src="./catdogsilhouette.jpg" className="flex m-auto rounded-lg max-w-[50%] mb-7 shadow-lg"/>
                <p className="mx-7 mb-7 text-center">We believe our mission is a simple one. To try and give every heart that enters our facility a loving
                    home. Helping with finding that special connection with a new animal companion is a special feeling, 
                    and one of the best parts of our jobs.
                </p>
            <div className="relative flex items-center">
              <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={40} />
              <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                {slides.map((item) => (
                    <img className="w-[240px] h-[170px] inline-block p-2 cursor-pointer hover:scale-110 ease-in-out duration-300" src={item.img} alt="/" />
                ))}
              </div>
              <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40} />
            </div>
        </div>
    )
}