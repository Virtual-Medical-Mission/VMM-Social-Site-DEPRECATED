import { ComplexNavbar } from '../components/navbar'
import { Banner } from '../components/banner'
import backdrop from '../assets/img/backdrop_1.jpg'
// import ThreeCardSplit from '../components/threeCardSplit'
import { Footer } from '../components/footer'
import FourCardSplit from '../components/fourCardSplit'
import { Subscribe } from '../components/subscribe'

export default function OurWorks () {
  return (
    <div className='App font-family:league-spartan dark:bg-back-dark'>
      <div>
        <header className='App-header pt-5 justify-center'>
          <ComplexNavbar />
          <div className='flex items-center justify-center w-full pt-10'>
            <Banner
              title='Our Works'
              caption='Learn how we are making a difference'
              Banner={backdrop}
            />
          </div>
        </header>
        <div className='flex justify-center'>
          <FourCardSplit />
        </div>
        <div className='flex justify-center'>
          <Subscribe />
        </div>
        <div className='flex justify-center'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
