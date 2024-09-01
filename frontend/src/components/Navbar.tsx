
import { Bell, BriefcaseBusiness, Home, ListCollapse, MessageSquare, Users } from 'lucide-react'
import NavbarIcon from './navbar/NavbarIcon';
import SearchSection from './navbar/SearchSection';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Fragment } from 'react';
import Link from 'next/link';

const Navbar = () => {

  return (
    <Fragment>
      <nav className='hidden md:block h-navbar-height z-[100] px-4 py-3 bg-black text-white sticky inset-0'>
        <div className='h-12 flex items-center justify-between gap-5'>
          <div className='flex items-center gap-4'>
            <Link href='/' className='text-3xl font-bold'>I<span className='text-green-800'>Z</span>AM</Link>
            <SearchSection />
          </div>
          <div className='flex gap-6 h-full'>
            <NavbarIcon icon={<Home />} title='Home' href='/' />
            <NavbarIcon icon={<BriefcaseBusiness fill="white" />} title='Jobs' href='/' />
            <NavbarIcon icon={<Users />} title='Employers' href='/' />
            <span className='h-[41px] w-[2px] bg-slate-700 rounded-full' />
            <NavbarIcon icon={<Bell />} title='Notification' href='/' />
            <div className='relative h-full'>
              <span className='absolute bg-red-600 w-4 h-4 rounded-full right-1 -top-1 text-sm flex flex-col items-center justify-center'>
                1
              </span>
              <NavbarIcon icon={<MessageSquare />} title='Message' href='/' />
            </div>
            <NavbarIcon icon={<Avatar className='w-6 h-6'>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className='text-black'>AR</AvatarFallback>
            </Avatar>} title='Profile' />
          </div>
        </div>
      </nav>
      {/* Mobile navbar */}
      <nav className='block md:hidden h-sm-navbar-height z-[100] px-4 py-5 bg-black text-white sticky inset-0'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <div className="relative">
              <NavbarIcon icon={<Avatar className='w-12 h-12 md:w-6 md:h-6'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>} title='' href='/' />
              <span className='absolute bg-gray-600 flex items-center justify-center rounded-full -right-2 h-6 w-6 bottom-0'>
                <ListCollapse size={"10px"} />
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <SearchSection className='bg-transparent' />
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <h1 className='text-3xl font-bold'>I<span className='text-green-800'>Z</span>AM</h1>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar