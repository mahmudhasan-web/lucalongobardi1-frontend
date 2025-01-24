import type React from "react"
import About from "./About/About"
import Problem from "./Problem/Problem"
import Data from "./Data/Data"
import Food from "./Food/Food"
import Token from "./Token/Token"

const availableCommands = [ "about", "problem", "data", "food" , "token"]

const components = {
  about: <About></About>,
  problem: <Problem></Problem>,
  data: <Data></Data>,
  food : <Food></Food>,
  token : <Token></Token>
}

export function processCommand(command: string): React.ReactNode {
  const cleanCommand = command.trim().toLowerCase()

  if (cleanCommand === "ls") {
    return (
      <div className="lg:text-2xl md:text-xl text-lg py-5 text-[#ff735a]">
        {/* Available commands: */}
        <ul>
          {availableCommands.map((cmd) => (
            <li key={cmd}> {cmd}</li>
          ))}
        </ul>
      </div>
    )
  }

  if (cleanCommand in components) {
    return <div className="w-fit transition-all duration-200 lg:text-2xl md:text-xl text-lg">{components[cleanCommand as keyof typeof components]}</div>
  }

  return ` sdsh: command not found: ${command}. Type 'ls' for available commands.`
}

