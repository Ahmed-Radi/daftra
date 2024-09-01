type JobInfoProps = {
  title: string;
  description: string;
}

const JobInfo = ({ title, description }: JobInfoProps) => {
  return (
    // <div className="flex gap-1 xl:w-[80%]">
    <div className="xl:w-[80%]">
      <h3 className='float-left mr-1 font-semibold text-gray-500'>{title}: </h3><span className="font-semibold">{description}</span>
    </div>
  )
}

export default JobInfo