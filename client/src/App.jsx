import React from 'react'
import Navbar from './components/Navbar'
import CreateSnipts from './components/CreateSnipts'


const App = () => {
  return (
   <main className='container max-w-4xl mx-auto p-4'>
    <Navbar/>
    <CreateSnipts/>
   </main>
  )
}

export default App