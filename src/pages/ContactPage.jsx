import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import Faq from '../components/Faq.jsx'
 const ContactPage = () => {
  return (
    <>
  <Navbar/>
  <Hero h1="Get In Touch" p="We're here to solve your booking related questions."/>

  <h1 className='capitalize text-xl md:text-2xl text-amber-500 text-center p-2'>Talk us</h1>
  <form className='w-full p-2 max-w-[670px] mx-auto flex flex-col gap-2 justify-between shadow-md shadow-amber-500 rounded-md'>
    <input type="text" placeholder='Your Name' className='p-2 rounded-md border-2 border-amber-500 outline-none'/>
    <input type="text" placeholder='Your Address' className='p-2 rounded-md border-2 border-amber-500 outline-none'/>
    <input type="text" placeholder='Your Number' className='p-2 rounded-md border-2 border-amber-500 outline-none'/>
    <input type="text" placeholder='Subject' className='p-2 rounded-md border-2 border-amber-500 outline-none'/>
    <textarea placeholder='Your message' className='p-2 rounded-md border-2 border-amber-500 outline-none'></textarea>
    <button className=' bg-amber-500  p-2 rounded-md text-white'>sumit</button>
  </form>
  <div className='p-2 space-y-3'>
  <h1 className='capitalize text-xl md:text-2xl text-amber-500 p-2'>Details</h1>
    <div><b>Address:</b> dreamland , street-101 , hopecity-1100xx</div>
    <div><b>Email:</b>hello@nightstay.com</div>
    <div><b>Phone:</b>+91 91020 xx12xx</div>
    <div><b>Reception:</b>24/7 available</div>
  </div>
  <Faq/>
  <Footer/>
    </>
  )
}
export default ContactPage;