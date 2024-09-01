import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { NavbarIconProps } from '@/types';
import { memo } from 'react';

const NavbarIcon = ({
  icon,
  title,
  href,
}: NavbarIconProps) => {
  return (
    href ? <Link href={href} className='h-full flex flex-col items-center justify-between'>
      <span className='text-xs'>{icon}</span>
      <span className='text-xs'>{title}</span>
    </Link> : <div className='h-full flex flex-col items-center justify-between'>
      <span className='text-xs'>{icon}</span>
      {/* <span className='text-xs'>{title}</span> */}
      <Select>
        <SelectTrigger className="w-fit h-fit bg-transparent p-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0">
          <span className='text-xs'>{title}</span>
        </SelectTrigger>
        <SelectContent className='z-[110] top-[10px]'>
          <SelectItem value="profile">Profile</SelectItem>
          <SelectItem value="setting">Setting</SelectItem>
          <SelectItem value="logout">log out</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default memo(NavbarIcon)