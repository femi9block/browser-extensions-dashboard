import React from 'react';
import Card from '@/components/ui/Card';
import Image from 'next/image';
import Button from './components/ui/Button';
export default function Dashboard({
    title, 
    icon, 
    text, 
    name, 
    onClick,
    onToggle, 
    isActive,  
    onRemove,
    mode,
  }) {
    return(
        <Card className={`flex flex-col justify-between p-4 rounded-2xl transition-color 
            duration-300 md:p-5 ${mode === "light" ? "bg-amber-50" : "bg-[#1F2535]"}`}>
            <div className='flex gap-3 md:gap-3 pt-4 md:pt-6 md:px-3'>
                <div className='shrink-0'>
                    <Image src={icon}
                    alt={name}
                    width={40}
                    height={40}
                    className='object-contain w-9 h-9 md:w-10 md:h-10'
                     />
                </div> 

                <div className="space-y-2">
                    <h2 className={`font-bold text-sm md:text-base leading-tight 
                        ${mode === "light" ? "text-black": "text-white"}`}>
                        {title}
                    </h2>
                    <p className='text-gray-500 text-sm'>
                        {text}
                    </p>                  

                </div>
        
                
            </div>
            {/* Bottom */}
            <div className='flex items-center justify-between mt-5 md:mt-6 gap-3'>
                <Button 
                variant='outline'
                onClick={onRemove}
                className={`text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 ${mode === "light" ? "text-black" : "text-white"} ${mode === "light" ? "bg-white" : "bg-black"}`}>
                    Remove
                </Button>

            
            
            <button 
            onClick={onToggle}
            className={`w-10 md:w-12 h-5 md:h-6 flex items-center rounded-full p-1 transition-all duration-300
            ${isActive ? 'bg-orange-500 justify-end' : ' text-white bg-gray-500 justify-start'}`}>
            
    
               <div className='w-3 md:w-4 h-3 md:h-4 bg-white rounded-full border-amber-200' />
             
            </button>
            
            
        
        
            </div>    


                
        </Card>
    )
}