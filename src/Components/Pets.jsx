import React from 'react'
import Info from './Info'

export default function Pets(props) {
    return (
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
      </div>
    )
}