

function Gallery() {
    const galleryimgs = ['/canteen.jpg', '/lobby.jpg', '/exterior.jpg', '/wc.jpg']
    return (
        <div id='gallery'>
            <h1 className='text-center text-xl md:text-2xl font-bold text-amber-500 py-2'>Our Gallery</h1>
            <section className='grid grid-cols-2 gap-2 lg:p-4'>
                {
                    galleryimgs.map((image, id) => (
                        <img key={id} src={image} alt="poster" />
                    ))
                }
            </section>
        </div>
    )
}

export default Gallery