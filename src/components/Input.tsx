'use client'
import React, { type KeyboardEvent } from "react"

interface InputProps {
    value: string
    onChange: (value: string) => void
    onSubmit: (command: string) => void
    inputWidth: number
    setInputWidth: (callback: (pre: number) => number) => void
}

export default function Input({ value, onChange, onSubmit,inputWidth, setInputWidth }: InputProps) {
    //  const [inputWidth, setInputWidth] = useState(30);
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit(value)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
        setInputWidth((pre: number) => pre + 10)
    }

    return (
        <div className="">
            <input
                type="text"
                value={value}
                onChange={(e) => handleInputChange(e)}
                onKeyDown={handleKeyDown}
                style={{ width: `${inputWidth}px` }}
                className="bg-transparent outline-none transition-all duration-300 focus:text-black text-gray-500"
            />
        </div>
    )
}

