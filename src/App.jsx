
import axios from 'axios'
import './App.css'
import Catagory from './Catagory'
import Product from './Product'
import { useEffect, useState } from 'react'
function App() {
  let [finalCatagory,setfinalCatagory]=useState([])
  let [finalData,setfinalData]=useState([])
  let [catName,setcatName]=useState('')
  let getCatagory=()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res=>res.data)
    .then((FinalResp)=>{
    setfinalCatagory(FinalResp)
    })
    
  }

  let getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then(pres=>pres.data)
    .then((FinalData)=>{
setfinalData(FinalData.products)
    })
  }
  useEffect(()=>{
getCatagory()
getProduct()
  },[])
  useEffect(()=>{
if(catName!==""){
  axios.get(`https://fakestoreapi.com/products/categories/${catName}`)
  .then(pres=>pres.data)
  .then((FinalData)=>{
setfinalData(FinalData.products)
  })
}
  },[catName])

  

  return (
    <>
    
    <div className=" outer m-0 inner w-full h-screen  m-0">
      
      <h1 className='text-[40px] font-semibold  text-center pt-10'>Products</h1>
      
      <div className=" grid grid-cols-[30%,auto] gap-10">
        <div className="catagory">
          <h1 className='ml-[40px]'>{finalCatagory.length}</h1>
          <Catagory finalCatagory={finalCatagory}setcatName={setcatName}/>
        </div>
        <div className="Items bg-[white]" >
          {finalData.length}
          {finalData.length >= 1 ?
          <Product finalData={finalData}/>:
          "product is no "
        }
            

          
        </div>
      </div>
    </div>
  </>)
}

export default App
