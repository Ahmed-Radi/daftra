import { ArrowDownToDot, Calendar, CircleCheck, Ellipsis, FileText, Heart, Redo } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import JobLocation from '../mainContent/JobLocation'
import JobData from '../mainContent/JobData'
import { Button } from '../../../components/ui/button'
import JobInfo from './JobInfo'

type JobSidebarProps = {}

const JobSidebar = ({ }: JobSidebarProps) => {
  return (
    <aside className='hidden sticky top-[var(--navbar-height)] bg-white h-[calc(100vh-var(--navbar-height))] lg:flex lg:flex-col'>
      <div className='flex flex-col gap-5 p-5 border-b border-zinc-200'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='relative w-8 h-8'>
                <Image src="/product-image-one.png" className='rounded-sm' width={1000} height={1000} alt="job-image" />
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-green-600 font-semibold text-xs'>Rockstar Games</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Ellipsis />
              <Redo />
            </div>
          </div>
          <div className='flex gap-1 lg:flex-wrap'>
            <JobLocation
              icon={<ArrowDownToDot size={14} />}
              text={"Elmansoura, Egypt"}
            />
            <JobLocation
              icon={<Calendar size={14} />}
              text={"10 days age"}
            />
            <JobLocation
              icon={<FileText size={14} />}
              text={"100 applications"}
            />
          </div>
          <div className='flex gap-2'>
            <JobData className='bg-gray-300 text-gray-500' text={"Full time"} />
            <JobData className='bg-gray-300 text-gray-500' text={"Remote"} />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm flex items-center gap-1 font-semibold'><CircleCheck size={"1rem"} fill='#fff' color="#45d95d" /> 5 of 6 skills match with you - you may be a good fit 💡</p>
          <div className='flex items-center gap-3'>
            <Button className='rounded-full bg-green-500 hover:bg-green-600'>Apply for job</Button>
            <div className='p-1 bg-white border border-zinc-400 flex items-center justify-center h-8 w-8 rounded-full'>
              <Heart className='text-zinc-400' fill="gray" size={14} />
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 flex flex-col'>
        <h3 className='font-semibold'>Job Details</h3>
        <div className='flex flex-col gap-3 mt-4'>
          <JobInfo title='Years of Experience' description='0-3 years' />
          <JobInfo title='Education level' description='Bachelors degree' />
          <JobInfo title='Career level' description='Mid -senior' />
          <JobInfo title='Salary' description='20k - 25k' />
          <JobInfo title='Category' description='Creative / Design - IT Software development - Gaming' />
        </div>
      </div>
    </aside>
  )
}

export default JobSidebar