'use client';
import { Button } from 'keep-react';
import Link from 'next/link';
import React from 'react';

const Homepage = () => {
  return (
    <section className='md:py-3 py-1 px-2.5 min-h-[90vh] flex justify-center items-center '>
      <div className='flex justify-center items-center flex-col gap-2 md:gap-4'>
        <h1 className='md:text-8xl text-4xl'>View Your Todos</h1>
        <Button size='md' type='primary'>
          <Link href='/todos'> View Todos</Link>
        </Button>
      </div>
    </section>
  );
};

export default Homepage;
