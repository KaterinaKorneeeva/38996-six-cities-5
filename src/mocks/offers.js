const PIC_URL = `https://picsum.photos/200/300?random=`;
const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    id: 0,
    rating: `5`,
    isArchive: Boolean(1),
    pictures: [
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
    ],
    isPremium: Boolean(1),
    title: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    price: `60`,
    type: `room`,
    city: `amsterdam`,
    rooms: `4`,
    guests: `3`,
    features: [
      `wifi`,
      `heating`,
      `kitchen`,
      `cableTV`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`
  ],
    host: {
      name: `Simon`,
      status: `Pro`,
      photo: `${AVATAR_URL}/${Math.random()}`,
    },

    reviews: [
      {
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        author:
          {
            name: `Max`,
            photo: `${AVATAR_URL}/${Math.random()}`,
          },
        data: `2020-10-10`,
      },
      {
        text: `We booked at very short notice and Simon was quick to respond which was very helpful a long with details on how to check in. Accommodation is in a very good spot, within walking distance to tourist attractions like London eye etc. Apartment looked bigger in photos but was very cosy and had what we needed, would have loved if there was a tv even for some back ground noise. Over all good experience :)`,
        author:
          {
            name: `Annie`,
            photo: `${AVATAR_URL}/${Math.random()}`,
          },
        data: `2020-10-09`,

      }
    ]


  },
  {
    id: 1,
    rating: `5`,
    isArchive: Boolean(1),
    pictures: [
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
    ],
    isPremium: Boolean(0),
    title: `Beautiful & luxurious apartment at great location`,
    description: `The hostel serves a daily breakfast buffet and a set menu for dinner. There is also a bar in the hostel. There are many supermarkets in the surrounding streets, trendy bars, restaurants and shops in various squares in the Gràcia area, 15 minutes' walk away. The nearest Metro Station is Verdaguer, 500 meters from the hostel.`,
    price: `120`,
    type: `Apartment`,
    city: `amsterdam`,
    rooms: `4`,
    guests: `4`,
    features: [`wifi`, `heating`, `kitchen`, `cableTV`],
    host: {
      name: `Angelina`,
      status: `Pro`,
      photo: `${AVATAR_URL}/${Math.random()}`,
    },

    reviews: [
      {
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        author:
          {
            name: `Max`,
            photo: `${AVATAR_URL}/${Math.random()}`,

            rating: `4`,
          },
        data: `2020-10-10`,

      }
    ]
  },
  {
    id: 2,
    rating: `5`,
    isArchive: Boolean(0),
    pictures: [
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
    ],
    isPremium:  Boolean(1),
    title: `Nice, cozy, warm big bed apartment`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    price: `180`,
    type: `house`,
    city: `amsterdam`,
    rooms: `4`,
    guests: `4`,
    features: [
      `wifi`,
      `heating`,
      `kitchen`,
      `cableTV`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`
  ],
    host: {
      name: `Angelina`,
      status: `Pro`,
      photo: `${AVATAR_URL}/${Math.random()}`,
    },

    reviews: [
      {
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        author:
          {
            name: `Max`,
            photo: `${AVATAR_URL}/${Math.random()}`,

            rating: `4`,
          },
        data: `2020-10-10`,

      }
    ]
  },
  {
    id: 3,
    rating: `5`,
    isArchive: Boolean(1),
    pictures: [
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
      `${PIC_URL}${Math.random()}`,
    ],
    isPremium: Boolean(0),
    title: `Nice, cozy, warm big bed apartment`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    price: `180`,
    type: `hotel`,
    city: `amsterdam`,
    rooms: `4`,
    guests: `4`,
    features: [`wifi`, `heating`, `kitchen`, `cableTV`],
    host: {
      name: `Angelina`,
      status: `Pro`,
      photo: `${AVATAR_URL}/${Math.random()}`,
    },

    reviews: [
      {
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        author:
          {
            name: `Max`,
            photo: `${AVATAR_URL}/${Math.random()}`,

            rating: `4`,
          },
        data: `April 2019`,

      }
    ]
  }
];