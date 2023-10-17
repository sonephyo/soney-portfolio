import React from 'react'

export default function Button({text}) {
  return (
    <button className='bg-gradient-to-r from-btn-light-blue to-btn-strong-blue text-white font-bold py-2 px-4 rounded-full m-2'>{text}</button>
  )
}
