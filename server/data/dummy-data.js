const faker = require('faker');

if(false){
    const FAKER_IMAGES = new Array(8).fill('').map(_ => ({
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(), // faker.lorem.words(2)
        author: faker.internet.userName(),
        description: faker.lorem.sentences(),
        uri: faker.image.image(),
    }));
    console.log(JSON.stringify(FAKER_IMAGES, null, 4));
}

module.exports.IMAGES = [
    {
        "id":"f7127bb7-0e1e-4ff1-8b42-09ff69a41394",
        "title":"Gorgeous Plastic Hat",
        "author":"Kelli81",
        "description":"Ut quia labore et optio. Repellat et quaerat quia perferendis eos asperiores quia. Inventore excepturi sint possimus ut dolorum. Dicta velit harum tempora soluta.",
        "uri":"http://placeimg.com/640/480?random=737"
    },
    {
        "id":"94f06c75-03d2-4b1f-a28c-1364ca0df267",
        "title":"Tasty Metal Computer",
        "author":"Darren.Orn17",
        "description":"Saepe et sequi non repellat et et sint. Est quia incidunt maxime dolorem ut totam et et dolorem. Et repellat corrupti sed delectus doloremque aut nemo. Aut delectus deleniti et aliquam ut sit eum et. Sequi labore non velit totam exercitationem accusantium sint molestiae. Minima repudiandae sint optio ut nisi.",
        "uri":"http://placeimg.com/640/480?random=713"
    },
    {
        "id":"065af437-a4bd-4fc2-8497-d8d706a9b2e1",
        "title":"Tasty Soft Chicken",
        "author":"Erwin.Haley25",
        "description":"Expedita veritatis deleniti. Aut illo sint veniam ipsa quidem. Veniam incidunt alias est. Et omnis consequuntur hic enim. Laboriosam possimus eos fugit reprehenderit est inventore unde.",
        "uri":"http://placeimg.com/640/480?random=274"
    },
    {
        "id":"d9d212ee-9afc-4416-9ed6-692d8efe7b91",
        "title":"Handmade Wooden Towels",
        "author":"Eulalia_Larkin",
        "description":"Expedita ab voluptatem perferendis commodi cupiditate dolorem dolorem blanditiis. Fugiat excepturi nesciunt possimus nulla. Laudantium et quia delectus fugiat quo corporis dolorem.",
        "uri":"http://placeimg.com/640/480?random=889"
    },
    {
        "id":"6bedc5f2-f1de-4a33-94d2-b9d16f702a73",
        "title":"Tasty Plastic Hat",
        "author":"Hans_Rippin35",
        "description":"Magnam explicabo labore officiis et non dolorum vero natus sapiente. Voluptatibus soluta impedit ipsam modi. Eaque nostrum assumenda alias reiciendis harum debitis. Consectetur et sit. Atque ducimus dolor culpa qui ut. Asperiores qui amet.",
        "uri":"http://placeimg.com/640/480?random=486"
    },
    {
        "id":"b366f81b-8b60-4251-a759-ffa7728036e6",
        "title":"Fantastic Frozen Pants",
        "author":"Destiney9",
        "description":"Sint adipisci maiores corrupti similique praesentium nam omnis. Unde veniam nesciunt culpa. Molestiae eos earum occaecati omnis repudiandae blanditiis illum rerum.",
        "uri":"http://placeimg.com/640/480?random=395"
    },
    {
        "id":"1754594a-6e68-4e36-bdd6-4bd37a694d27",
        "title":"Unbranded Metal Car",
        "author":"Kaitlin86",
        "description":"Ut vitae sunt quasi enim. Voluptatem ut harum et eveniet maxime laudantium quia aut. Ut sint sapiente ducimus eum odio. Neque porro temporibus tempora praesentium.",
        "uri":"http://placeimg.com/640/480?random=243"
    },
    {
        "id":"129c0b5f-e04a-4609-bf8b-f3aa6b01e878",
        "title":"Incredible Plastic Table",
        "author":"Jaycee.Mitchell",
        "description":"Exercitationem occaecati et esse laboriosam numquam tenetur aspernatur. Nihil aperiam soluta ducimus quas autem libero deserunt eaque.",
        "uri":"http://placeimg.com/640/480?random=526"
    }
]
