import Image from 'next/image';

const destinations = [
  {
    name: 'Los Angeles',
    properties: '1714 properties',
    imageUrl: '/images/los-angeles.jpg', // Add the correct image paths
  },
  {
    name: 'London',
    properties: '1714 properties',
    imageUrl: '/images/london.jpg',
  },
  {
    name: 'Reykjavik',
    properties: '1714 properties',
    imageUrl: '/images/reykjavik.jpg',
  },
  {
    name: 'Paris',
    properties: '1714 properties',
    imageUrl: '/images/paris.jpg',
  },
  {
    name: 'Amsterdam',
    properties: '1714 properties',
    imageUrl: '/images/amsterdam.jpg',
  },
  {
    name: 'Istanbul',
    properties: '1714 properties',
    imageUrl: '/images/istanbul.jpg',
  },
];

const TopDestinations = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Top Destinations</h2>
          <p className="text-center text-gray-600 mt-2">These popular destinations have a lot to offer</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* <!-- Los Angeles --> */}
            <div className="relative group">
              <img src="https://gotrip-appdir.vercel.app/img/destinations/2/1.png" alt="Los Angeles" className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-50 transition"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Los Angeles</h3>
                <p className="text-sm">1714 properties</p>
              </div>
            </div>

            {/* <!-- London --> */}
            <div className="relative group">
              <img src="https://gotrip-appdir.vercel.app/img/destinations/2/2.png" alt="London" className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-50 transition"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">London</h3>
                <p className="text-sm">1714 properties</p>
              </div>
            </div>

            {/* <!-- Reykjavik --> */}
            <div className="relative group">
              <img src="https://gotrip-appdir.vercel.app/img/destinations/2/3.png" alt="Reykjavik" className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-50 transition"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Reykjavik</h3>
                <p className="text-sm">1714 properties</p>
              </div>
            </div>

            {/* <!-- Paris --> */}
            <div className="relative group">
              <img src="https://gotrip-appdir.vercel.app/img/destinations/2/4.png" alt="Paris" className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-50 transition"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Paris</h3>
                <p className="text-sm">1714 properties</p>
              </div>
            </div>

            {/* <!-- Amsterdam --> */}
            <div className="relative group">
              <img src="https://gotrip-appdir.vercel.app/img/destinations/2/5.png" alt="Amsterdam" className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-50 transition"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Amsterdam</h3>
                <p className="text-sm">1714 properties</p>
              </div>
            </div>

            {/* <!-- Istanbul --> */}
            <div className="relative group">
              <img src="https://gotrip-appdir.vercel.app/img/destinations/2/6.png" alt="Istanbul" className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-50 transition"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Istanbul</h3>
                <p className="text-sm">1714 properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default TopDestinations;
