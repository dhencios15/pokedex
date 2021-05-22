import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const BaseSelect = ({ selected, setSelected, options }) => {
  return (
    <div className='w-72'>
      <Listbox value={selected} onChange={(e) => setSelected(e.value)}>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-md cursor-default bg-white-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white-400 focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
            <span className='block capitalize truncate'>{selected}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <SelectorIcon
                className='w-5 h-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-white-400 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((opt, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={opt}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {opt.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className='w-5 h-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default BaseSelect;
