import axios from "axios";
import { useState } from "react"


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch =async () => {
            try {
                const apiKey ="41779675-a1dbd5269481e09d3d22e0802";
                const apiUrl =`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&pretty=true`;

                const response = await axios.get(apiUrl);

                console.log("Pixabay Data",response.data)
            } catch (error) {
                console.error("Error while fetching data from API",error)
            }
    }
  return (
    <div className="flex gap-2 justify-between items-center w-9/12 md:w-7/12 lg:w-5/12 mx-auto  text-white bg-white/10 backdrop-blur-sm px-5 py-1 md:py-2 lg:py-2 mt-10 md:mt-20 lg:mt-7 border-2 rounded-lg">
<svg width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.9219 20.3906L18.1406 18.6094M10.5703 19.5C11.6814 19.5 12.7816 19.2812 13.8082 18.8559C14.8347 18.4307 15.7674 17.8075 16.5531 17.0218C17.3388 16.2362 17.962 15.3035 18.3872 14.2769C18.8124 13.2504 19.0312 12.1502 19.0312 11.0391C19.0312 9.92796 18.8124 8.82773 18.3872 7.8012C17.962 6.77467 17.3388 5.84195 16.5531 5.05628C15.7674 4.27061 14.8347 3.64738 13.8082 3.22218C12.7816 2.79697 11.6814 2.57812 10.5703 2.57813C8.32633 2.57813 6.17426 3.46954 4.58753 5.05628C3.00079 6.64301 2.10938 8.79508 2.10938 11.0391C2.10937 13.283 3.00079 15.4351 4.58753 17.0218C6.17426 18.6086 8.32633 19.5 10.5703 19.5Z" stroke="white" strokeWidth="1.33594" strokeLinecap="round" strokeLinejoin="round" />
</svg>

<svg width={2} height={38} viewBox="0 0 2 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="1.07812" y1="1.67188" x2="1.07812" y2="36.4062" stroke="white" strokeWidth="1.78125" strokeLinecap="round" />
</svg>
      <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      onKeyDown={(e) =>{
        if(e.key === "Enter"){
            handleSearch();
        }
      }}
      className="w-5/6 bg-transparent focus:outline-none"/>
      <button 
      onClick={handleSearch}
      className='border-2 px-3 py-1 rounded-md hover:scale-110 transition-all ease-in duration-300'>GO!</button>
    </div>
  )
}

export default SearchBar
