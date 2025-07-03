'use client' 
import React from 'react'
import ExampleServer from './ExampleServer';

export const ExampleClient = () => {
    console.log("I am a client component");
  return (
    <div>
        <h1 className='text-3xl font-bold underline'>
            this is a client component
        </h1>
        <ExampleServer />
    </div>
  )
}
export default ExampleClient;