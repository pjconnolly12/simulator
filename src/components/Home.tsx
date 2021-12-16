import React from 'react';
import logo from '../images/golf-logo.png'
import name from '../images/golf-name.png'
import landing from '../images/landing-page-large.png'

export const Home = (): JSX.Element => {


  return (
    <div className='bg-darkBlue h-screen flex justify-center'>
      <div className='flex flex-col w-1/2 items-center mt-6'>
        <img src={logo} className='w-auto'></img>
        <img src={name} className='w-auto md:w-2/3'></img>
        <img src={landing} className='w-auto mt-8 md:w-1/2'></img>
      </div>
    </div>
  );
}