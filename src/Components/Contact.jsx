import React from 'react'

export default function Contact() {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-3 mt-8 text-purple-700">Contact Us</h2>
            <h3 className="text-xl font-semibold">Office Hours</h3>
                <p>Monday - Friday 8am - 5:30pm</p>
                <p>Saturday 8am - 12:30pm</p>
                <p>Sunday <b className="text-red-500">CLOSED</b></p>
            <h3 className="text-xl font-semibold mt-3">Address</h3>
                <p>123 Pet Lane</p>
                <p>Petville, KS 12345</p>
            <h3 className="text-xl font-semibold mt-3">Phone</h3>
                <p>555-123-4567</p>
            <h3 className="text-xl font-semibold mt-3">E-mail</h3>
                <button 
                  className="hover:underline"
                  onClick={() => window.location = 'mailto:petadoptions@tailwags.com'}>petadoptions@tailwags.com
                </button>
        </div>
    )
}