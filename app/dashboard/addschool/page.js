'use client'
import React, { useState } from 'react'

const AddSchool = () => {

  const [formData , setFormData] = useState({
    school_name:"",
    address:"",
    city:"",
    state:"",
    contact:"",
    email:"",
    imagefile:"",


  })

  
  

  const handleInput = (e)=>{
     
    setFormData({
      ...formData,
      [e.target.name]:e.target.value 
    }) 
 
    console.log(formData);
  }

  const handleSubmittt=async(e)=>{
    e.preventDefault();
    
    console.log("get file from client -->",file);
    const data = new FormData()
    data.set('file',file);
    console.log("get data from client -->",data);

    const result = await fetch("http://localhost:3002/api",{
      method:"POST",
      body:data
    });

    const response = await result.json();

    console.log("result--", response);
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        // form data alway send as "Content-Type: multipart/form-data" ..FormData also  support "multipart/form-data" encoding ,this enccoding also allow us to send files.
    const data = new FormData()
    data.set("school_name",formData?.school_name);
    data.set("address",formData?.address)
    data.set("city",formData?.city)
    data.set("state",formData?.state)
    data.set("contact",formData?.contact)
    data.set("email",formData?.email)
    data.set("imagefile",formData?.imagefile)

    // console.log("data---",data.get('school_name'));

    const result = await fetch("http://localhost:3000/api",{
      method:"POST",
      body:data
    });
    
    
    
    const response = await result.json();
    if(response.message==="success"){
      alert("Data added successfully!!");

      setFormData(
        {
          school_name:"",
          address:"",
          city:"",
          state:"",
          contact:"",
          email:"",
          imagefile:"",
      
      
        }
      )

    }

    // console.log("result--", result);
    } catch(err){
      alert("data not added!!")
    }
   
  }



  return (   

<div className=' addschool  flex py-8 px-36   items-center justify-center'>
  <div className='addschooldiv flex flex-col w-full  rounded   bg-slate-50   px-20 py-9 gap-3'>
    <h1 className='text-center text-2xl font-bold uppercase   px-4 py-1 shadow-gray-500 w-[20rem] mx-auto'>Add School Details</h1>

    <form  className="" onSubmit={ handleSubmit}>
      <div className="flex flex-col  gap-3 ">
      <div className='flex flex-col  gap-2 '>
          <label htmlFor="school_name" className='font-bold   text-lg'>School Name</label>
          <input type="text" placeholder='enter school name' value={formData.school_name} className='border rounded-sm border-gray-400 px-4 py-1 w-full' onChange={handleInput} name='school_name' autoComplete='off' required  />     
      </div>
      <div className='flex flex-col  gap-2'>
          <label htmlFor="address" className='font-bold   text-lg'>School Address</label>
          <input type="text" placeholder='Enter school address' value={formData.address} className='border rounded-sm border-gray-400 px-4 py-1 w-full' name='address' onChange={handleInput} autoComplete='off' required   />     
      </div>
      <div className='flex flex-col  gap-2'>
          <label htmlFor="city" className='font-bold   text-lg'>City</label>
          <input type="text" placeholder='Enter city' value={formData.city} className='border rounded-sm border-gray-400 px-4 py-1 w-full' name='city' onChange={handleInput} autoComplete='off' required />     
      </div>
      <div className='flex flex-col  gap-2 '>
          <label htmlFor="state" className='font-bold   text-lg'>State</label>
          <input type="text" placeholder='Enter State' value={formData.state} className='border rounded-sm border-gray-400 px-4 py-1 w-full' name='state' onChange={handleInput} autoComplete='off' required/>     
      </div>
      <div className='flex flex-col  gap-2'>
          <label htmlFor="contact" className='font-bold   text-lg'>Contact Number</label>
          <input type="number" placeholder='Enter contact Number' value={formData.contact} className='border rounded-sm border-gray-400 px-4 py-1 w-full' name='contact' onChange={handleInput} minLength={10}  autoComplete='off' required  />     
      </div>
      <div className='flex flex-col  gap-2 '>
          <label htmlFor="email" className='font-bold   text-lg'>Email Id</label>
          <input type="email" placeholder='enter email id' value={formData.email} className='border rounded-sm border-gray-400 px-4 py-1 w-full' name='email'  onChange={handleInput} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autoComplete='off' required />     
      </div>
      <div className='flex gap-4 image_upload '>
          <label htmlFor="imagefile" className='font-bold   text-lg'>Upload Image</label>
          <input type="file"   name='imagefile' onChange={e=>setFormData({...formData,imagefile:e.target.files?.[0]})} required />       
      </div>
      <input type='submit'  className="block bg-slate-600  hover:bg-slate-500 text-white uppercase text-md mx-auto px-6 py-[12px] rounded" value="Add Detail" /> 
      {/* <div className='flex gap-20 '>
        <div className='flex gap-3'>
          <label htmlFor="schoolName" className='font-bold uppercase text-lg'>School Name</label>
          <input type="text" placeholder='enter school name' className='border rounded-sm border-gray-400 px-4 py-1'  />
        </div>
        <div className='flex gap-3' >
          <label htmlFor="address" className='font-bold uppercase text-lg'>School Address</label>
          <input type="text" placeholder='Enter School address' className='border rounded-sm border-gray-400 px-4 py-1'  />
        </div>
      </div> */}
      {/* <div className='flex gap-20 '>
        <div className='flex gap-3'>
          <label htmlFor="schoolName" className='font-bold uppercase text-lg'>School Name</label>
          <input type="text" placeholder='enter school name' className='border rounded-sm border-gray-400 px-4 py-1'  />
        </div>
        <div className='flex gap-3' >
          <label htmlFor="address" className='font-bold uppercase text-lg'>School Address</label>
          <input type="text" placeholder='Enter School address' className='border rounded-sm border-gray-400 px-4 py-1'  />
        </div>
      </div> */}
      </div>
    </form> 
  </div>
</div>
  )
}

export default AddSchool