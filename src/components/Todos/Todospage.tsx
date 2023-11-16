'use client';
import PriorityBadge from '@/ui/PriorityBadge';
import StatusBadge from '@/ui/StatusBadge';
import { Badge, Button } from 'keep-react';
import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const tableHeader = [
  { id: 1, headerTitle: 'Title' },
  { id: 2, headerTitle: 'Start Date' },
  { id: 3, headerTitle: 'End Date' },
  { id: 4, headerTitle: 'Status' },
  { id: 5, headerTitle: 'Priority' },
  { id: 6, headerTitle: 'Action' },
];
const Todospage = () => {
  return (
    <section className='md:py-3 py-1 px-2.5'>
      <div className='flex justify-between items-center md:mb-5 mb-2'>
        <h1 className='md:text-8xl text-4xl '>Todos</h1>
        <Button size='sm' type='primary'>
          Add Todo
        </Button>
      </div>

      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              {tableHeader.map((item, index) => {
                return (
                  <th
                    key={item.id}
                    scope='col'
                    className='px-6 py-3 text-white whitespace-nowrap'
                  >
                    {item.headerTitle}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td className='px-6 py-4 text-gray-25 whitespace-nowrap'>
                Read 20 Page
              </td>
              <td className='px-6 py-4 text-gray-25 whitespace-nowrap'>
                16/11/23
              </td>
              <td className='px-6 py-4 text-gray-25 whitespace-nowrap'>
                23/11/23
              </td>
              <td className='px-6 py-4 text-gray-25 whitespace-nowrap'>
                <StatusBadge>Yet to start</StatusBadge>
                {/* Yet To Start | On Going | Time Over */}
              </td>
              <td className='px-6 py-4 text-gray-25 whitespace-nowrap'>
                <PriorityBadge>high</PriorityBadge>
              </td>
              <td className='px-6 py-4 text-gray-25 whitespace-nowrap'>
                <div className='flex gap-2'>
                  <span className='hover:text-gray-50 hover:cursor-pointer'>
                    <MdDeleteForever size={'1.5em'} />
                  </span>
                  <span className='hover:text-gray-50 hover:cursor-pointer'>
                    <MdEdit size={'1.5em'} />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Todospage;
