import React from 'react'
import { getAllCategories } from '../utils'
import { useState } from 'react'
import { Button, ButtonGroup, ButtonGroupSeparator } from "@heroui/react";
import { motion, spring } from "motion/react"
import { TimeSpent } from './TimeSpent';

export const MyHeader = ({ selectedCateg, setSelectedCateg }) => {
    const [categories, setCategories] = useState(getAllCategories)

    return (
        <div className='flex flex-col items-center gap-6 relative'>
                <motion.h1
                    initial={{ x: '100vw' }}
                    animate={{ x: 0, transition: { duration: 1, type: spring, stiffness: 20 } }}
                    className='text-center text-3xl font-bold text-amber-400'>
                    Our Menu
                </motion.h1>
                <TimeSpent/>
            <ButtonGroup size="lg" className="bg-amber-400 text-gray-900 rounded-3xl">
                {categories.map((item, index) =>
                    <Button key={index} onClick={() => setSelectedCateg(item)}
                        className={selectedCateg == item ? "bg-gray-900 text-amber-400 capitalize" : "bg-amber-400 text-gray-900 capitalize"}>
                        <ButtonGroup.Separator />
                        <motion.span
                            whileHover={{ scale: 1.1 }}>

                            {item}
                        </motion.span>
                    </Button>
                )}    </ButtonGroup>

        </div>
    )
}
