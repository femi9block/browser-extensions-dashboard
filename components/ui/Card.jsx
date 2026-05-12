import React from 'react'

export default function Card({children, className=''}){
  return (
    <div className={`bg-[#1F2535] text-amber-50 rounded-2xl shadow p-4  border-2 ${className}`}>
      {children}
    </div>
  )
}