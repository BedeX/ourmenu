import React from 'react'
import { foods } from '../data'
import { useState } from 'react'
import { useEffect } from 'react'

export const MenuList = ({selectedCateg}) => {
    const [menu, setMenu] = useState(foods)
/*     console.log(selectedCateg);
 */
    useEffect(() => {
        setMenu(() => selectedCateg == 'all' ? foods : foods.filter(obj => obj.category == selectedCateg))
/*         setMenu(() => selectedCateg == 'all' ? foods : foods.filter(({ category }) => category == selectedCateg)) */

    }, [selectedCateg])

    return (
        <div className='flex flex-wrap gap-4'>
            {menu.map(({ id, title, price, img, desc }) =>
                <div key={id} className="flex flex-col brp500:flex-row gap-4 basis-full brp900:basis-[calc(50%-20px)] border border-blue-800 p-3 rounded-2xl">
                    <div className='flex-1'>
                        <img className='w-full h-48 object-cover rounded-2xl' src={'images/' + img} alt={title} />
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-between text-amber-400 border-b border-b-amber-500 font-bold font'>
                            <span className='capitalize'>{title}</span>
                            <span className=''>€{price}</span>
                        </div>
                        <div>
                            {desc}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
