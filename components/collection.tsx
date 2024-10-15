import React from 'react'

const collection = () => {
  return (
    <>
    <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
    <p className="text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Handcrafted Collection
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Keep your phone, keys, and wallet together, so you can lose everything at once.</p>
          </div>
          
        </div>
      </div>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-02.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Organized Desk Collection
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">The rest of the house will still be a mess, but your desk will look great.</p>
          </div>
          
        </div>
      </div>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-03.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Focus Collection
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Be more productive than enterprise project managers with a single piece of paper.</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default collection
