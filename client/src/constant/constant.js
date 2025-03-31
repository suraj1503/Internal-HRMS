const ALL_EVENT = [
    {
        id: "e1",
        eventName: "Plant a Tree!",
        description: "Join our 'Plant a Tree' event to grow a greener future! Help us plant trees for cleaner air, healthier ecosystems, and a sustainable planet. Every tree counts—let’s make a difference together! 🌱🌳",
        creator: "c2",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSiq5QG6wi8nna1E9rTamMzGvLKab_ebOnA&s',
        userEntry: [
            {
                name: "c3",
                entries: [
                    {
                        image: 'https://images.pexels.com/photos/19376425/pexels-photo-19376425/free-photo-of-two-people-sitting-beside-a-small-shop-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                        caption: 'Feeling good like I should!!',
                        like:0
                    },
                    {
                        image: 'https://images.pexels.com/photos/30429390/pexels-photo-30429390/free-photo-of-close-up-of-tree-bark-with-textured-pattern.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                        caption: 'Nature is beautiful!',
                        like:0
                    },
                    {
                        image: 'https://images.pexels.com/photos/30375728/pexels-photo-30375728/free-photo-of-elegant-black-and-white-wedding-portrait.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
                        caption: 'What an event magical!',
                        like:0
                    },
                    {
                        image: 'https://images.pexels.com/photos/30429390/pexels-photo-30429390/free-photo-of-close-up-of-tree-bark-with-textured-pattern.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                        caption: 'Really enjoyed the event',
                        like:0
                    },
                    {
                        image: 'https://images.pexels.com/photos/30429390/pexels-photo-30429390/free-photo-of-close-up-of-tree-bark-with-textured-pattern.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                        caption: 'Absolute Peace',
                        like:0
                    }
                ]
            },
            {
                name: "c1",
                entries: [
                    {
                        image: 'https://images.pexels.com/photos/28074745/pexels-photo-28074745/free-photo-of-two-tall-buildings-with-red-and-yellow-stripes.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
                        caption: 'What an event such as blessing!!',
                        like:0
                    }
                ]
            }
        ]
    },
    {
        id: "e2",
        eventName: "Holi-Festi of Colors!",
        description: "Let's all celebrate on this colorful festive season. Join us on Parking 23A",
        img: 'https://c.files.bbci.co.uk/2E51/production/_128875811_holiepa.jpg',
        creator: "c1",
        userEntry: [
            {
                name: "c3",
                entries: [
                    {
                        image: 'https://images.pexels.com/photos/19376425/pexels-photo-19376425/free-photo-of-two-people-sitting-beside-a-small-shop-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                        caption: 'Feeling good like I feel so great!!',
                        like:0
                    }
                ]
            }
        ]
    },
    {
        id: "e3",
        eventName: "Its the Nations Day!",
        description: "Let's all celebrate on this Independence Day",
        img: 'https://imgs.search.brave.com/RhqSWC1HM5J7mBatezXSI2tiRO-NBIFPXB9S8-vg630/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMTMvMjE3NDEz/LTEzOC0xMUQxRDEy/RC9JbmRpYS1JbmRl/cGVuZGVuY2UtRGF5/LmpwZz93PTgwMCZo/PTQ1MCZjPWNyb3A',
        creator: "c2",
        userEntry: []
    }
];

const USERS = [
    {
        id: 'c1',
        name: 'Suraj Pal',
        username: 'suraj_pal',
        password: 'employee',
        designation: 'President',
        events: ['e2']
    },
    {
        id: 'c2',
        name: 'Aman Rajbhar',
        username: 'aman_rajbhar',
        password: 'employee',
        designation: 'Vice President',
        events: ['e1', 'e3']
    },
    {
        id: 'c3',
        name: 'Kwinal Dave',
        username: 'kwinal_dave',
        password: 'employee',
        designation: 'Employee',
        events: []
    }
]


const uploadedImages = [
    'https://images.pexels.com/photos/19376425/pexels-photo-19376425/free-photo-of-two-people-sitting-beside-a-small-shop-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/30429390/pexels-photo-30429390/free-photo-of-close-up-of-tree-bark-with-textured-pattern.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/30375728/pexels-photo-30375728/free-photo-of-elegant-black-and-white-wedding-portrait.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30437090/pexels-photo-30437090/free-photo-of-historic-drugstore-in-strasbourg-s-old-town.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30315287/pexels-photo-30315287/free-photo-of-vintage-leather-shoes-on-lisbon-cobblestone.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30469700/pexels-photo-30469700/free-photo-of-gourmet-plated-fine-dining-experience.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/29065466/pexels-photo-29065466/free-photo-of-hand-using-laptop-next-to-dslr-camera.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/29434679/pexels-photo-29434679/free-photo-of-modern-desk-with-lamp-and-instant-camera.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30669128/pexels-photo-30669128/free-photo-of-colorful-natural-river-rocks-collection.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30683994/pexels-photo-30683994/free-photo-of-serene-marshland-in-moody-autumn-landscape.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/29295595/pexels-photo-29295595/free-photo-of-stylish-necktie-fashion-in-natural-light.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30684369/pexels-photo-30684369/free-photo-of-historic-church-tower-in-shrewsbury-england.png?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30564666/pexels-photo-30564666/free-photo-of-woman-posing-in-modern-architectural-structure.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/28074745/pexels-photo-28074745/free-photo-of-two-tall-buildings-with-red-and-yellow-stripes.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30413960/pexels-photo-30413960/free-photo-of-charming-blue-alley-in-chefchaouen-morocco.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30133114/pexels-photo-30133114/free-photo-of-portrait-of-elderly-nomad-in-mhamid-desert-morocco.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30415006/pexels-photo-30415006/free-photo-of-traditional-vietnamese-couple-in-ao-dai-in-h-i-an.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/30362159/pexels-photo-30362159/free-photo-of-elegant-woman-posing-in-marrakesh-courtyard.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
];

export {
    ALL_EVENT,
    USERS,
}