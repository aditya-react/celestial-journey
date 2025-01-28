import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <div className="flex items-center">
              <div className='h-[5.5rem] w-[5.5rem] rounded-full overflow-hidden'>
                <img
                  src="/Logo.JPG" // Replace with your logo path
                  alt="GoTrip Logo"
                  className='h-full w-full object-cover'
                />
              </div>
              <span className="ml-2 text-xl font-bold text-blue-600">Celestial Journeys</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">Toll Free Customer Care</p>
            <p className="text-lg font-bold">+1 123 456 7890</p>
            <p className="mt-2 text-sm text-gray-600">Need live support?</p>
            <p className="text-lg font-bold">hi@celestialjourneys.in</p>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Your all-in-one travel app</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                  <span className="font-medium">Download on the</span> <br />
                  <span className="font-bold">Apple Store</span>
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm">
                  <span className="font-medium">Get in on</span> <br />
                  <span className="font-bold">Google Play</span>
                </button>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-facebook"></i> {/* Use FontAwesome or replace */}
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-twitter"></i> {/* Use FontAwesome or replace */}
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-instagram"></i> {/* Use FontAwesome or replace */}
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-linkedin"></i> {/* Use FontAwesome or replace */}
              </a>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-bold">Get Updates & More</h3>
            <p className="text-sm text-gray-600 mt-2">Sign up for our newsletter</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Press</a></li>
                <li><a href="#" className="hover:text-blue-600">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Support</h3>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600">Legal Notice</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-blue-600">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Other Services</h3>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">Car Hire</a></li>
                <li><a href="#" className="hover:text-blue-600">Activity Finder</a></li>
                <li><a href="#" className="hover:text-blue-600">Tour List</a></li>
                <li><a href="#" className="hover:text-blue-600">Flight Finder</a></li>
                <li><a href="#" className="hover:text-blue-600">Cruise Ticket</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-6 flex flex-wrap items-center justify-between text-sm text-gray-600">
          <p>© 2023 Celestial Journey. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
            <a href="#" className="hover:text-blue-600">Site Map</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">English (US)</a>
            <a href="#" className="hover:text-blue-600">$ USD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
