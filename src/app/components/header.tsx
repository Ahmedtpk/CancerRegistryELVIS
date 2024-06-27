"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon, ChevronDownIcon, RectangleGroupIcon, DocumentIcon, TableCellsIcon, MagnifyingGlassCircleIcon, ArrowLeftEndOnRectangleIcon  } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
import Link from 'next/link';

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#46658A] border-b fixed sm:absolute w-screen sm:w-full border-black shadow">
      {({ open }) => (
        <>
          <div className="max-w-full w-full px-2 sm:px-4 lg:pr-7">
            <div className="flex h-16 w-full justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link href={'/'} className="inline-flex items-center text-white  text-2xl font-semibold px-1 pt-1">ELVIS</Link>
                  <a
                    href="/details"
                    className="inline-flex items-center cursor-pointer text-white font-semibold  px-1 pt-1"
                  >
                    <MagnifyingGlassIcon className='text-white w-5 h-5 mr-1'/>
                    Variabler
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center cursor-pointer text-white border-transparent px-1 pt-1 hover:border-gray-300 opacity-60"
                  >
                    <RectangleGroupIcon className='text-white w-5 h-5 mr-1'/>
                    Mine Variabler
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center cursor-pointer text-white border-transparent px-1 pt-1 hover:border-gray-300 opacity-60"
                  >
                    <DocumentIcon className='text-white w-5 h-5 mr-1'/>
                    Søknadsskjema
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center cursor-pointer text-white border-transparent px-1 pt-1 hover:border-gray-300 opacity-60"
                  >
                    <TableCellsIcon className='text-white w-5 h-5 mr-1'/>
                    Tabeller
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center cursor-pointer text-white border-transparent px-1 pt-1 hover:border-gray-300 opacity-60"
                  >
                    <MagnifyingGlassCircleIcon className='text-white w-5 h-5 mr-1'/>
                    Hjelp
                  </a>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2">
                <div className="w-full max-w-lg lg:max-w-2xl">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
              <Menu as="div" className="relative ml-4 flex-shrink-0">
                <MenuButton className="relative flex">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img className='w-7 h-5 object-contain' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAAC/CAMAAADEm+k5AAAARVBMVEW6DC8AIFv///8AAFGsssG4ACPUhI4AAE4ADVTHy9aGjaW4ACbMZ3TirbO3ABwAD1QAF1fKYm+1AAjfpazsy8/SfohaZocqTX/2AAABrklEQVR4nO3byUpDQRBA0Weco8bZ//9UhbvQRQQDFcjDc9YN1dxlN7UsI+7uN99ur8/2udn+OPOwmxl8YnSIDtEhOkSH6BAdokN0iA7RITpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh+gQHaJDdIgO0SE6ZP0dLkfsng/t8DIzeMpyNeP1wA5v70ODhyybeX/pcGp0iA7RITpEh+gQHaJDdIgOWS7mbR/3dnj6OMKsKcv5vP0ZvkIcYdaU5Zc7/zc6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh+gQHeK9Ov4v4j8rOkSH6BAdokN0iA7RITpEh9i/iH2cDG03rX8/a4YO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh6y+wye6PreOb6cW8AAAAABJRU5ErkJggg==" alt="" />
                  <ChevronDownIcon className='w-5 h-5 ml-1 text-white' />
                </MenuButton>
                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          English
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <button className='text-white text-sm ml-2 gap-1 flex  cursor-pointer'>Logg inn<ArrowLeftEndOnRectangleIcon className='text-white w-5 h-5 mr- rotate-180'/>
                </button>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Team
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Projects
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Calendar
              </DisclosureButton>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </DisclosureButton>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
