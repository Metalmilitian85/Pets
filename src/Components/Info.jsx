import React from 'react'

export default function Info(props) {
    return (
        <div className="flex-1">
            <img src={props.img} alt="" />
            <p>{props.name}</p>
            <p>{props.type}</p>
            <p>{props.age}</p>
            <p>{props.bio}</p>
        </div>
    )
}