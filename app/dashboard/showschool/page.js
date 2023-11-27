"use client" 
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const ShowSchool = () => {

  const [schoolDetailsData, setSchoolDetailsData] = useState([]);
  
  const getData = async()=>{
    
      const response = await fetch("http://localhost:3000/api")
  
      let data = await response.json()
      if(data.message==="success"){
        data = data.schoolDetails
        console.log("data",data );
        setSchoolDetailsData(data)
        console.log(schoolDetailsData);

      }
      else{
        console.log("error");
      }    
  }
  
  useEffect(()=>{
   getData();

  },[])


  return (
    <div className=' showschool  flex  pt-8 justify-center  px-10 '>
      <div className=" showschooldiv w-full bg-gray-200 rounded-md border    flex justify-center  items-center flex-col gap-6 py-8 ml-[-6rem] px-12 ">
        <h1 className='font-bold text-2xl uppercase  px-4 py-1 shadow-gray-500 '>show school record</h1>

        <div className=' w-full table'>
          <table className=' w-full text-center '>
            
            <tr className='font-bold text-lg   uppercase shadow-md bg-gray-400 h-8   '>
              <th >School Name</th>
              <th>School Address</th>
              <th>City</th>
              <th>State</th>
              <th>image</th>
            </tr>
            {
              schoolDetailsData?.map((data,id)=>(
                <tr className=' text-xl bg-slate-300 text-center  '>
                  <td>{data.school_name}</td>
                  <td>{data.address}</td>
                  <td>{data.city}</td>
                  <td>{data.state}</td>
                  <td className='py-3 flex justify-center'>
                    <Image src={data.imagefile} alt='' width="100" height="100"/> 
                  </td>
                </tr>
              )) 
            }
            
            <hr/>
            
            <tr className=' text-xl bg-slate-300 text-center  '>
              <td>School3</td>
              <td>abc, xyz</td>
              <td>abcdk</td>
              <td>abcdk</td>
              <td className='   py-3 flex justify-center'>
                
                <img src="https://tse1.mm.bing.net/th?id=OIP.H75RMSZ0A6x4P9qHX0oYbgHaFX&pid=Api&rs=1&c=1&qlt=95&w=153&h=111" width="100px" height="80px " alt="" /></td>
            </tr>
            <hr/>
            <tr className=' text-xl bg-slate-300 text-center  '>
              <td>CPS</td>
              <td>abc, xyz</td>
              <td>abcdk</td>
              <td>abcdk</td>
              <td className='py-3 flex justify-center'>
                
                <img src="https://tse1.mm.bing.net/th?id=OIP.H75RMSZ0A6x4P9qHX0oYbgHaFX&pid=Api&rs=1&c=1&qlt=95&w=153&h=111" width="100px" height="80px " alt="" />
                
                </td>
            </tr>
            <hr/>
            <tr className=' text-xl bg-slate-300 text-center  '>
              <td>CPS</td>
              <td>abc, xyz</td>
              <td>abcdk</td>
              <td>abcdk</td>
              <td className='   py-3 flex justify-center'>
                
                <img src="https://tse1.mm.bing.net/th?id=OIP.H75RMSZ0A6x4P9qHX0oYbgHaFX&pid=Api&rs=1&c=1&qlt=95&w=153&h=111" width="100px" height="80px " alt="" /></td>
            </tr>
            <hr/>
          </table> 
        </div>
      </div>
    </div>
  )
}

export default ShowSchool