"use client";

import { memo, useRef } from 'react';
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils';

type SearchSectionProps = {
  className?: string;
}

const SearchSection = ({ className }: SearchSectionProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className={cn('flex items-center bg-white p-2 rounded-full h-12 w-auto lg:w-80', className)}>
      <Search className='p-3 bg-green-700 rounded-full' size={"40px"} onClick={handleSearchClick} />
      <Input type='text' className='hidden md:block border-0 text-black w-full focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='Search by name, job title, ...' ref={inputRef} />
    </div>
  )
}

export default memo(SearchSection)