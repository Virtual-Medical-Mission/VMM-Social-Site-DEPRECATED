import React from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton
} from '@material-tailwind/react'
import {
  QuestionMarkCircleIcon,
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Bars2Icon,
  HomeIcon
} from '@heroicons/react/24/solid'

import logo1 from '../assets/logo_tr.png'
import DarkModeButton from './darkModeSwitch'
import logoW from '../assets/logo_woBg_white.png'
import { Link } from 'react-router-dom'
// nav list menu
const navListMenuItems = [
  {
    title: 'Our Works',
    description:
      'Starting with Godo, Kenya, we hope to expand our services to other villages in Kenya, and then to the world.',
    link: '/works'
  },
  {
    title: 'Our History',
    description:
      'Virtual Medical Missions all started with a dream that began in 2015, and has grown to become a reality today. ',
    link: '/history'
  }
]

function NavListMenu () {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const renderItems = navListMenuItems.map(({ title, description, link }) => (
    <Link to={link}>
      <MenuItem className=''>
        <h1 className='mb-1 font-semibold dark:text-font-dark'>{title}</h1>
        <p className='font-normal text-font-light dark:text-font-dark'>
          {description}
        </p>
      </MenuItem>
    </Link>
  ))

  return (
    <React.Fragment className='sm:hidden'>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as='a'
            href='/#/about'
            variant='small'
            className='font-normal'
          >
            <MenuItem className='hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full dark:text-font-dark'>
              <Square3Stack3DIcon className='h-[18px] w-[18px] text-blue-gray-500 dark:text-font-dark' />{' '}
              About
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid dark:bg-back-dark'>
          <Card
            color='blue-gray'
            shadow={false}
            variant='gradient'
            className='col-span-3 grid h-full w-full place-items-center rounded-md'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-28 h-28'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122'
              />
            </svg>
          </Card>
          <ul className='col-span-4 flex w-full flex-col gap-1'>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className='flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden dark:text-white'>
        <Square3Stack3DIcon className='h-[18px] w-[18px] text-blue-gray-500 dark:text-font-dark' />{' '}
        Pages
      </MenuItem>
      <ul className='ml-6 flex w-full flex-col gap-1 lg:hidden'>
        {renderItems}
      </ul>
    </React.Fragment>
  )
}

// nav list component
const navListItems = [
  {
    label: 'Contact',
    icon: UserCircleIcon,
    link: '/#/contact'
  },
  {
    label: 'FAQs',
    icon: QuestionMarkCircleIcon,
    link: '/#/FAQs'
  }
]

function NavList () {
  return (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center'>
      <Typography
        as='a'
        href='/#/'
        variant='small'
        className='font-normal'
      >
        <MenuItem className='hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full dark:text-font-dark'>
          <HomeIcon className='h-[18px] w-[18px] text-blue-gray-500 dark:text-font-dark' />{' '}
          Home
        </MenuItem>
      </Typography>
      <NavListMenu />
      {navListItems.map(({ label, icon, link }, key) => (
        <Typography
          key={label}
          as='a'
          href={link}
          variant='small'
          color='gray'
          className='font-medium text-blue-gray-500 dark:text-font-dark'
        >
          <MenuItem className='flex items-center gap-2 lg:rounded-full'>
            {React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
            <span className='text-gray-900 dark:text-font-dark'> {label}</span>
          </MenuItem>
        </Typography>
      ))}
      <DarkModeButton />
    </ul>
  )
}

export function ComplexNavbar () {
  const [isNavOpen, setIsNavOpen] = React.useState(false)

  const toggleIsNavOpen = () => setIsNavOpen(cur => !cur)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    )
  }, [])

  return (
    <Navbar className='mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 dark:bg-primary-dark dark:text-font-dark'>
      <div className='relative mx-auto flex items-center justify-between text-blue-gray-900 '>
        <a href='/#/'>
          <img
            src={logoW}
            alt='logo'
            width='125'
            height='125'
            className='drop-shadow dark:hidden'
          ></img>
          <img
            src={logo1}
            alt='logo'
            width='125'
            height='125'
            className='drop-shadow hidden dark:block'
          />
        </a>

        <IconButton
          size='sm'
          color='blue-gray'
          variant='text'
          onClick={toggleIsNavOpen}
          className='ml-auto mr-2 lg:hidden'
        >
          <Bars2Icon className='h-6 w-6' />
        </IconButton>
        <div className='lg:block sm:hidden xxs:hidden flex items-center'>
          <NavList />
        </div>

        <Button size='sm' variant='text'>
          <a href='http://vmmhealthcare.org/donate' target='_blank'>
            <span className='dark:text-font-dark'>Donate Now</span>
          </a>
        </Button>
      </div>
      <MobileNav open={isNavOpen} className='overflow-scroll'>
        <NavList />
      </MobileNav>
    </Navbar>
  )
}
