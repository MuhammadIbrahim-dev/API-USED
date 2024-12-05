import React from 'react'

export default function Product({finalData}) {
  let pData=finalData.map((v,index)=>{
    return(
        <div className="box1 shadow-2xl cursor-pointer">
          <img src={v.thumbnail} alt=""/>
      <h1 className='text-[20px]'>{v.title}</h1>
      <p className='text-[10px]'>{v.price}</p>
      <p className='text-[10px]'>{v.rating}</p>

    </div>
    )
 })
  return (
    <div className="Item-content grid grid-cols-3 gap-[10px]">
  
    {pData}
  </div>

  )
}
