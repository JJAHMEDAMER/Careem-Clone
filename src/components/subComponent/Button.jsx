import React from 'react'

export const Button = ({ text = 'Read More', buttonColor = 'bg-limeGreen' }) => {
    return (
        <button
            className={`${buttonColor} self-start px-4 py-2 font-semibold rounded-md text-sm flex-grow-0
            hover:-translate-y-1 transition-all`}>
            {text}
        </button>
    )
}
