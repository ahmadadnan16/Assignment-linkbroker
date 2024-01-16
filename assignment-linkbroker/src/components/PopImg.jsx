import IMG from '../assets/Img.png'
import { useState } from 'react';

const Poppage = ({selectedImage, onClose}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isPopVisible, setPopVisible] = useState(true);

    const handleCheckboxChange = (option) => {
      setSelectedOption(option === selectedOption ? null : option);
    };
  
    const handleDownload = () => {
      if (selectedOption) {
        // Assuming you have image URLs for each size
        const imageUrls = {
          'Option 1': 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
          'Option 2': 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
          'Option 3': 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
          'Option 4': 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        };
        fetch(imageUrls[selectedOption])
          .then(response => response.blob())
          .then(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'downloaded_image.jpg';
            document.body.appendChild(link);
            link.click();
    
            document.body.removeChild(link);
          })
          .catch(error => console.error('Error downloading image:', error));
      }
    };
    
    const handleClosePopup = () => {
      setPopVisible(false);
    };

  return (
    <div className='justify-center items-center h-screen shadow-lg z-50' >

<nav className="bg-gray-50 dark:bg-gray-700 ">
<div className="max-w-screen-xl px-4 py-3 mx-auto">
    <div className="flex items-center justify-between">
        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
                <a href="#" className="text-[#3B4043] font-sans font-medium text-xl leading-[51px] tracking-normal text-left" aria-current="page">Preview ID: 48777</a>
            </li>
        </ul>
        <button onClick={handleClosePopup} >
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8451 20.3409L20.2303 11.9557M20.2303 20.3409L11.8451 11.9557M11.5933 30.9631H20.4822C27.8896 30.9631 30.8525 28.0002 30.8525 20.5928V11.7039C30.8525 4.29646 27.8896 1.3335 20.4822 1.3335H11.5933C4.18586 1.3335 1.2229 4.29646 1.2229 11.7039V20.5928C1.2229 28.0002 4.18586 30.9631 11.5933 30.9631Z" stroke="#3B4043" stroke-width="2.22138" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
    </div>
</div>
</nav>

<div className="lg:flex w-11/12 lg:mx-32 mt-12 gap-10  mx-4 ">
<div>
<img src={selectedImage.webformatURL} alt={selectedImage.tags}  className='lg:w-[832.11px] lg:h-[555.34px] lg:top-[310.99px] left-[63.09px] rounded-lg'/>
</div>
<div className="  ">
  <h1 className="text-[#3B4043] font-sans font-medium text-xl leading-[51px] tracking-normal text-left">Download</h1>
  
  <div className="border-2 mt-2 border-[#DEE8F4] rounded-lg w-fit">
    
    <div className="flex gap-10 border-b-2  p-2 hover:bg-[#DEE8F4]">
      <span className="flex-grow">Small</span>
      <span className="flex-grow text-[#475467] font-bold mr-2"> 640x960</span>
      <span className="flex-grow"> 
        <label>
          <input type="checkbox" checked={selectedOption === 'Option 1'} onChange={() => handleCheckboxChange('Option 1')} />
        </label>
      </span>
    </div>   
    
    <div className="flex gap-10 p-2 border-b-2">
      <span className="flex-grow ">Medium </span>
      <span className="flex-grow  text-[#475467] font-bold"> 1920x2660</span>
      <span className="flex-grow"> 
        <label className="rounded-full">
          <input type="checkbox" checked={selectedOption === 'Option 2'} onChange={() => handleCheckboxChange('Option 2')} />
        </label>
      </span>
    </div>
    
    <div className="flex gap-10 p-2 border-b-2">
      <span className="flex-grow ">Big </span>
      <span className="flex-grow ml-4  text-[#475467] font-bold"> 2400x3600</span>
      <span className="flex-grow"> 
        <label>
          <input type="checkbox" checked={selectedOption === 'Option 3'} onChange={() => handleCheckboxChange('Option 3')} />
        </label>
      </span>
    </div>
    
    <div className="flex p-2 border-b-2 gap-8">
      <span className="flex-grow">Original</span>
      <span className="flex-grow ml-4  text-[#475467] font-bold "> 3850x5640</span>
      <span className="flex-grow"> 
        <label>
          <input type="checkbox" className="rounded-full" checked={selectedOption === 'Option 4'} onChange={() => handleCheckboxChange('Option 4')} />
        </label>
      </span>
    </div>
  
  </div>
  <button className='bg-[#4BC34B] text-center rounded-md mt-4 width-full py-2 px-12' onClick={handleDownload} >Dowenload for Free</button>
  <div className='mt-4'>
<h1 className='text-[#3B4043] font-sans font-medium text-xl leading-[51px] tracking-normal text-left py-4'> Information</h1> 
<div className=' flex  gap-16 font-sans font-semibold leading-6  '>
<h1>
<span className='text-[#717579]  text-xs '> User</span>
<p className='text-[#3B4043] text-base tracking-normal '>Josch13</p>
</h1>
<h1>
<span className='text-[#717579]  text-xs '> User ID</span>
<p className='text-[#3B4043] text-base tracking-normal '>48777</p>
</h1>
<h1 className='ml-4'>
<span className='text-[#717579]  text-xs '> Type</span>
<p className='text-[#3B4043] text-base tracking-normal '>Photo</p>
</h1>
</div>
<div className=' flex mt-4  gap-16 font-sans font-semibold leading-6  '>
<h1>
<span className='text-[#717579]  text-xs '>Views</span>
<p className='text-[#3B4043] text-base tracking-normal '>200,000</p>
</h1>
<h1>
<span className='text-[#717579]  text-xs '>Downloads</span>
<p className='text-[#3B4043] text-base tracking-normal '>6,439</p>
</h1>
<h1>
<span className='text-[#717579]  text-xs '>Likes</span>
<p className='text-[#3B4043] text-base tracking-normal '>564</p>
</h1>
</div>
</div>
</div>

</div>
<div className='flex font-sans max-w-screen-xl px-4 py-3 mx-auto'>
  <h1 className='font-bold leading-[51px] text-base mt-1 flex flex-wrap  items-center'>
    Tags:
    <span className='font-normal p-2 ml-8 mt-3 rounded-lg leading-[23px] text-xs bg-[#F5F5F5] text-[#767676]'>Cybersicherheit</span>
    <span className='font-normal p-2 ml-2 mt-3 rounded-lg leading-[23px] text-xs bg-[#F5F5F5] text-[#767676]'>Sicherheit</span>
    <span className='font-normal p-2 ml-2 mt-3 rounded-lg leading-[23px] text-xs bg-[#F5F5F5] text-[#767676]'>Elektronischer Chip</span>
    <span className='font-normal p-2 ml-2 mt-3 rounded-lg leading-[23px] text-xs bg-[#F5F5F5] text-[#767676]'>Sicherheit</span>
    <span className='font-normal p-2 ml-2 mt-3 rounded-lg leading-[23px] text-xs bg-[#F5F5F5] text-[#767676]'>Elektronischer Chip</span>
    <span className='font-normal p-2 ml-2 mt-3 rounded-lg leading-[23px] text-xs bg-[#F5F5F5] text-[#767676]'>Elektronischer Chip</span>
    <span className='font-normal p-2 ml-2 mt-3 rounded-lg leading-[23px] text-xs bg-[#F5F5F5] text-[#767676]'>Elektronischer Chip</span>
    <span className='font-normal p-2 ml-2 mt-3 rounded-lg leading-[23px] text-xs bg-[#F5F5F5] text-[#767676]'>Test</span>
    <span className='font-normal p-2 ml-2 mt-3 rounded-lg leading-[23px] text-xs bg-[#F5F5F5] text-[#767676]'>Lorem</span>
  </h1>
</div>

</div>
  )
}

export default Poppage