'use client';
import { Button, Navbar } from 'keep-react';
import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlass } from 'phosphor-react';

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className='bg-slate-600 '>
      <Navbar.Container className='flex items-center justify-center '>
        <Navbar.Container
          tag='ul'
          className='lg:flex hidden items-center justify-between gap-8 py-4'
        >
          <Link className='hover:text-gray-100' href='/'>
            Home
          </Link>
          <Link className='hover:text-gray-100' href='/todos'>
            Todos
          </Link>
        </Navbar.Container>

        {/* small screen */}
        <Navbar.Collapse collapseType='sidebar'>
          <Navbar.Container tag='ul' className='flex flex-col gap-5'>
            <Navbar.Link linkName='Home' />
            <Navbar.Link linkName='Projects' />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className='flex items-center gap-3'>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
