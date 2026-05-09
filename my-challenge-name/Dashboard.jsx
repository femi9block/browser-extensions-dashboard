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
        <Card className={`flex flex-col justify-between min-h-[220px] p-5 ${mode === "light" ? "bg-amber-50" : "bg-[#1F2535]"}`}>
            <div className='flex gap-5 pt-6 px-3'>
                <div className='shrink-0'>
                    <Image src={icon}
                    alt={name}
                    width={40}
                    height={40}
                    className='object-contain'
                     />
                </div> 

                <div className="space-y-2">
                    <h2 className={`font-bold ${mode === "light" ? "text-black": "text-white"}`}>
                        {title}
                    </h2>
                    <p className='text-gray-500 text-sm'>
                        {text}
                    </p>                  

                </div>
        
                
            </div>
            {/* Bottom */}
            <div className='flex items-center justify-between mt-6'>
                <Button 
                variant='danger'
                onClick={onRemove}
                >
                    Remove
                </Button>

            
            
            <button 
            onClick={onToggle}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300
            ${isActive ? 'bg-orange-500 justify-end' : ' text-white justify-start'}`}>
            
    
               <div className='w-4 h-4 bg-white rounded-full border-amber-200' />
             
            </button>
            
            
        
        
            </div>    


                
        </Card>
    )
}