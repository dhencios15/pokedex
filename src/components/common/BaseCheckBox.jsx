import { Fragment } from 'react';
import CheckboxGroup from 'react-checkbox-group';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const BaseCheckBox = ({ options, types, setTypes }) => {
  return (
    <div className='w-full mt-4'>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-black w-full group bg-white-400 px-3 py-2 rounded-md flex justify-between items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Types</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  h-5 w-5 text-black group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute z-10 w-full max-w-sm px-4 mt-2 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl'>
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                  <div className='relative grid grid-cols-2 gap-2 px-4 py-2 overflow-y-auto h-44 bg-white-400'>
                    <CheckboxGroup
                      name='fruits'
                      value={types}
                      onChange={setTypes}
                    >
                      {(Checkbox) => (
                        <>
                          {options.map((opt) => (
                            <label key={opt} className='capitalize'>
                              <Checkbox value={opt} /> {opt}
                            </label>
                          ))}
                        </>
                      )}
                    </CheckboxGroup>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default BaseCheckBox;
