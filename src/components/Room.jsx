import { Link } from 'react-router-dom'

function Room({ data }) {

  return (

    <Link to={`/room/${data.title.replace(" ", "+")}`} className='bg-amber-600 p-[1px] rounded-md w-full' >
      <div className='overflow-hidden'>
        <img src={data.image} alt="poster" className='object-center hover:scale-110 transition-all ease-in-out duration-200' />
      </div>
      <div className='flex flex-col p-2 text-white'>
        <strong className='text-xl text-center line-clamp-1'>{data.title}</strong>
        <span>{data.guests} Guests</span>
        <span>{data.price}/</span>
        <span>★ {data.rating}</span>
      </div>
    </Link>



  )
}
export default Room