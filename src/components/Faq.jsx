import React, { useState } from 'react'

const Faq = () => {
    const [selected,setSelected] = useState(null)
    const handleSelected=(id)=>{
        if(selected==id){
            setSelected(null)
        }else{
            setSelected(id)
        }

    }
    return (
        <div>
            <h1 className=' text-xl md:text-2xl font-bold text-amber-500 p-2'>FAQ</h1>
            <section className='w-full sm:w-[600px]'>
                {
                    qna.map((item, id) => (
                        <div key={id} className='mb-[1px] p-1'>
                            <div className='flex justify-between items-center bg-amber-500 p-2 cursor-pointer' onClick={()=>handleSelected(id)}>
                                <h2>Q{id+1}-{item.question}</h2>
                                <span className='text-lg'>{selected==id?"-":"+"}</span>
                            </div>
                            <p className={selected==id?'my-3 p-4 text-amber-800':"hidden"}>{item.answer}</p>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Faq
const qna = [
    {
        "question": "check-in aur check-out ka time kya hai ?",
        "answer": "check-in 12:00pm se and check-out 12:00am tak hai."
    }, {
        "question": "kya main apni booking cancale kar sakta hu ?",
        "answer": "haan, cancellation policy ke according booking cancle ho sakti hai."
    }, {
        "question": "kya rooms mai free wi-fi available hai ?",
        "answer": "haan, sabi rooms and areas mai complimentary wi-fi available hai."
    }, {
        "question": "kya breakfast booking main included hai ?",
        "answer": "seleted room plan mai breakfast included hai . booking ke time details check kar sakte hai."
    }, {
        "question": "ek room mai maximum kitne quests stay kar sakte hai ?",
        "answer": "har room ki capicity alag hai .check your room details"
    }, {
        "question": "kya hotel mein parking available hai ?",
        "answer": "yes , parking available hai."
    }, {
        "question": "booking hone ke baad kya milega ?",
        "answer": "booking hone ke baad confirmation details and booking id show ki jayegi."
    }
]