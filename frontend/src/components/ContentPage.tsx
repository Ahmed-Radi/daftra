import React from 'react'

type Props = {
  children: React.ReactNode;
}

const ContentPage = ({ children }: Props) => {
  return (
    <div className='h-[calc(100vh-72px)] w-full flex flex-col items-center justify-center'>
      <p className='text-3xl'>{children}</p>
    </div>
  )
}

export default ContentPage