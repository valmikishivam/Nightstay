import facilities from '../facilities.js'

const Facilities = () => {
  return (
    <div id='facilities'>
        <h1 className='text-center  text-xl md:text-2xl font-bold text-amber-500 py-2'>Our Facilities</h1>
        <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 lg:p-4'>
          {
            facilities.map(facs=>(
              <div className=' capitalize flex  flex-col md:flex-row items-center shadow-md shadow-gray-400 p-2 rounded-md border' key={facs.id}>
              <img src={facs.icon} alt="icon" className='w-20 h-20 rounded-full'/>
              <h2 className='text-center w-full text-amber-600'>{facs.title}</h2>
              </div>
            ))
          }
        </section>
   </div>
  )
}

export default Facilities