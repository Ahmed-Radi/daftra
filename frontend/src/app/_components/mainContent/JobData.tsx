import { cn } from '@/lib/utils';
import { memo } from 'react';

type JobDataProps = {
  text: string;
  className?: string;
}

const JobData = ({ text, className }: JobDataProps) => {
  return (
    <div className={cn('bg-white text-gray-400 rounded-md py-1 px-2 text-sm font-semibold w-fit', className)}>{text}</div>
  )
}

export default memo(JobData)