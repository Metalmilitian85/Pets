import React from 'react'

export default function Info(props) {
    return (
        <div className="flex-1 font-semibold text-center">
            <img src={props.img} className="max-h-96" />
            <p className="font-bold">{props.name}</p>
            <p>{props.type}</p>
            <p>{props.age}</p>
            <p className="italic">{props.bio}</p>
        </div>
    )
}