import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero'
import Facilities from '../components/Facilities'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero h1="About Nightstay" p="comfortable stay and a Place where you can truly relax" image={'/exterior.jpg'}/>
      <div className='p-2'>
        <h1 className='capitalize text-xl md:text-2xl text-amber-500 text-center'>Our story</h1>
        <p className='p-3'>
          Nightstay was created with a simple idea - to make every stay comfortable, peaceful and memoriable. wheather you're traveling for work, a family trip or a weekend getaway, we provide thoughtfully designed rooms and reliable service.
        </p>
      </div>
      <div>
        <h1 className='capitalize text-xl md:text-2xl text-amber-500 text-center p-2'>Why choose Nightstay</h1>
        <section className=' sm:w-[70%] grid grid-cols-2 place-items-center gap-3 p-2 mx-auto'>
          <div className='shadow-lg shadow-gray-400 p-2 border border-amber-500 rounded-md w-full h-full text-center'>
            <h1 className='text-amber-500  pb-3'>comfortable Rooms</h1>
            <p>clean, spacious and well-designed rooms.</p>
          </div>

          <div className='shadow-lg shadow-gray-400 p-2 border border-amber-500 rounded-md w-full h-full text-center'>
            <h1 className='text-amber-500  pb-3'>Quality service</h1>
            <p>Friendly and attentive service thoughtout your stay.</p>
          </div>

          <div className='shadow-lg shadow-gray-400 p-2 border border-amber-500 rounded-md w-full h-full text-center'>
            <h1 className='text-amber-500  pb-3'>safe & secure</h1>
            <p>A peaceful and secure environment for every guest.</p>
          </div>

          <div className='shadow-lg shadow-gray-400 p-2 border border-amber-500 rounded-md w-full h-full text-center'>
            <h1 className='text-amber-500  pb-3'>Best value</h1>
            <p>Premium comfort at resonable prices.</p>
          </div>
        </section>
      </div>
      <Facilities />
      <div className='p-2'>
        <h1 className='capitalize text-xl md:text-2xl text-amber-500 text-center p-2'>Our Mission</h1>
        <p className=' p-2 border-l-8 border-l-amber-500 w-fit mx-auto'>"To Make every stay feel like home."</p>
      </div>
      <Footer/>
    </>
  )
}

export default AboutPage