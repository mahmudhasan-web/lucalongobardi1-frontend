import React, { useEffect } from "react"
import { TypeAnimation } from "react-type-animation"

interface ClickableCommandProps {
  command: string
  onClick: () => void
  index: number
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  bottomRef: React.RefObject<HTMLDivElement | null>;
}

export default function ClickableCommand({ command, onClick, onMouseEnter, onMouseLeave, index, bottomRef }: ClickableCommandProps) {
  const handleAnimation = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [bottomRef]);
  return (
    <ul className="space-y-0">
      <li key={command} className="text-[#ff735a] cursor-pointer w-fit" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <TypeAnimation
          sequence={[
            // delay
            command,
            500 + (index * 300), // delay
            handleAnimation
          ]}
          speed={90}
          wrapper="p"
          cursor={false}
          // repeat={Infinity}
          className=""
        />
      </li>
    </ul>
  )
}

