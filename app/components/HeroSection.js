import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative h-screen">
        <Image
          src="/bg.png" // Replace with your image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Discover Your World</h1>
        <p className="text-lg md:text-xl mt-4">
          Discover amazing places at exclusive deals
        </p>

        {/* Search Bar */}
        <div className="bg-white shadow-lg rounded-lg mt-8 p-6 w-full max-w-4xl">
          <div className="flex items-center justify-between">
            {/* Tabs */}
            <div className="flex space-x-4 text-gray-600">
              <button className="flex items-center space-x-2 text-blue-600 font-semibold">
                <i className="fas fa-hotel" /> <span>Hotel</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-600">
                <i className="fas fa-route" /> <span>Tour</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-600">
                <i className="fas fa-map-marker-alt" /> <span>Activity</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-600">
                <i className="fas fa-home" /> <span>Holiday Rentals</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-600">
                <i className="fas fa-car" /> <span>Car</span>
              </button>
            </div>

            <button className="flex items-center text-blue-600 hover:text-blue-700">
              <i className="fas fa-search mr-2" /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
