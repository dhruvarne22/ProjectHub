import React from 'react'

const Ping = () => {
  return (
    <div className='releative'>
        <div className='absolute -left4 top-3'>
            <span className='flex size-[11px]'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75'></span>
                <span className='relative inline-flex size-[11px] rounded-full bg-primary'></span>
            </span>
        </div>
    </div>
  )
}

export default Ping