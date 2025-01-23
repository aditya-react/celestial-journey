import React from 'react'

const PopularCarHire = () => {
  return (
    <section className="bg-gray-50">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900">Popular Car Hire</h2>
    <p className="text-gray-600 mt-2">Interdum et malesuada fames ac ante ipsum</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {/* <!-- Hotel Card 1 --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
        <div className="relative">
          <img src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fcars%2F1.png&w=384&q=75" alt="Hotel 1" className="w-full h-48 object-cover"/>
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">BREAKFAST INCLUDED</span>
          <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow text-gray-700 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a6 6 0 00-9 7.5l9 9 9-9a6 6 0 00-9-7.5z" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">The Montcalm At Brewery London City</h3>
          <p className="text-sm text-gray-500">Westminster Borough, London</p>
          <div className="mt-2 flex items-center text-blue-600 text-sm">
            <span className="font-semibold">4.7</span>
            <span className="ml-1 text-gray-500">Exceptional - 3014 reviews</span>
          </div>
          <p className="mt-2 text-blue-600 font-semibold">Starting from US$72</p>
        </div>
      </div>

      {/* <!-- Hotel Card 2 --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
        <div className="relative">
          <img src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fcars%2F2.png&w=384&q=75" alt="Hotel 2" className="w-full h-48 object-cover"/>
          <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow text-gray-700 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a6 6 0 00-9 7.5l9 9 9-9a6 6 0 00-9-7.5z" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Staycity Aparthotels Deptford Bridge Station</h3>
          <p className="text-sm text-gray-500">Cluit Valley, Barcelona</p>
          <div className="mt-2 flex items-center text-blue-600 text-sm">
            <span className="font-semibold">4.7</span>
            <span className="ml-1 text-gray-500">Exceptional - 2343 reviews</span>
          </div>
          <p className="mt-2 text-blue-600 font-semibold">Starting from US$85</p>
        </div>
      </div>

      {/* <!-- Hotel Card 3 --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
        <div className="relative">
          <img src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fcars%2F3.png&w=384&q=75" alt="Hotel 3" className="w-full h-48 object-cover"/>
          <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">BEST SELLER</span>
          <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow text-gray-700 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a6 6 0 00-9 7.5l9 9 9-9a6 6 0 00-9-7.5z" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">The Westin New York at Times Square West</h3>
          <p className="text-sm text-gray-500">Manhattan, New York</p>
          <div className="mt-2 flex items-center text-blue-600 text-sm">
            <span className="font-semibold">4.7</span>
            <span className="ml-1 text-gray-500">Exceptional - 3014 reviews</span>
          </div>
          <p className="mt-2 text-blue-600 font-semibold">Starting from US$68</p>
        </div>
      </div>

      {/* <!-- Hotel Card 4 --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
        <div className="relative">
          <img src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fcars%2F4.png&w=384&q=75" alt="Hotel 4" className="w-full h-48 object-cover"/>
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">TOP RATED</span>
          <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow text-gray-700 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a6 6 0 00-9 7.5l9 9 9-9a6 6 0 00-9-7.5z" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">DoubleTree by Hilton Hotel New York Times Square West</h3>
          <p className="text-sm text-gray-500">Vaticano Frati, Rome</p>
          <div className="mt-2 flex items-center text-blue-600 text-sm">
            <span className="font-semibold">4.7</span>
            <span className="ml-1 text-gray-500">Exceptional - 5033 reviews</span>
          </div>
          <p className="mt-2 text-blue-600 font-semibold">Starting from US$89</p>
        </div>
      </div>
    </div>

    <div className="mt-6 text-right">
      <a href="#" className="text-blue-600 hover:underline font-semibold flex items-center justify-end">
        More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>
  )
}

export default PopularCarHire