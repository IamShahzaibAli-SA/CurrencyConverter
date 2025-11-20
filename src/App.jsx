import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[700px] p-5 bg-gray-500'>
          <div className=''>
            <p className='text-white text-[30px]'>Currency Converter</p>
          </div>
          <div className=''>
            <p className='text-white text-[20px]'>Enter Amount</p>
            <input 
            className='bg-white text-black'
            type="number" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
