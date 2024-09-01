"use client";

import { Button } from "@/components/ui/button";
import { ErrorPageProps } from "@/types";
import Link from "next/link";

const error = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-var(--navbar-height))]">
      <div className="text-3xl text-red-600 font-semibold">
        Something went wrong
      </div>
      <h2 className="text-gray-700 my-3 text-xl">
        Error Message: {error.message}
      </h2>
      <div className="flex items-center gap-5 mt-6">
        <Button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 text-md text-white font-bold py-2 px-3 rounded-md">
          Try refresh page
        </Button>
        <Link href="/" className="text-xl rounded-lg bg-green-600 hover:bg-green-700 py-2 px-3 text-white block">
          Go to home page
        </Link>
      </div>
    </div>
  )
}

export default error