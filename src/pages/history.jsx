import { ComplexNavbar } from '../components/navbar'
import { Banner } from '../components/banner'
import backdrop from '../assets/img/backdrop_1.jpg'
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography
} from '@material-tailwind/react'
import { Footer } from '../components/footer'
import { Subscribe } from '../components/subscribe'
export default function HistoryPage () {
  return (
    <div className='App font-family:league-spartan dark:bg-back-dark'>
      <div>
        <header className='App-header pt-5 justify-center'>
          <ComplexNavbar />
          <div className='flex items-center justify-center w-full pt-10'>
            <Banner
              title='Our History'
              caption='🕊 Legacy of Healing'
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
      <div className='flex justify-center'>
        <DefaultTimeline />
      </div>
      <div className='flex justify-center'>
        <Subscribe />
      </div>  
      <Footer />
    </div>
  )
}

export function DefaultTimeline () {
  const timelineData = [
    'For a long time, there was no way to begin tackling the stark medical inequality the world experiences.',
    'Short-term medical missions help some, but provide no follow-up opportunities and established patient relationships, and often don’t take into account cultural differences, community needs, and partnerships with local leaders.',
    'When the COVID-19 pandemic hit, Tiffany began seeing her patients in Riverside, CA, over telehealth. Telehealth allowed Tiffany to continue supporting her patients, without being in-person. She found she was able to continue to provide quality healthcare without being physically present with her patients.',
    'The gears began turning in her mind regarding her dream that began many years prior. The new telemedicine software that began during the pandemic could be used to treat patients not only in California, but all over the world.',
    'Tiffany had never started a non-profit, and wasn’t sure where to begin, or perhaps more importantly, when. The passion and vision were set, but it wasn’t until a valued member of her church came up to her one Sunday, and surprised her with having not only opened and registered the non-profit, but had donated to it. “Today,” he said. “Today is the day you begin.”',
    'Since then, our first clinic has begun operation in Godo, Kenya, as we partner with another non-profit that has built a primary school and church there prior to our clinic opening. By partnering with local community leaders in Godo, a small village inside the Kenyan border with Tanzania, we are able to see patients and increase their quality of life, with quality healthcare.',
    'Starting with Godo, Kenya, we hope to expand our services to other villages in Kenya, and then to the world.'
  ]

  return (
    <div className='w-[32rem] py-5'>
      <Timeline>
        {timelineData.map((item, index) => (
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className='h-3'>
              <TimelineIcon />
              {/* <Typography
                variant='h6'
                color='blue-gray'
                className='leading-none'
              >
                Timeline Title Here.
              </Typography> */}
            </TimelineHeader>
            <TimelineBody className='pb-8'>
              <p key={index} className='dark:text-font-dark text-font-light'>
                {item}
              </p>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
