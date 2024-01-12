import Hero from "./Hero"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

const LandingPage1 = () => {
  return (
    <section className="w-screen fixed h-screen bg-center bg-cover bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2022/05/01/13/48/planets-7167584_1280.jpg')]">
    <Navbar/>
      <Hero/>
      <SearchBar/>
    </section>
  )
}

export default LandingPage1
