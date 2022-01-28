import React from 'react';
// import logo from '/golf-logo.png'

export const Home = (): JSX.Element => {


  return (
    <div className='bg-darkBlue h-screen flex justify-center'>
      <div className='flex flex-col w-4/5 items-center mt-6 md:mt-16'>
        <img src={process.env.PUBLIC_URL + '/images/golf-logo.png'} className='w-24 md:w-auto' alt='logo'></img>
        <div className='text-lightCyan text-center mt-8'>
          <p className='text-xl font-bold font-mono md:text-3xl'>Welcome to the Inaugural Stevens Winter Cup</p>
          <p className='mt-4 text-lg font-mono italic md:text-2xl'>A competition dedicated to playing golf through the cold months, having fun, and competing with friends. Grab your clubs, some drinks, and enjoy some rounds at famous courses across the US!</p>
        </div>
      </div>
    </div>
  );
}