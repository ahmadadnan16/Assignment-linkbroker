import axios from "axios";
import { useState } from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"
// import SearchResult from "./SearchResult"
import Card from "./Card";

const LandingPage1 = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleSearch =async () => {
            try {
                if (!searchTerm.trim()) {
                    // If searchTerm is empty or contains only whitespaces, don't make the API call
                    return;}
                const apiKey ="41779675-a1dbd5269481e09d3d22e0802";
                const apiUrl =`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&pretty=true`;

                const response = await axios.get(apiUrl);
                console.log(response.data)
                console.log(response.data.hits)

                setResults(response.data.hits)
                setShowResult(true)


            } catch (error) {
                console.error("Error while fetching data from API",error)
            }
    }
    const handlleClose =()=>{
       
    }
  return (
    <section className="w-screen absolute  h-full bg-center bg-cover bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2022/05/01/13/48/planets-7167584_1280.jpg')]">
    <Navbar/>
      {!showResult && <Hero/>}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} results={results} setResults={setResults}/>
      {showResult && <h1>Rusult : {searchTerm}</h1> }
      <div className="mt-60">
      <Card results={results} setResults={setResults}/>
      </div>
    </section>
  )
}

export default LandingPage1
