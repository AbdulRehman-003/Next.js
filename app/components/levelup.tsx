import React from 'react';

const levelup = () => {
  return (
    <>
  <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 shadow-2xl  m-20">
      <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-feature-section-01.jpg" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
        <p className="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>

        <button
          type="button"
          className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Book Now
        </button>
      </div>
    </div>
    </>
  )
}

export default levelup
