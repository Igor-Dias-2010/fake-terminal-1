'use client'

import { useState } from "react"


export default function Terminal() {
    const [defaultPrompt] = useState('|home/user/browser/>_')
    const [history, setHistory] = useState([])
    const [input, setInput] = useState(defaultPrompt)

    const handleInputChange = e => setInput(e.target.value)

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.preventDefault()

            const command = input.replace(defaultPrompt, '').trim()

            if (command === 'clear') {
                setHistory([])
            } else {
                setHistory(prev => [...prev, `${defaultPrompt} ${input}`])
            }
            setInput('')
        }
    }


    return (
        <div className="terminal-wrapper">
            <div className="terminal-history">
                {history.map((line, i) => (<div key={i}>{line}</div>))}
            </div>

            <div className="terminal-input">
                <span>{defaultPrompt}</span>
                <textarea spellCheck='false' value={input} onChange={handleInputChange} onKeyDown={handleKeyDown}></textarea>
            </div>
        </div>
    )
}