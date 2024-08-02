import React from 'react'
import { Input, Button } from '@material-tailwind/react'

export function Subscribe () {
  const [email, setEmail] = React.useState('')
  const onChange = ({ target }) => setEmail(target.value)

  return (
    <div className='w-1/2 flex flex-col items-center pt-5'>
      <Title />
      <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfUcEfVh4e2ABzOmTcK-zSQ9ZJklXRK76sKJ4Tfarwx1eE9Rg/formResponse'>
        <div className='relative flex w-full max-w-[24rem] '>
          <Input
            type='email'
            label='Email Address'
            value={email}
            onChange={onChange}
            name='entry.1985879073'
            className='pr-52 '
            containerProps={{
              className: 'min-w-0'
            }}
          />
          <Button
            size='sm'
            color={email ? 'blue' : 'blue-gray'}
            disabled={!email}
            className='!absolute right-1 top-1 rounded'
            type='submit'
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  )
}

function Title () {
  return (
    <div>
      <h1 className='flex justify-center text-3xl p-2 font-bold text-font-light dark:text-font-dark xxs:items-center'>
        Subscribe to our newsletter
      </h1>
      <div className='dark:text-font-dark text-font-light flex justify-center p-10 text-center'>
        <p>
          Our monthly send-out will update you on our work in Godo. We’ll share
          stories of patient recoveries and needs, inform you of what VMM is
          accomplishing, let you in on our future plans, and keep you in the
          loop of how your support is helping serve those in Kenya. Join the VMM
          mission and subscribe today!
        </p>
      </div>
    </div>
  )
}
