import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//cmponents
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx'
import Room from '../components/Room.jsx';
//data
import rooms, { SingleRoomDetails } from '../rooms.js'
import facilities from '../facilities.js'
const RoomDetailPage = () => {
  const roomid = useParams();
  const [details, setDetails] = useState({})
  const [showDropDown, setShowDropDown] = useState(null)
  const [notification, setNotification] = useState(false)
  const [booking, setBooking] = useState({
    "checkin": "2026-03-09",
    "checkout": "2026-03-09",
    "rooms": "",
    "persons": ""
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const id = roomid.roomid.replace("+", " ")
    const result = SingleRoomDetails(id);
    setDetails(result);
  }, [roomid])
  const handleBooking = (e) => {
    e.preventDefault();
    if (!booking.rooms) return
    if (!booking.persons) return
    setNotification(true)
    setTimeout(() => {
      setNotification(false)
      setBooking((prev)=>({
        checkin:"",
        checkout:"",
        rooms:"",
        persons:""
      }))
    }, 2000);

  }
  const handleDropDown = (id) => {
    if (showDropDown == id) {
      setShowDropDown(null);
      return
    }
    setShowDropDown(id)
  }
  return (
    <>
      <div className={notification ? 'bg-lime-600 text-white max-w-[400px] w-[280px] ablolute mx-auto mt-2 p-2 rounded-md text-center font-bold z-40 ' : 'hidden'}>
        <h1>Your Room Booked Sucessfully</h1>
      </div>
      <Navbar />
      <section className='grid grid-cols-1 md:grid-cols-2 p-2 gap-2 '>
        <div>
          <ul className='flex gap-x-1 list-none text-gray-400 p-2'>
            <li><Link to='/'>Home /</Link></li>
            <li><Link to='/rooms'>Rooms /</Link></li>
            <li><Link to='#'>{details.title}</Link></li>
          </ul>
          <div className='grid grid-cols-3 gap-2'>
            <img src={details.image} className='col-span-3 rounded-lg' />
            {
              details.addImages?.map((imgpath, id) => <img src={imgpath} key={id} className='rounded-lg' />)

            }
          </div>

          <div className='p-2'>
            <h1 className='text-xl md:text-2xl text-amber-500'>Overwiew</h1>
            <p>{details.description}</p>
          </div>
        </div>

        <div className='w-full p-2 border border-amber-500 mx-auto bg-amber-50'>


          <h1 className='text-xl md:text-2xl text-amber-500 capitalize'>{details.title}</h1>
          <div>

            <div className='p-2 my-3 flex items-center gap-3 flex-wrap'>
              <div>
                <span className='text-amber-400 text-[20px]'>★</span>{details.rating}
              </div>
              <div className='flex items-center'><img src="/view.jpg" className="w-5 h-5" />{details.view}</div>
              <div className='flex items-center'><img src="/bedicon.jpg" className="w-5 h-5" />{details.bed}</div>
              <div className='flex items-center'><img src="/users.png" className="w-6 h-6" /> {details.guests}guests</div>
            </div>
            <span className='py-3 text-xl md:text-2xl '>{details.price}/
              <small>night</small>
            </span>
          </div>

          <h2 className='text-xl md:text-2xl text-amber-500 capitalize border-t border-t-gray-300  p-2'>facilities & amenities</h2>
          <div className='grid grid-cols-4 gap-2 p-2'>
            {
              facilities.map(fac => (
                <div key={fac.id} className='flex flex-col lg:flex-row bg-gray-100 justify-start items-center gap-x-2 shadow-sm shadow-gray-400 text-base rounded-lg p-2'>
                  <img src={fac.icon} className='rounded-full w-10 h-10' />
                  <span className='lg:text-sm text-[12px]'>
                    {fac.title}
                  </span>
                </div>
              ))
            }
          </div>

          <h2 className='text-xl md:text-2xl text-amber-500 capitalize border-t border-t-gray-300 p-2'>reserve your stay</h2>
          <form className='w-ful text-white   p-2 grid grid-cols-2 gap-1'>



            <label htmlFor="chekin" className='flex-1 flex flex-col text-center text-black'>
              Check-In
              <input type='date' className='w-full h-full text-center bg-amber-500 text-white p-1' onChange={(e) => setBooking(prev => ({ ...prev, checkout: e.target.value }))} />
            </label>
            <label htmlFor="chekin" className='flex-1 flex flex-col text-center text-black'>
              Check-Out
              <input type='date' onChange={(e) => setBooking(prev => ({ ...prev, checkin: e.target.value }))} className='w-full h-full bg-amber-500 text-white  text-center p-1' />
            </label>




            <div className=' flex-1 bg-amber-500 relative'>
              <div className='flex justify-evenly items-center'>
                {booking.rooms ? booking.rooms : "rooms"} <span className='text-xl cursor-pointer' id='1' onClick={() => handleDropDown(1)}>▼</span>
              </div>
              <ul className={showDropDown == 1 ? 'list-none list-inside absolute top-100% mt-1 bg-amber-100 w-full min-h-200px border border-amber-600 h-fit text-amber-600 text-center p-2 rounded-md space-y-2' : "hidden"}>
                <li onClick={() => setBooking(prev => ({ ...prev, rooms: "1 Room" }))} className='cursor-pointer'>1 Room</li>
                <li onClick={() => setBooking(prev => ({ ...prev, rooms: "2 Room" }))} className='cursor-pointer'>2 Rooms</li>
                <li onClick={() => setBooking(prev => ({ ...prev, rooms: "3 Room" }))} className='cursor-pointer'>3 Rooms</li>
                <li onClick={() => setBooking(prev => ({ ...prev, rooms: "4 Room" }))} className='cursor-pointer'>4 Rooms</li>
              </ul>
            </div>
            <div className=' flex-1 bg-amber-500 relative'>
              <div className='flex justify-evenly items-center'>
                {booking.persons ? booking.persons : "persons"} <span className='text-xl cursor-pointer' id='2' onClick={() => handleDropDown(2)}>▼</span>
              </div>
              <ul className={showDropDown == 2 ? 'list-none list-inside absolute top-100% mt-1 bg-amber-100 w-full border border-amber-600 min-h-200px h-fit text-amber-600 text-center p-2 rounded-md space-y-2' : 'hidden'}>
                <li onClick={() => setBooking(prev => ({ ...prev, persons: "1person" }))} className='cursor-pointer'>1 Persons</li>
                <li onClick={() => setBooking(prev => ({ ...prev, persons: "2person" }))} className='cursor-pointer'>2 Persons</li>
                <li onClick={() => setBooking(prev => ({ ...prev, persons: "3person" }))} className='cursor-pointer'>3 Persons</li>
                <li onClick={() => setBooking(prev => ({ ...prev, persons: "4person" }))} className='cursor-pointer'>4 Persons</li>
              </ul>
            </div>
            <button className='w-full bg-amber-600 text-white col-span-2 p-2 font-semibold rounded-md' onClick={handleBooking}>Reserve Now</button>
          </form>

          <h2 className='text-xl md:text-2xl text-amber-500 capitalize border-t border-t-gray-300 p-2'>price details</h2>
          <div className='p-2 grid grid-cols-[80%_20%]'>
            <div className='flex flex-col gap-y-2'>
              <b>room charge / nights</b>
              <b>cleaning fee</b>
              <b>service fee</b>
              <b>Total amount</b>
            </div>
            <div className='flex flex-col gap-y-2 text-center'>
              <span>{details.price}</span>
              <span>250</span>
              <span>400</span>
              <span className='border-y-2'>{650+details.roomRate}</span>
            </div>
          </div>
          <p className='py-3 border-t border-t-gray-300 text-gray-400 text-sm'><b className='text-base text-red-500'>Cancellation Policy:</b> Free cancellation up to 48 hours before check-in after that 50% of the first night will be charged, non-refundable cannot be charged or refunded.</p>
        </div>


      </section>
      <h1 className='text-xl md:text-2xl text-amber-500 capitalize p-2'>you may also like this</h1>
      <section className='p-2 lg:p-3 grid grid-flow-col auto-cols-[calc(100%-10%)] md:auto-cols-[calc(100%-50%)]  lg:grid-cols-4 lg:overflow-hidden gap-x-2 overflow-y-auto'>
        {
          rooms.slice(2, 6).map(room => (
            <Room data={room} key={room.id} />
          ))
        }
      </section>
      <Footer />
    </>
  )
}

export default RoomDetailPage