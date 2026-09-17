import { Link } from 'react-router-dom'
//components
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
//rooms.json
import rooms from '../rooms.js'
const RoomPage = () => {
  return (<>
    <Navbar />
    <Hero h1="choose your stay" p="relax,comfort with spacious rooms" image={'/hero2.jpg'} />

    <div className=' p-2'>
      <h1 className='text-2xl lg:text-3xl text-center p-2 font-mono '>Our Rooms</h1>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-2 p-1 md:p-3'>
        {
          rooms.map(room => (
            <div className='flex justify-between p-1 rounded-md border-2 border-amber-500' key={room.id}>
              <div className='w-[40%]'>
                <img src={room.image} className='w-full h-full object-cover object-center rounded-md' />
              </div>
              <div className='w-[60%] space-y-3 h-full p-1 sm:p-2'>
                <h1 className='text-md text-amber-500'>{room.title}</h1>
                <h2>{room.price}</h2>
                <div className='flex flex-wrap items-center justify-around'>
                  <div className='flex items-center'><img src='/users.png' className='w-5 h-5' />{room.guests} guests</div>
                  <span>★{room.rating}</span>
                </div>
                <button className='bg-amber-500 p-1 rounded-md border-none outline-none text-white w-full sm:w-[200px]'><Link to={`/room/${room.title.replace(" ", "+")}`}>View Room</Link></button>
              </div>
            </div>
          ))
        }
      </section>
    </div>

    <Footer />
  </>
  )
}

export default RoomPage