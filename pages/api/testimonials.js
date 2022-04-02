
const testimonials = [
    {
        id: 1,
        name: 'Bertie Yates',
        slug: 'bertie-yates',
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus quis enim id scelerisque."',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
        id: 2,
        name: 'Hester Hogan',
        slug: 'hester-hogan',
        text: '"Fusce ac commodo nisi, a laoreet risus. Ut blandit elit sit amet dui suscipit dictum. Cras aliquet ac tellus vel pellentesque."',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
        id: 3,
        name: 'Larry Little',
        slug: 'larry-little',
        text: '"Nunc convallis condimentum massa sit amet tincidunt. Nam lobortis et nibh at dictum. Integer scelerisque elit vel arcu scelerisque, ut faucibus augue porta."',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
        id: 4,
        name: 'Sean Walsh',
        slug: 'sean-walsh',
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus quis enim id scelerisque."',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
        id: 5,
        name: 'Lola Gardner',
        slug: 'lola-gardner',
        text: '"Phasellus quis elit sollicitudin, facilisis nisi eu, tempor turpis."',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
    {
        id: 6,
        name: 'Rick Hogan',
        slug: 'rick-hogan',
        text: '"Fusce ac commodo nisi, a laoreet risus. Ut blandit elit sit amet dui suscipit dictum. Cras aliquet ac tellus vel pellentesque."',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
]


export default function handler(req, res) {
    res.status(200).json(testimonials)
}