import { query } from "../lib/db";
import {NextResponse} from "next/server"
import {writeFile} from 'fs/promises'
export async function GET(req,res){



  const schoolDetails = await query({
    query:"SELECT * FROM `schoolsrecord`",
    values:[]
  }) 
  // console.log("products ",schoolDetails);
  

   
  return  NextResponse.json({message:"success",schoolDetails},{status:200})
   
} 

// export const POST = async (req,res)=>{
//   const {school_name,address, city,state,contact,email,imagefile} = await req.json();
   
//   const addSchoolDetail = await query({
//     query:"INSERT INTO `schoolsrecord` (`school_name`, `address`, `city`, `state`, `contact`, `email`, `imagefile`) VALUES (?,?,?,?,?,?,?)",
//     values:[school_name,address, city,state,contact,email,imagefile]
//   })  

//   if(addSchoolDetail.insertId){
//     let schoolDetail = {
//       school_id:addProducts.insertId,
//       school_name:school_name,
//       address:address,
//       city:city,
//       state:state,
//       contact:contact,
//       email:email,
//       imagefile:imagefile
//     }
//     return  NextResponse.json({message:"success", schoolDetail},{status:200})
    
//   } else {
//     return  NextResponse.json({message:"Failed" },{status:500})

//   }
//   // return  NextResponse.json({message:"success",bodyData},{status:200})
  
// }

export const POST = async(req)=>{
  const data = await req.formData();
  
  const school_name = data.get('school_name')
  const address = data.get('address')
  const city = data.get('city')
  const state = data.get('state')
  const contact = data.get('contact')
  const email = data.get('email')
  const imagefile = data.get('imagefile');

  // console.log(school_name , address,city,state, contact, email, imagefile);
  if(!school_name || !address || !city|| !state || !contact || !email || !imagefile){ 
    
    return NextResponse.json({message:"No Data found",success:false},{status:500})
} 
// console.log("file-->",file);
  const byteData = await imagefile.arrayBuffer();
  // console.log("byteData-->",byteData);

  const buffer= Buffer.from(byteData);
  // console.log("buffer-->",buffer);

  // declare path where we upload our file 

  const path=`./public/schoolImages/${imagefile.name}`
  const imagepath = `/schoolImages/${imagefile.name}`

  await writeFile(path,buffer);


  // ------------inset our data into database--------
  const addSchoolDetail = await query({
    query:"INSERT INTO `schoolsrecord` (`school_name`, `address`, `city`, `state`, `contact`, `email`, `imagefile`) VALUES (?,?,?,?,?,?,?)",
    values:[school_name,address, city,state,contact,email,imagepath]
  })  

  if(addSchoolDetail.insertId){
    let schoolDetail = {
      school_id:addSchoolDetail.insertId,
      school_name:school_name,
      address:address,
      city:city,
      state:state,
      contact:contact,
      email:email,
      imagefile:path
    }
    return  NextResponse.json({message:"success", schoolDetail},{status:200})
    
  } else {
    return  NextResponse.json({message:"Failed" },{status:500})

  }

}