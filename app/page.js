import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className='flex justify-center items-center border flex-col min-h-screen  mt-[-2rem] '>
        
          <h2>Sorry for inconvenience...</h2>
          <h5>To see project please go to   <Link href={"http://localhost:3000/dashboard"} className=' text-blue-700'>"/dashboard" route -&gt;</Link> </h5>
      </div>
      </div> 
  )
}
