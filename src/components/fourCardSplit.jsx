import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
  CardFooter,
  Button
} from '@material-tailwind/react'

export default function FourCardSplit () {
  return (
    <div className='flex justify-center'>
      <div className='flex-row justify-center w-3/4'>
        <div className='flex justify-between space-x-4'>
          <div className='mt-6 w-1/2'>
            <Card className='dark:bg-primary-dark'>
              <CardBody>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='text-2xl font-semibold dark:text-font-dark'
                >
                  Research
                </Typography>
                <Typography className='dark:text-font-dark'>
                  We currently have team members conducting research to create
                  our own portable lab. This lab would be shippable, track
                  important vitals, and automatically upload the results to our
                  patient medical record system. Godo, Kenya, is a small village
                  roughly 4 hours from Mombasa. Our clinic is set up in a spare
                  room at the primary school and church built by a non-profit we
                  partner with.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className='mt-6 w-1/2 h-full'>
            <Card className='dark:bg-primary-dark'>
              <CardBody>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='text-2xl font-semibold dark:text-font-dark'
                >
                  Outreach
                </Typography>
                <Typography className='dark:text-font-dark'>
                  We work with two pastors, a local physician primarily based in
                  Mombasa, and our partners to serve the children of the school
                  and teachers first, followed by members of the village at
                  large. Many of the residents of this village do not have the
                  finances to pay for even basic labs, much less transportation
                  to large city hospitals, making our services even more crucial
                  to provide.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className='flex space-x-4'>
          <div className='w-1/3'>
            <Card className='mt-6 dark:bg-primary-dark'>
              <CardBody>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='text-2xl font-semibold dark:text-font-dark'
                >
                  Short-term
                </Typography>
                <Typography className='dark:text-font-dark'>
                  <ul>
                    <li>
                      Continue to increase the number of patients we see in
                      Godo, Kenya
                    </li>
                    <li>
                      Increase the number of labs we can provide, both
                      financially and technically
                    </li>
                    <li>Create a small, on-site pharmacy</li>
                  </ul>
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className='w-2/3'>
            <Card className='mt-6 dark:bg-primary-dark'>
              <CardBody>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='text-2xl font-semibold dark:text-font-dark'
                >
                  Long-term
                </Typography>
                <Typography className='dark:text-font-dark'>
                  <ul>
                    <li>
                      Create “VMM Clinic Boxes.” These “VMM Clinic Boxes” would
                      be shippable, and include everything global communities
                      need to set up their own on-site clinic.
                    </li>
                    <li>
                      Examples: Solar panels, wifi routers, laptops, basic
                      medical equipment including portable labs, and complete
                      instructions
                    </li>
                    <li>
                      We will research viable spots to set up clinics, form
                      strong relationships with local community leaders, and
                      help them set up their own VMM clinic, so that our doctors
                      can begin work in new communities with efficiency and
                      quality.
                    </li>
                  </ul>
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
