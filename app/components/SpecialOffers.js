// components/SpecialOffers.js

import React from 'react';
import Image from 'next/image'

const SpecialOffers = () => {
  const offers = [
    {
      title: "Things To Do On Your Trip",
      url: "/1.webp",
      buttonLabel: "Experiences",
      backgroundImage: "url('/path-to-image-1.jpg')", // Replace with actual path
    },
    {
      title: "Let Your Curiosity Do The Booking",
      url: "/2.webp",
      buttonLabel: "Experiences",
      backgroundImage: "url('/path-to-image-2.jpg')", // Replace with actual path
    },
    {
      title: "Enjoy Summer Deals\nUp to 70% Discount!",
      url: "/3.webp",
      buttonLabel: "Experiences",
      backgroundImage: "url('/path-to-image-3.jpg')", // Replace with actual path
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
        <p className="text-gray-600 mb-8">These popular destinations have a lot to offer</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-[30rem] rounded-lg overflow-hidden shadow-lg"
              style={{ backgroundImage: offer.backgroundImage }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
                <Image
                  src={offer?.url} // Replace with your logo path
                  alt="GoTrip Logo"
                  // width={"100%"}
                  // height={"100%"}
                  layout='fill'
                  objectFit='cover'
                />
                <h3 className="text-xl font-semibold text-center mb-4 whitespace-pre-line">{offer.title}</h3>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
                  {offer.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
