"use client" 
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
     <main>
      <div className="flex items-center justify-center w-screen h-screen ">
        <Link href="http://localhost:3000/api" className=" text-orange-300 mt-[-5rem]  text-2xl underline hover:text-orange-600">See api data here...</Link>
      </div>
     </main>
  )
}
