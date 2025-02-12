import React, { type ReactNode } from "react"

interface OutputLineProps {
  content: ReactNode,
  className?: string
}

export default function OutputLine({ content, className }: OutputLineProps) {
  return <div className={`mb-2 lg:text-3xl md:text-2xl text-xl ${className}`}>{content}</div>
}

