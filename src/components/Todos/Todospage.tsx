'use client';
import { tableHeader } from '@/data';
import PriorityBadge from '@/ui/PriorityBadge';
import StatusBadge from '@/ui/StatusBadge';
import { Button, Modal, Label, TextInput, DatePicker } from 'keep-react';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { LuListTodo } from 'react-icons/lu';

const Todospage = () => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate]: [Date | null, Dispatch<SetStateAction<Date | null>>] =
    useState<Date | null>(null);

  console.log(date);
  return (
    <section className='md:py-3 py-1 px-2.5'>
      <div className='flex justify-between items-center md:mb-5 mb-2'>
        <h1 className='md:text-8xl text-4xl '>Todos</h1>
        <Button
          onClick={() => setShowModal(!showModal)}
          size='sm'
          type='primary'
        >
          Add Todo
        </Button>
      </div>

      <Modal
        icon={<LuListTodo size={28} color='#1B4DFF' />}
        show={showModal}
        position='center'
        size='md'
      >
        <Modal.Header>
          <p className='text-center'>Add Todo</p>
        </Modal.Header>
        <Modal.Body>
          <div className='space-y-6'>
            <form className='text-slate-900 '>
              <div>
                <Label value='Title' />
                <TextInput
                  id='#id-17'
                  placeholder='Enter your todo title'
                  color='gray'
                />
              </div>

              <div>
                <DatePicker singleDatePicker={setDate}>
                  <DatePicker.SingleDate />
                </DatePicker>
              </div>

              {/* <label
                htmlFor='title'
                className='block text-sm font-medium text-gray-700'
              >
                Title
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full'
              /> */}
            </form>
          </div>
        </Modal.Body>
      </Modal>

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
