
const rooms = [
    {
        "id": "room1",
        "title": "delux room",
        "image": '/delux.jpg',
        "guests": 2,
        "price": "₹1,999",
        "roomRate": 1999,
        "description": "Relaxin our spacious delux room, throughtfully designed with elegant interior and a comfortable king-size bed. Enjoy a peaceful atmosphere, beautifulview, and a mordern amenities that make your stay relaxing and memorable",
        "rating": 4.8,
        "bed": "1 Queen bed",
        "view": "Garden view",
        "addImages": [
            "/Balcony_city.jpg",
            "/Workspace.png"
        ]
    },
    {
        "id": "room2",
        "title": "standard room",
        "image": '/standard.jpg',
        "guests": 2,
        "price": "₹2,999",
        "roomRate": 2999,
        "description": "Our standard room offers a comfortable and peaceful stay with a cozy queen-size bed, mordern interior, and all the essential amenities your need. perfect for solo travelers and couples looking for a convenitent and affordable stay.",
        "rating": 4.6,
        "bed": "1 King bed",
        "view": "city view",
        "addImages": [
            "/standard.jpg",
            "/wc.jpg"
        ]
        
    },
    {
        "id": "room3",
        "title": "premium room",
        "image": '/premium.jpg',
        "guests": 4,
        "price": "₹3,999",
        "roomRate": 3999,
        "description": "Experience elevated comfort in our premium room, featuring sophisicated interiors, a spacious layout and a relaxing seating area large window offer beautiful scenic view while pemium amenities ensure a comfortable and luxurious stay.",
        "rating": 4.9,
        "bed": "1 King bed",
        "view": "Scenic view",
        "addImages": [
            "/Balcony_night.jpg",
            "/Siting.jpg",
            "/Workspace.png"
        ]
    },
    {
        "id": "room4",
        "title": "family room",
        "image": '/family.jpg',
        "guests": 4,
        "price": "₹4,999",
        "roomRate": 4999,
        "description": "Designed for famillies and groups, our family rooms provides plenty of space to relax and enjoy your stay together with comfortable beds .a spacious living ara, mordern amenities and a peaceful view it's ideal for a memorable family getaway.",
        "rating": 4.9,
        "bed": "1 King bed + 2 singles bed",
        "view": "Garden view",
        "addImages": [
            "/Siting.jpg",
            "/Balcony_city.jpg",
            "/wc.jpg"
        ]
    }, {
        
        "id": "room5",
        "title": "Delux twin room",
        "image": "/Delux_twin.png",
        "guests": 2,
        "price": "₹2,799",
        "roomRate": 2799,
        "description": "Enjoy a comfort and relaxing stay in our delux twin room, freaturing two cozy single beds, elegant interior, and a spacious layout. the room offers peacefull garden view along with morden amenities, making it an ideal choice for friends, collegues or travelers who perfer sepret beds.",
        "rating": 4.7,
        "bed": "2 single bed",
        "view": "Garden view",
        "addImages": [
            "/wc.jpg",
            "/BalconyGarden.jpg",
            "/Workspace.png"
        ]
    }, {
        
        "id": "room6",
        "title": "Executive suite",
        "image": "/Executive_room.png",
        "guests": 2,
        "price": "₹4,299",
        "roomRate": 4299,
        "description": "Experience elevated comfort in our spacious executive suite, designed with a  elegant interior, a comfortable king-sized bed, and a seprate seating ara, large window offer city view.",
        "rating": 4.8,
        "bed": "1 king bed",
        "view": "city & Garden view",
        "addImages": [
            "/Siting.jpg",
            "/BalconyGarden.jpg",
            "/wc.jpg"
        ]
    }
    , {
        
        "id": "room7",
        "title": "Honeymoon suite",
        "image": "/Honeymoon_room.jpg",
        "guests": 2,
        "price": "₹5,499",
        "roomRate": 5499,
        "description": "Experience elevated comfort in our spacious executive suite, designed with a  elegant interior, a comfortable king-sized bed, and a seprate seating ara, large window offer city view.",
        "rating": 4.8,
        "bed": "1 Queen bed",
        "view": "city view",
        "addImages": [
            "/Siting.jpg",
            "/Balcony_night.jpg",
            "/wc.jpg",
        ]
    }
];


export const SingleRoomDetails = (id) => {
    const data = rooms.find(room => room.title == id);
    return data;
}

export const PopularRooms = () => {
    const data = rooms.slice(0, 4);
    return data;
}
export default rooms;