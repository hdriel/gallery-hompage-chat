const faker = require('faker');

if(true){
    const FAKER_IMAGES = new Array(8).fill('').map(_ => ({
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(), // faker.lorem.words(2)
        author: faker.internet.userName(),
        description: faker.lorem.sentences(),
        uri: faker.image.image(),
        metadata: {
            resolution: faker.random.float(),
            weight: faker.random.float(),
            width: faker.random.number(),
            height: faker.random.number(),
            location: `{ lat: ${faker.address.latitude()}, lng: ${faker.address.longitude()} }`,
            type: faker.datatype.number(),
            tags: new Array(faker.random.number(7)).fill('').map(i => faker.lorem.word()),
        }
    }));
    console.log(JSON.stringify(FAKER_IMAGES, null, 4));
}

module.exports.IMAGES = [
    {
        "id": "fee2e70a-4fe1-430a-8347-f8259a01477f",
        "title": "Small Concrete Cheese",
        "author": "Layne.Mueller",
        "description": "Qui cum repudiandae itaque nisi voluptatem repellendus. Quo aperiam eos quasi et sequi fugit. Cumque vel officia iure incidunt.",
        "uri": "http://placeimg.com/640/480/nightlife",
        "metadata": {
            "resolution": 17169.44,
            "weight": 19940.32,
            "width": 48881,
            "height": 99264,
            "location": "{ lat: -65.5997, lng: 98.1393 }",
            "type": 54482,
            "tags": []
        }
    },
    {
        "id": "9ca11514-6bc2-40f6-b866-cdd435a8d51a",
        "title": "Handcrafted Granite Chair",
        "author": "Tomasa55",
        "description": "Autem vel et magnam architecto dolore sunt qui culpa. Molestias quod qui et molestiae necessitatibus iste voluptas et sit. Aut alias deserunt debitis inventore corporis autem quis qui. Omnis similique labore.",
        "uri": "http://placeimg.com/640/480/business",
        "metadata": {
            "resolution": 56293.24,
            "weight": 38806.4,
            "width": 10050,
            "height": 45096,
            "location": "{ lat: 50.0317, lng: -110.2811 }",
            "type": 45707,
            "tags": [
                "iure",
                "vel",
                "dolore",
                "inventore",
                "delectus"
            ]
        }
    },
    {
        "id": "cccf227a-4b44-4a3b-b23e-168e92accbd3",
        "title": "Rustic Rubber Towels",
        "author": "Arjun_Parisian",
        "description": "Adipisci mollitia amet harum quia officiis harum. Distinctio perspiciatis doloribus optio tenetur. Voluptatem est possimus consequatur.",
        "uri": "http://placeimg.com/640/480/people",
        "metadata": {
            "resolution": 60658.37,
            "weight": 46314.43,
            "width": 26090,
            "height": 81052,
            "location": "{ lat: -79.5905, lng: -81.8843 }",
            "type": 36850,
            "tags": [
                "libero",
                "aliquid",
                "asperiores",
                "minima",
                "delectus",
                "at"
            ]
        }
    },
    {
        "id": "65c0cb47-6854-465b-ad7b-94a1b861a7dd",
        "title": "Ergonomic Rubber Cheese",
        "author": "Jettie_Crist",
        "description": "Incidunt vero voluptatum voluptate excepturi iste harum ratione unde magni. Vero quo perferendis consequatur enim consequatur. Iste enim harum suscipit at necessitatibus cum quam. Voluptatibus magnam quaerat consequatur quo minus iste. Id illo inventore qui qui est. Voluptatem repudiandae commodi ea eum sapiente.",
        "uri": "http://placeimg.com/640/480/transport",
        "metadata": {
            "resolution": 7690.6,
            "weight": 10034.37,
            "width": 36243,
            "height": 83342,
            "location": "{ lat: 20.9880, lng: 37.6173 }",
            "type": 10932,
            "tags": [
                "commodi",
                "dolorem",
                "et",
                "facere",
                "non",
                "earum",
                "et"
            ]
        }
    },
    {
        "id": "59985708-8323-416e-9414-d6d0f83fe27e",
        "title": "Licensed Concrete Ball",
        "author": "Wilhelm.Sipes",
        "description": "Maiores dolorem aliquam consequatur animi suscipit odit numquam. Mollitia id est alias et animi fugit amet. Eos iusto consequatur non. Quaerat dolorum incidunt sed in numquam velit natus. Dignissimos dolorem fugiat.",
        "uri": "http://placeimg.com/640/480/technics",
        "metadata": {
            "resolution": 93788.41,
            "weight": 80487.24,
            "width": 95261,
            "height": 89554,
            "location": "{ lat: -36.7072, lng: 102.6605 }",
            "type": 24980,
            "tags": [
                "fuga",
                "libero",
                "libero",
                "non",
                "quia",
                "eos",
                "cum"
            ]
        }
    },
    {
        "id": "c77769e1-4482-44fb-8147-81b6dfcd0a0a",
        "title": "Ergonomic Plastic Car",
        "author": "Axel.Schimmel",
        "description": "Corporis voluptas et accusantium ad. Sit ut ipsum.",
        "uri": "http://placeimg.com/640/480/food",
        "metadata": {
            "resolution": 78689.85,
            "weight": 32533.11,
            "width": 75181,
            "height": 79808,
            "location": "{ lat: -9.5676, lng: 120.4312 }",
            "type": 59747,
            "tags": [
                "quod",
                "sed",
                "dolor",
                "at",
                "aut",
                "necessitatibus"
            ]
        }
    },
    {
        "id": "3104ba9b-d023-4d46-872c-640d3ba58042",
        "title": "Intelligent Fresh Car",
        "author": "Waldo_Barrows",
        "description": "Quia modi qui nam ducimus perspiciatis dolore aperiam perspiciatis saepe. Saepe minima magni quis distinctio illum ut molestiae.",
        "uri": "http://placeimg.com/640/480/food",
        "metadata": {
            "resolution": 57633.03,
            "weight": 69856.06,
            "width": 85719,
            "height": 90105,
            "location": "{ lat: -6.6448, lng: 59.3837 }",
            "type": 25574,
            "tags": [
                "et",
                "corrupti",
                "non",
                "aut",
                "est",
                "consequuntur"
            ]
        }
    },
    {
        "id": "e19d5937-2403-43a0-9a46-4890350c724b",
        "title": "Handcrafted Soft Gloves",
        "author": "Iva.Wunsch54",
        "description": "Rem deleniti et qui enim. Tempora non dolorum sapiente nobis facere consequatur laudantium dolor corrupti. A nisi sunt maxime a error quibusdam labore ipsam.",
        "uri": "http://placeimg.com/640/480/business",
        "metadata": {
            "resolution": 20728.97,
            "weight": 89323.78,
            "width": 46924,
            "height": 18148,
            "location": "{ lat: 13.1056, lng: -19.6354 }",
            "type": 24645,
            "tags": [
                "nostrum",
                "dicta",
                "atque",
                "ipsam",
                "vel",
                "sed",
                "deleniti"
            ]
        }
    }
]
