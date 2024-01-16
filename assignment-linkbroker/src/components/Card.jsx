import {useState} from 'react'
import Poppage from './PopImg';


const Card = ({results}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPopVisible, setPopVisible] =useState(false);

   const handlePop =()=>{
    setPopVisible(true);
   }
   const handleClosePopup =()=>{
    setPopVisible(false)
   }
  
  return (
    <div>
      <div className='h-24 w-full bg-[#F5F5F5] mx-auto flex items-center  text-[#767676] font-sans font-medium'> 
      <span className='border-[1.05px]   px-8 py-2 mx-auto h-fit rounded-lg border-[#D1D1D1]'>Computer</span>
      <span className='border-[1.05px] px-8 py-2 mx-auto h-fit rounded-lg border-[#D1D1D1]'>Codierung</span>
      <span className='border-[1.05px] px-8 py-2 mx-auto h-fit rounded-lg border-[#D1D1D1]'>Tech</span>
      <span className='border-[1.05px] px-8 py-2 mx-auto h-fit rounded-lg border-[#D1D1D1]'>Netz</span>
      <span className='border-[1.05px] px-8 py-2 mx-auto h-fit rounded-lg border-[#D1D1D1]'>Code</span>
      <span className='border-[1.05px] px-8 py-2 mx-auto h-fit rounded-lg border-[#D1D1D1]'>Finanzieren</span>
      <span className='border-[1.05px] px-8 py-2 mx-auto h-fit rounded-lg border-[#D1D1D1]'>Marketing</span>
      </div>

      <div className=' bg-white  mx-12 my-12 '>
      <div className='lg:flex flex-wrap gap-12'>
      {results.map((result) => (
       <div key={result.id}  >
     
       <img src={result.webformatURL} alt={result.tags} className='rounded-lg h-56 w-96' onClick={handlePop}/>
       {isPopVisible && (
        <Poppage onClose={handleClosePopup} />
       )}
     
       <h1 className='flex gap-4 mt-4 w-[400.95px] h-[24px] p-0 pr-[8.19px]  '>
       <span className='bg-[#F5F5F5] px-2 text-[#767676]'>{result.tags}</span>
      
       </h1>
       </div>
      ))}
      </div>
      </div>

    </div>
  )
}



export default Card
