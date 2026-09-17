import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//components
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Room from '../components/Room.jsx'
import Facilities from '../components/Facilities.jsx'
import Gallery from '../components/Gallery.jsx'
import Reviews from '../components/Reviews.jsx'
import Faq from '../components/Faq.jsx'
import Footer from '../components/Footer.jsx'
//roomsjson
import { PopularRooms } from '../rooms.js'
//homepage herobg
import heroimg from '../assets/hero.png'

function HomePage() {
  const [freatureRooms, setFreatureRooms] = useState([]);
  useEffect(() => {
    const popularRooms = PopularRooms()
    setFreatureRooms(popularRooms)

  }, [])

  return (
    <>
      <Navbar />

      <Hero h1="your comfortortable stay start here" p="relax, recharge and enjoy your stay with us." image={heroimg} />

      < div className='pt-2'>
        <h1 className='text-center text-lg md:text-2xl font-bold text-amber-500'>Finds your perfect room</h1>
        <p className='text-center text-amber-600 text-sm md:text-md'>choose a room that fit your comfort and budget.</p>
        <div className='lg:hidden text-right p-2 text-amber-600 font-bold'>
          <Link to={'/rooms'}>View all</Link>
        </div>
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2'>

          {
            freatureRooms.map(room => (
              <Room data={room} key={room.id} />
            ))
          }
        </section>
      </div>
      <Facilities />
      <Gallery />
      <Reviews />
      <Faq />
      <Footer />
    </>
  )
}

export default HomePage