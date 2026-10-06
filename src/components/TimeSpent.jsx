import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const TimeSpent = () => {
    const [timeSpent, setTimeSpent] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setTimeSpent(prev => prev + 1), 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [timeSpent])

    return (
        <div className='text-amber-400 absolute right-4 top-4 border rounded-full p-2 border-amber-400'>
            {timeSpent}s
        </div>
    )
}