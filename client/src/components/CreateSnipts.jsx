import React from 'react'

const CreateSnipts = () => {
  return (
    <div className='mt-10'>
        <form action="" className='flex flex-col space-y-4'>
            <input  type="text" placeholder='Title' className='border rounded px-2 py-1 w-fit' />
            <textarea  className='border rounded px-6 py-1' placeholder='write a code snippets...'/>
            <button className='bg-blue-500 text-white px-4 py-2 rounded w-fit cursor-pointer'>Create Snippet</button>
        </form>
    </div>
  )
}

export default CreateSnipts