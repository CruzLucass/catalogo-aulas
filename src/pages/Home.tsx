import React, { useState } from 'react'
import { Header } from '../components/Header'

export function Home() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Header />
    )
}