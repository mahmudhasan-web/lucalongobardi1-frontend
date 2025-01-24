"use client"

import React, { useState, useRef, useEffect } from "react"
import { processCommand } from "./CommandProcessor"
import { FaChevronRight } from "react-icons/fa"
import { IoChatbubblesOutline } from "react-icons/io5"
import logo from '@/assists/Vector 2.png'
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function Terminal() {
    const [history, setHistory] = useState<(string | React.ReactNode)[]>([])
    const [inputWidth, setInputWidth] = useState(30);
    const [currentInput, setCurrentInput] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const historyRef = useRef<HTMLFormElement>(null)
    const availableCommands = ["about", "problem", "data", "food", "token"]
    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTo({
                top: historyRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, [history])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentInput(e.target.value)
        setInputWidth((pre) => pre + 10)
    }

    const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (currentInput.trim() === "") return

        const output = processCommand(currentInput)
        setHistory((prev) => [...prev, `Nutrigenix/agents > ${currentInput}`, output])
        setCurrentInput("")
        setInputWidth(30)

    }

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }


    const handleMouseEnter = (command: string) => {
        for (let index = 0; index < command.length; index++) {
            const element = command[index];
            setCurrentInput((e) => e + element);
            setInputWidth((pre) => pre + 10)
        }

    }

    const handleMouseLeave = () => {
        setCurrentInput("")
        setInputWidth(30)
    }

    const handleNavigation = () => {
        const fakeEvent = { preventDefault: () => { } } as React.FormEvent<HTMLFormElement>;
        handleInputSubmit(fakeEvent)
    }


    return (
        <div className=" p-4 h-screen font-mono flex flex-col gap-3" onClick={focusInput}>
            <div className="flex flex-grow"></div>
            <div className=" lg:w-[55%] md:[85%]  lg:text-2xl md:text-xl text-lg lg:px-0 px-2">

                <Image src={logo} className="w-72 mt-10" alt="logo"></Image>

                <TypeAnimation

                    sequence={[
                        `We are creating a next-generation platform where AI agents can deliver a science-backed healthy diet in just one click.`,
                        5000, // delay

                    ]}
                    speed={90}
                    wrapper="p"
                    cursor={false}

                    // repeat={Infinity}
                    className="mt-16"
                >

                </TypeAnimation>

            </div>
            <div className="lg:text-2xl md:text-xl text-lg">
                <h1 className="flex gap-3 text-gray-500">/Nutrigenix/agents <FaChevronRight className="my-auto text-lg"></FaChevronRight>ls</h1>
                <div className="lg:text-2xl md:text-xl text-lg py-5">
                    {/* Available commands: */}
                    <ul>
                        {availableCommands.map((cmd) => (
                            <li key={cmd} onClick={handleNavigation} onMouseEnter={() => handleMouseEnter(cmd)} onMouseLeave={handleMouseLeave} className="text-[#ff735a] cursor-pointer">
                                <TypeAnimation

                                    sequence={[
                                        cmd,
                                        1000, // delay

                                    ]}
                                    speed={10}
                                    wrapper="p"
                                    cursor={false}
                                    // repeat={Infinity}
                                    className=""
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="lg:text-2xl md:text-xl text-lg ">
                {history.map((line, index) => (
                    <div key={index} className={`${index % 2 == 0 ? "text-gray-500" : ""}`}>
                        {typeof line === "string" ? line : React.createElement(React.Fragment, { key: index }, line)}
                    </div>
                ))}
            </div>
            <form ref={historyRef} id="target-element" onSubmit={handleInputSubmit} className="flex mt-4 lg:text-2xl md:text-xl pb-5 text-xl">
                <h1 className='flex gap-3 '>

                    <TypeAnimation

                        sequence={[
                            `/Nutrigenix/agents`,
                            1000, // delay

                        ]}
                        speed={20}
                        wrapper="p"
                        cursor={false}
                        // repeat={Infinity}
                        className=""
                    >

                    </TypeAnimation>
                    <span className='text-lg my-auto'><FaChevronRight className='font-extrabold' /></span></h1>
                <input
                    type="text"
                    value={currentInput}
                    onChange={handleInputChange}
                    className="bg-transparent outline-none transition-all duration-300"
                    style={{ width: `${inputWidth}px` }}
                    ref={inputRef}

                />
                <IoChatbubblesOutline id="chatIcon" className="my-auto text-3xl" />
            </form>
        </div>
    )
}

