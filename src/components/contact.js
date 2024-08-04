import {
  CardHeader,
  CardBody,
  Card,
  Input,
  Checkbox,
  Button,
  Typography
} from '@material-tailwind/react'
import React from 'react'
import ComputerOutreach from '../assets/img/vmm_images/image8.jpg';

export function ContactForm () {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handleMessageChange = event => {
    setMessage(event.target.value)
  }

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
          <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96' action='https://docs.google.com/forms/d/e/1FAIpQLSdh0Rq3QRWNwuF58Gd80jgq6NE5pgTiCJU5BagSntb1mHBVtg/formResponse'>
            <div className='mb-1 flex flex-col gap-6'>
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Your Name
              </Typography>
              <Input
                size='lg'
                placeholder='name'
                value={name}
                onChange={handleNameChange}
                name="entry.2005620554"
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
                value={email}
                type='email'
                onChange={handleEmailChange}
                name="entry.1045781291"
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
                value={message}
                onChange={handleMessageChange}
                
                placeholder='Message here'
                name="entry.1166974658"
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900 xxs:w-2/3'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
            </div>

            <Button className='mt-6 xxs:w-2/3' fullWidth type='submit' disabled={!email || !name || !message}>
              Contact Us
            </Button>
          </form>
        </Card>
      </CardBody>
    </Card>
  )
}
