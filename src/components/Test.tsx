"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TypingText({ text, speed, token }: { text: string, speed: number, token?: boolean }) {
    // Typing speed in milliseconds

    const [displayedText, setDisplayedText] = useState("");
    const [showText, setShowText] = useState<boolean>(false);
    const handleAnimation = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    useEffect(() => {
        if (!text) return; // Ensure text is not undefined

        let i = 0;
        setDisplayedText(""); // Reset text when component mounts

        const interval = setInterval(() => {
            if (i < text.length - 1) {  // ✅ Prevent accessing out of bounds
                setDisplayedText((prev) => prev + text[i]);
                i++;
                handleAnimation()
            } else {
                if (token) {
                    setShowText(true);
                }
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, token]); // ✅ Add dependencies

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=""
        >
            {displayedText}
            {
                token && showText ?
                    <p className="">
                        Request our White Paper at: <Link className='text-blue-600' href={`mailto:info@nutrigenix.com`}>info@nutrigenix.com</Link>
                    </p>
                    :
                    null
            }
        </motion.span>
    );
}
