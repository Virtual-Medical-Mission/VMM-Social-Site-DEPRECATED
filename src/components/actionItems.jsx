
import research from "../assets/img/vmm_images/image5_1.png";
import outreach from "../assets/img/vmm_images/image2.jpg";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";

export default function ActionItems () {
  return (
    <div className='flex flex-col'>
      <h1 className='flex justify-center text-3xl p-2 pb-5 font-bold text-font-light dark:text-font-dark xxs:items-center'>
        Our Work
      </h1>
      <div className='flex justify-center w-full'>
        <div className='flex md:flex-row sm:flex-col'>
          <div className='px-24 xxs:py-5 md:py-5 sm:py-5'>
            <CardDefault
              header='Research'
              desc='Virtual Medical Missions all started with a dream that began in 2015, and has grown to become a reality today.'
              dir='/#/works'
              timg={research}
            />
          </div>
          <div className='px-24 xxs:py-5 md:py-5 sm:py-5'>
            <CardDefault
              header='Outreach'
              desc='Starting with Godo, Kenya, we hope to expand our services to other villages in Kenya, and then to the world.'
              dir='/#/works'
              timg={outreach}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CardDefault (props) {
  return (
    <Card className='mt-6 w-96 dark:bg-primary-dark'>
      <CardHeader color='blue-gray' className='h-42'>
        <img src={props.timg} alt='card-image' className='h-42' />
      </CardHeader>
      <CardBody>
        <h1 className='text-2xl font-semibold dark:text-font-dark'>
          {props.header}
        </h1>
        <h1 className='dark:text-font-dark'>{props.desc}</h1>
      </CardBody>
      <CardFooter className='pt-0'>
        <a href={props.dir}>
          <Button color='blue'>Read More</Button>
        </a>
      </CardFooter>
    </Card>
  )
}
