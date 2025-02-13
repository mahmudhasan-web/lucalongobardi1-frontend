'use client'
import React, { useState, useRef, useEffect, JSX } from "react"
// import OutputLine from "./OutputLine"
// import Input from "./Input"
// import ClickableCommand from "./ClickableCommand"
import About from "./About/About"
import { TypeAnimation } from "react-type-animation"
import { IoChatbubblesOutline } from "react-icons/io5"
// import logo from '@/assists/Vector 2.png'
// import Image from "next/image"
import Problem from "./Problem/Problem"
import Data from "./Data/Data"
import Food from "./Food/Food"
import Token from "./Token/Token"
import ClickableCommand from "./ClickableCommand"
import OutputLine from "./OutputLine"
import Input from "./Input"

const availableCommands = {
    about: "List available commands",
    problem: "Show help information",
    data: "Display information about this terminal",
    food: "Clear the terminal screen",
    token: "Clear the terminal screen",
}

export default function Terminal() {
    const [output, setOutput] = useState<(string | JSX.Element)[]>([])
    const [inputValue, setInputValue] = useState("")
    const [inputWidth, setInputWidth] = useState(30);
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [ bottomRef])

    const handleMouseEnter = (command: string) => {
        for (let index = 0; index < command.length; index++) {
            const element = command[index];
            setInputValue((e) => e + element);
            setInputWidth((pre) => pre + 15)
        }

    }

    const handleMouseLeave = () => {
        setInputValue("")
        setInputWidth(30)
    }



    const handleCommand = (command: string) => {
        setOutput((prev) => [...prev, `/Nutrigenix/agents > ${command}`])

        switch (command.toLowerCase()) {
            case "ls":
                setOutput((prev) => [
                    ...prev,
                    ...Object.keys(availableCommands).map((cmd, index) => (
                        <ClickableCommand bottomRef={bottomRef} index={index} onMouseEnter={() => handleMouseEnter(cmd)} onMouseLeave={handleMouseLeave} key={cmd} command={cmd} onClick={() => handleCommand(cmd)} />
                    )),
                ])
                break
            case "about":
                setOutput((prev) => [...prev, <About key={command}></About>])
                break
            case "problem":
                setOutput((prev) => [...prev, <Problem key={command}></Problem>])
                break
            case "data":
                setOutput((prev) => [...prev, <Data key={command}></Data>])
                break
            case "food":
                setOutput((prev) => [...prev, <Food key={command}></Food>])
                break
            case "token":
                setOutput((prev) => [...prev, <Token key={command}></Token>])
                break

            default:
                if (command in availableCommands) {
                    setOutput((prev) => [...prev, availableCommands[command as keyof typeof availableCommands]])
                } else {
                    setOutput((prev) => [...prev, ` sdsh: command not found: ${command}. Type 'ls' for available commands.`])
                }
        }

        setInputValue("")
        setInputWidth(30)
    }


    const handleIcon = (e: string) => {
        for (let index = 0; index < e.length; index++) {
            const element = e[index];
            setInputValue((pre) => pre + element);
            setInputWidth((pre) => pre + 15)
            window.scrollTo(0, document.body.scrollHeight);
        }
        // window.scrollTo(0, document.body.scrollHeight);
        handleCommand(e)
    }


    return (
        <section className="p-4 flex flex-col h-screen lg:gap-4 md:gap-3 gap-2">
            <div className="flex-grow">

            </div>
            <div className=" lg:w-[55%] md:[85%]  lg:text-3xl md:text-2xl text-xl lg:px-0 ">

                <img src={`/Vector 2.png`} className="w-72 mt-10" alt="logo"></img>

                <TypeAnimation

                    sequence={[
                        ``,
                        900, // delay
                        `We are creating a next-generation platform where AI agents can deliver a science-backed healthy diet in just one click.`,
                    ]}
                    speed={90}
                    wrapper="p"
                    cursor={false}

                    // repeat={Infinity}
                    className="mt-10"
                >

                </TypeAnimation>

            </div>
            <div className="lg:text-3xl md:text-2xl text-xl space-y-3">
                <TypeAnimation
                    sequence={[
                        "",
                        2000,
                        `/Nutrigenix/agents > ls`, // delay

                    ]}
                    speed={70}
                    wrapper="p"
                    cursor={false}

                    // repeat={Infinity}
                    className="text-gray-500"
                />
                <ul>
                    {
                        Object.keys(availableCommands).map((cmd, index) => (
                            <li key={cmd} className="text-[#ff735a] cursor-pointer w-fit" onClick={() => handleCommand(cmd)} onMouseEnter={() => handleMouseEnter(cmd)} onMouseLeave={handleMouseLeave}>
                                <TypeAnimation
                                    sequence={[
                                        "",
                                        2500 + (index * 300), // delay
                                        cmd,
                                        1000, // delay

                                    ]}
                                    speed={70}
                                    wrapper="p"
                                    cursor={false}
                                    // repeat={Infinity}
                                    className=""
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="">
                {output.map((line, index) => (
                    <OutputLine key={index} className={`space-y-2 ${index % 2 == 0 ? "text-gray-500" : ""}`} content={line} />
                ))}
            </div>
            <div className="flex gap-2 lg:text-3xl md:text-2xl text-xl">
                <TypeAnimation

                    sequence={[
                        '/Nutrigenix/agents >',

                    ]}
                    speed={70}
                    wrapper="p"
                    cursor={false}
                    // repeat={Infinity}
                    className=""
                />
                <Input value={inputValue} onChange={setInputValue} onSubmit={handleCommand} setInputWidth={setInputWidth} inputWidth={inputWidth} />
                <IoChatbubblesOutline onClick={() => handleIcon("ls")} id="chatIcon" className="my-auto font-extrabold lg:text-4xl text-3xl  cursor-pointer" />
            </div>
            <div ref={bottomRef} className="py-2" />
        </section>
    )
}

