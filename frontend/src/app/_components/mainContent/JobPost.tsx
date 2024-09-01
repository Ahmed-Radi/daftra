import { cn } from '@/lib/utils';
import Image from 'next/image';
import { memo } from 'react'
import JobLocation from './JobLocation';
import { ArrowDownToDot, Calendar, Heart } from 'lucide-react'
import JobData from './JobData'

type JobPostProps = {
  isActive?: boolean;
  companyImage: string;
  jobTitle: string;
  jobLocation: string;
  postJobDate: string;
  companyName: string;
  yearExperience: string;
  jobType: string;
  jobLocal: string;
  relativeTracks: string;
}

const JobPost = ({
  isActive,
  companyImage,
  jobTitle,
  jobLocation,
  postJobDate,
  companyName,
  yearExperience,
  jobType,
  jobLocal,
  relativeTracks }: JobPostProps) => {
  return (
    <div className={cn('border rounded-md flex flex-col', {
      "border-green-400 bg-green-200": isActive, // if selected
    })}>
      <div className='flex flex-col'>
        <div className='flex flex-col gap-3 border-b border-zinc-200 p-5'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-3'>
              <div className='relative w-12 h-12'>
                <Image src={companyImage} className='rounded-sm' width={1000} height={1000} alt="job-image" />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='font-semibold'>{jobTitle}</h3>
                <p className='text-green-600 text-xs'>{companyName}</p>
              </div>
            </div>
            <div className='p-1 bg-white border border-zinc-400 rounded-full'>
              <Heart className='text-zinc-400' fill="gray" size={14} />
            </div>
          </div>
          <div className='flex flex-wrap gap-1.5'>
            <JobLocation
              icon={<ArrowDownToDot size={14} />}
              text={jobLocation}
            />
            <JobLocation
              icon={<Calendar size={14} />}
              text={postJobDate}
            />
          </div>
          <div className='flex flex-wrap gap-2'>
            <JobData text={yearExperience} />
            <JobData text={jobType} />
            <JobData text={jobLocal} />
          </div>
        </div>
        <div className='p-5 text-sm font-semibold text-gray-400'>{relativeTracks}</div>
      </div>
    </div>
  )
}

export default memo(JobPost)