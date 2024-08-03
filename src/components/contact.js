import {
  CardHeader,
  CardBody,
  Card,
  Input,
  Checkbox,
  Button,
  Typography
} from '@material-tailwind/react'

import ComputerOutreach from "../assets/img/vmm_images/image6.png";

export function ContactForm () {
  return (
    <Card className='w-full max-w-[48rem] flex-row xxs:flex-col xxs:w-3/4'>
      <CardHeader
        shadow={false}
        floated={false}
        className='m-0 w-2/5 shrink-0 rounded-r-none xxs:w-full'
      >
        <img
          src={ComputerOutreach}
          alt='card-image'
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody>
        <Card color='transparent' shadow={false}>
          <Typography variant='h4' color='blue-gray'>
            Contact Us
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Nice to meet you! Feel free to reach out to us
          </Typography>
          <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-1 flex flex-col gap-6'>
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Your Name
              </Typography>
              <Input
                size='lg'
                placeholder='name@mail.com'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900 xxs:w-2/3'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Your Email
              </Typography>
              <Input
                size='lg'
                placeholder='name@mail.com'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900 xxs:w-2/3'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Message
              </Typography>
              <Input
                type='text'
                size='lg'
                placeholder='Message here'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900 xxs:w-2/3'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant='small'
                  color='gray'
                  className='flex items-center font-normal'
                >
                  Subscribe to our newsletter
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
            <Button className='mt-6 xxs:w-2/3' fullWidth>
              Contact Us
            </Button>

          </form>
        </Card>
      </CardBody>
    </Card>
  )
}
