import React from 'react'

export default function Catagory({finalCatagory,setcatName}) {
  let cat = finalCatagory.map((v,i)=>{
    return(
      <li onClick={()=>setcatName(v)} key={i} className='bg-[gray] text-[white] p-[10px] mb-[10px] hover:bg-[black] transition-all 0.2s ease-in cursor-pointer'>{v}</li>

    )
  })
  return (
    <>
    <div className='ml-[20px]'>
      <p className='p-[10px] text-[40px] font-normal'>CATAGORY</p>
      <ul>
        
    {cat}
      </ul>
    </div>
    </>
  )
}
