import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
  CardFooter,
  Button
} from '@material-tailwind/react'

export default function ThreeCardSplit () {
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
                  Mission{' '}
                </Typography>
                <Typography className='dark:text-font-dark'>
                  Our mission is to improve healthcare access and outcomes for
                  underdeveloped countries by providing affordable high-quality
                  telemedicine services.
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
                  Vision
                </Typography>
                <Typography className='dark:text-font-dark'>
                  To see VMM clinics set up around the world, where doctors
                  based in the US can provide healthcare to rural communities
                  using telehealth.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
        <div>
          <Card className='mt-6 dark:bg-primary-dark'>
            <CardBody>
              <Typography
                variant='h5'
                color='blue-gray'
                className='text-2xl font-semibold dark:text-font-dark'
              >
                Donate
              </Typography>
              <Typography className='dark:text-font-dark'>
                Donations are essential in helping us accomplish our mission.
                With the financial support of others, we are able to provide
                medical care in three crucial ways:
              </Typography>
              <div className='grid grid-cols-3 gap-4'>
                <div>
                  <Card className='dark:bg-primary-dark'>
                    <CardBody>
                      <Typography
                        variant='h5'
                        color='blue-gray'
                        className='text-2xl font-semibold dark:text-font-dark'
                      >
                        Equipment
                      </Typography>
                      <Typography className='dark:text-font-dark'>
                        Help us purchase equipment such as:
                        <ul>
                          <li>&nbsp;Solar panels</li>
                          <li>&nbsp;Batteries</li>
                          <li>&nbsp;Medical devices</li>
                          <li>&emsp;Thermometers</li>
                          <li>&emsp;Blood Pressure Monitors</li>
                        </ul>
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card className='dark:bg-primary-dark'>
                    <CardBody>
                      <Typography
                        variant='h5'
                        color='blue-gray'
                        className='text-2xl font-semibold dark:text-font-dark'
                      >
                        Diagnostic Tests
                      </Typography>
                      <Typography className='dark:text-font-dark'>
                        Labs are vital for diagnosing patients. You can donate
                        and help us provide labs for hematology, biochemistry,
                        serology/immunology, antenatal tests, and more. Labs are
                        surprisingly cheap in Kenya. You can get complete blood
                        tests for as little as 5 USD! Your donation can help pay
                        for labs, in full, for patients who need it.
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card className='dark:bg-primary-dark'>
                    <CardBody>
                      <Typography
                        variant='h5'
                        color='blue-gray'
                        className='text-2xl font-semibold dark:text-font-dark'
                      >
                        Medicines
                      </Typography>
                      <Typography className='dark:text-font-dark'>
                        Quality medicine is hard to come by in Kenya. There is
                        often counterfeit medicine that does more harm than
                        good. Your donation can help us purchase safe, effective
                        medicine from trusted pharmacies in larger Kenyan
                        cities.
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
            <CardFooter className='pt-0'>
              <a href='http://vmmhealthcare.org/donate' target='_blank'>
                <Button variant="filled">Donate Now</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

{
  /* <Card className='mt-6'>
<CardBody>
  <Typography variant='h5' color='blue-gray' className='mb-2'>
    UI/UX Review Check
  </Typography>
  <Typography>
    The place is close to Barceloneta Beach and bus stop just 2
    min by walk and near to &quot;Naviglio&quot; where you can
    enjoy the main night life in Barcelona.
  </Typography>
</CardBody>
</Card> */
}
