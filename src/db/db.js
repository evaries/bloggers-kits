
import { v4 as uuidv4 } from 'uuid';
import ptushkin from '../db/img/ptushkin.png'
import pilot from '../db/img/pilot.png'
import freemax from '../db/img/freemax.png'
import maleev from '../db/img/maleev.png'
import lyapota from '../db/img/lyapota.png'
import sabatovsky from '../db/img/sabatovsky.png'

export const bloggers = [
  {
    id: uuidv4(),
    img: ptushkin,
    title: 'Anton Ptushkin',
    youtubeLink: 'https://www.youtube.com/watch?v=8jJgNdi-u5k',
    text: 'Ex presenter of Reshka TV program. Now he is a travel blogger, who do all production process by himself.'
  },
  {
    id: uuidv4(),
    img: pilot,
    title: 'PilotZX6R',
    youtubeLink: 'https://www.youtube.com/watch?v=PGB-0EfPedg',
    text: 'The most popular motoblogger in RU-net. If you need record your movement, check it out.'
  },
  {
    id: uuidv4(),
    img: freemax,
    title: 'Freemax',
    youtubeLink: 'https://www.youtube.com/watch?v=lzvEKMp54i8',
    text: 'Popular photographer and videomaker. Has a lot of stuff for different kind of shooting.'
  },
  {
    id: uuidv4(),
    img: maleev,
    title: 'Dima Maleev',
    youtubeLink: 'https://www.youtube.com/watch?v=RfuSS89UWZ4',
    text: 'IT-blogger, which is located in US. Create a simple vlog about living and working in US. '
  },
  {
    id: uuidv4(),
    img: lyapota,
    title: 'Oleksandr Lyapota',
    youtubeLink: 'https://youtu.be/oRqCWVh02eY',
    text: 'Cyclist and blogger. Filming traveling and daily vlog. Also has a Tech blog'
  },
  {
    id: uuidv4(),
    img: sabatovsky,
    title: 'Vlad Sabatovsky',
    youtubeLink: 'https://www.youtube.com/watch?v=bv7Uy9OdweU',
    text: 'Expert in filming. Co-owner video production studio. Give a lot of advices how to make a movie'
  }
]