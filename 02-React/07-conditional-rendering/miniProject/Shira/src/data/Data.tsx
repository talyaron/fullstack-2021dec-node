
import { FactProps } from '../features/fact/factModel'

export const facts: FactProps[] = [
  {
    src: "https://executivesupportmagazine.com/wp-content/uploads/2021/02/vector-id487764198.jpg",
    text: "What's my favorite Hobby??",
    id: 'aa',
    answers: {
      false: {
        text: "I like surfing the most",
        id: 'bb',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL55FGMMJLWQh4dglK5nGpjyUaF-ckX2jGQ&usqp=CAU",
      },
      true: {
        text: "I like riding horses the most",
        id: 'cc',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8JnELkB0Oqx8XlfKCswQthvGj4MeIWXckQ&usqp=CAU",
      },
    },
  },
  {
    src: "https://cdn.vox-cdn.com/thumbor/9qN-DmdwZE__GqwuoJIinjUXzmk=/0x0:960x646/1200x900/filters:focal(404x247:556x399)/cdn.vox-cdn.com/uploads/chorus_image/image/63084260/foodlife_2.0.jpg",
    text: "What's my favorite Food??",
    id: 'dd',
    answers: {
      true: {
        text: "I like to eat pizza the most",
        src: "https://media-cdn.tripadvisor.com/media/photo-s/08/b3/38/cf/pizza-milano.jpg",
        id: 'ee',
      },
      false: {
        text: "I like to eat hamburger the most",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzP82DyqCdf0a_APSI8PIWmjjVn7fUZwsxg&usqp=CAU",
        id: 'ff',
      },
    },
  },
  {
    src: "https://cdn.britannica.com/70/191970-050-1EC34EBE/Color-wheel-light-color-spectrum.jpg?q=60",
    text: "What's my favorite Color??",
    id: 'gg',
    answers: {
      false: {
        text: "My favorite color is :",

        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTny2t3gBJCDi8x39Ec84jSFfPTyKgRIy8Gjw&usqp=CAU",
        id: 'hh',
      },
      true: {
        text: "My favorite color is:",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoC8QWhhD1r74aqj4r5cX1IlIYfylVKwsvjA&usqp=CAU",
        id: 'ii',
      },
    },
  },
  {
    src: "https://image.shutterstock.com/image-vector/save-animals-emblem-animal-planet-600w-217280530.jpg",
    text: "What's my favorite Animal??",
    id: 'jj',
    answers: {
      true: {
        text: "My favorite animal is horse ",
        src: "https://hips.hearstapps.com/clv.h-cdn.co/assets/17/16/1492442048-gettyimages-521282782.jpg",
        id: 'kk',
      },
      false: {
        text: "My favorite animal is dog",
        src: "https://petkeen.com/wp-content/uploads/2020/11/siberian-husky_Sbolotova_Shutterstock.jpg",
        id: 'll',
      },
    },
  },
];
