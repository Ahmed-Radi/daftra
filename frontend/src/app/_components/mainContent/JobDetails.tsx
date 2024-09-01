import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from '../../../components/ui/switch'
import JobPost from "./JobPost"
import PaginationItem from "./PaginationItem"
import { IJobPost } from "@/types"
import { jobPost } from "@/constants"

const JobDetails = () => {
  // const [isSliderVisible, setSliderVisible] = useState(true);
  // const toggleSlider = () => {
  // 	setSliderVisible(!isSliderVisible);
  // };

  return (
    <section className='flex flex-col gap-2.5 lg:pt-5'>
      <div className='flex flex-row-reverse items-center gap-2'>
        <Select>
          <SelectTrigger className="w-[100px] text-green-600 border-none bg-transparent p-0 h-fit gap-2">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top-match">Top match</SelectItem>
            <SelectItem value="job">Job</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <span className='text-sm'>Sorting by: </span>
      </div>
      <div className='bg-green-700 rounded-md flex justify-between items-center p-5 text-white'>
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold'>UI Designer in Egypt</h3>
          <p>70 job positions</p>
        </div>
        <div className='flex gap-3'>
          <span>Set alert</span>
          <Switch />
        </div>
      </div>
      {jobPost.map((item: IJobPost, index: number) => (
        <JobPost
          key={index}
          isActive={item.isActive}
          companyImage={item.companyImage}
          jobTitle={item.jobTitle}
          jobLocation={item.jobLocation}
          postJobDate={item.postJobDate}
          companyName={item.companyName}
          yearExperience={item.yearExperience}
          jobType={item.jobType}
          jobLocal={item.jobLocal}
          relativeTracks={item.relativeTracks}
        />
      ))}
      <div className="flex justify-center items-center gap-3 md:hidden">
        <PaginationItem label="&lt;" />
        <PaginationItem label="1" />
        <PaginationItem label="2" isActive />
        <PaginationItem label="3" />
        <PaginationItem label="&gt;" />
      </div>
    </section>
  )
}

export default JobDetails