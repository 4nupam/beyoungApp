import React from 'react'
import Accordian from '../Accordian'
const Footer = () => {
  return (
   <footer className="text-gray-300 bg-black body-font">
    <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-yellow-300">
          
          <span className="ml-3 text-xl text-yellow-300">LOCATION</span>
        </a>
        <p className="mt-2 text-sm text-gray-200">support@beyoung.in</p>
        <p className="mt-2 text-sm text-gray-200">Eklingpura Chouraha, Ahmedabad Main Road</p>

        <p className="mt-2 text-sm text-gray-200">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>

      </div>
      <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">NEED HELP</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-300">First Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Second Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Third Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">COMPANY</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-300">First Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Second Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Third Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">MORE INFO</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-300">First Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Second Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Third Link</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">DOWNLOAD THE APP</h2>
          <nav className="flex flex-col gap-2 mb-10">
          <a className="text-white cursor-pointer hover:text-gray-300"><img src="https://www.beyoung.in/api/catalog/footer/11Play-Store-footer.png" alt="" /></a>
          <a className="text-white cursor-pointer hover:text-gray-300"><img src="https://www.beyoung.in/api/catalog/footer/12App-Store-footer.png" alt="" /></a>

            
          </nav>
        </div>
        
      </div>
    </div>
    <Accordian/>
    <footer className="text-gray-600 body-font">
  <div className="container py-6 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-yellow-300 text-xl">BEYOUNG.</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 BEYOUNG — Let's Be Friends
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-yellow-400 cursor-pointer">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-yellow-400 cursor-pointer">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-yellow-400 cursor-pointer">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-yellow-400 cursor-pointer">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
  </footer>
  )
}

export default Footer