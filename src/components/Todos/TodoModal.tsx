import { Modal } from 'keep-react';
import React from 'react';
import { LuListTodo } from 'react-icons/lu';

const TodoModal = ({
  showModal,
  editState,
  handleSubmit,
  title,
  setTitle,
  handleModalShow,
}: any) => {
  return (
    <Modal
      icon={<LuListTodo size={28} color='#1B4DFF' />}
      show={showModal}
      position='center'
      size='md'
    >
      <Modal.Header>
        <p className='text-center'>{editState ? 'Edit Todo' : 'Add todo'}</p>
      </Modal.Header>
      <Modal.Body>
        <div className='space-y-6'>
          <form className='text-slate-900 space-y-3' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='title'
                className='block text-sm font-medium text-gray-700'
              >
                Title
              </label>
              <input
                value={title}
                placeholder='Enter Title Here'
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                id='title'
                name='title'
                className='mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full'
              />
            </div>

            <div className='flex gap-2'>
              <button
                type='submit'
                className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600'
              >
                {editState ? 'Update' : 'Submit'}
              </button>
              <button
                onClick={handleModalShow}
                type='button'
                className='bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TodoModal;
