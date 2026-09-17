import React from 'react'

function Reviews() {
    const allReviews = [
        {
            "id": "review1",
            "customer": "rahul sharma",
            "text": "room bahut clean tha and staff kafi helpfull tha.overall stay kafi accha raha."
        },
        {
            "id": "review2",
            "customer": "priya verma",
            "text": "hotel ka ambience amazing hai. room kafi spacious tha aur service bhi excellent thi."
        },
        {
            "id": "review3",
            "customer": "aman singh",
            "text": "location bhaut peaceful tha , room clean tha aur beakfast bhi tasty tha."
        },
        {
            "id": "review4",
            "customer": "neha gupta",
            "text": "family ke sath stay kiya hai and experience bhaut comfortable raha. definitely recommend karugi"
        },
        {
            "id": "review5",
            "customer": "rohit metha",
            "text": "premium room images jaisa tha room serivce fast thi and staff polite hai."
        },
        {
            "id": "review6",
            "customer": "anjali kapoor",
            "text": "beautiful peroperty ,comfortable rooms and peaceful environment.overall great experience."
        },
    ]
    return (
        <div className='pt-3'>
            <h1 className='text-center text-xl md:text-2xl font-bold text-amber-500'>what our customers says</h1>
             <p className='text-center text-amber-600 text-sm md:text-lg'>Experiences from our happy gueast.</p>
            <section className='grid grid-flow-col gap-4 auto-cols-[calc(100%-10%)] sm:auto-cols-[calc(100%-50%)] lg:auto-cols-[calc(100%-60%)] overflow-x-scroll p-3 scrollbar'>
                {
                    allReviews.map(review => (
                        <div key={review.id} className='w-full h-full p-3 shadow-sm shadow-gray-400 rounded-md '>
                            <b className='capitalize'>{review.customer}</b>
                            <p className='p-2 text-gray-500'>"{review.text}"</p>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Reviews