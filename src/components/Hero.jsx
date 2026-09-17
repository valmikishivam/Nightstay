
function Hero({h1,p,image}) {
  
  
  return (
    <div className='w-full h-[400px] lg:h-[540px] flex justify-center items-center flex-col space-y-2 mt-2' style={{background:`linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.2)),url(${image?image:null}) no-repeat center center/cover`,}}>
        <h1 className='capitalize text-md lg:text-4xl font-semibold text-amber-400 text-center'>{h1}</h1>
        <p className='text-white font-semibold text-sm md:text-xl text-center'>{p}</p>
    </div>
  )
}

export default Hero