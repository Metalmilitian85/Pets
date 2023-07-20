import React from 'react'
import List from './list.json'
import Info from './Info'

export default function Dogs() {

    const pets = [
        {
            "type": "All"
        },
        {
            "type": "Dogs"
        },
        {
            "type": "Cats"
        }
    ]

    const dogs = pets.filter(dog => dog.type === "Dog")

    return (
        <div>
            <h1>{dogs}</h1>
        </div>
    )
}




<div className="flex flex-wrap justify-center">
<div class="max-w-sm rounded overflow-hidden shadow-lg m-8">
    <h3>{ list.name }</h3>
    <p>{ list.bio }</p>
    <img src={ list.pic } className="" />
</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg m-8 flex relative justify-center opacity-60">
    <img src='/dog.png' />
    <p className="text-red-500 absolute mt-32 text-2xl">COMING SOON!</p>
</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg m-8 flex relative justify-center opacity-60">
    <p className="text-red-500 absolute mt-40 text-2xl">COMING SOON!</p>
</div>
</div>