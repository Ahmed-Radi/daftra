import React from 'react'

type JobLocationProps = {
  icon: React.ReactNode,
  text: string
}

const JobLocation = ({ icon, text }: JobLocationProps) => {
  return (
    <span className='text-sm flex items-center gap-1 text-gray-400'>{icon} <span>{text}</span></span>
  )
}

export default JobLocation