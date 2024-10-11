import React from 'react'

const navbar = () => {
  return (
    <>
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
        
     
     
    <form>
    <select id="countries" className="bg-gray-600 text-gray-300 hover:text-white border border-gray-900 hover:bg-gray-900 focus:ring-3 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
    <option value="US">USD</option>
    <option value="CA">CAD</option>
    <option value="FR">AUD</option>
    <option value="DE">EUR</option>
    <option value="DE">GBP</option>
    </select>
    </form>



        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="text-sm  text-gray-100 dark:text-white">Sign in</a>
            <a href="#" className="text-sm  text-gray-100 dark:text-white">Create an account</a>
        </div>
    </div>
    </nav>
    
    <nav className="bg-gray-700 border-gray-700 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
 
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
            <a href="#" className="text-sm  text-gray-100 dark:text-white">Search</a>
            <a href="#" className="text-sm  text-gray-100 dark:text-white">Help</a>
            <a href="#" className="text-sm  text-gray-100 dark:text-white">Cart</a>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-700 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
      <button id="mega-menu-dropdown-button-1" data-dropdown-toggle="mega-menu-dropdown-1" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-100 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">
        Women<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
          <div id="mega-menu-dropdown-1" className="absolute z-10 grid hidden w-auto grid-cols-12 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700">
          <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">New Arrivals</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Shop now</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Basic Tees</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Shop now</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Accessories</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Shop now</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Carry</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Shop now</p>
      </a>

      
    </div>
          </div>
          </div>
          </div>
      </li>
      <li>
      <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-200 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">
                  Men <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                    </button>
                    <div id="mega-menu-dropdown" className="absolute z-10 grid hidden w-auto grid-cols-12 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700"> 
                    <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">New Arrivals</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Shop now</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Basic Tees</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Shop now</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Accessories</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Shop now</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Carry</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Shop now</p>
      </a>

      
    </div>
  </div>
                    </div>
                    </div>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:dark:text-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Company</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:dark: dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Stores</a>
      </li>
    </ul>
  </div>
  </div>
    </nav>
    </>
  )
}

export default navbar
