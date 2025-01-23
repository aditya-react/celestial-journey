export default function SecondSection() {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <div className="text-center">
                <i className="fas fa-dollar-sign text-blue-600 text-3xl"></i>
                <h3 className="text-xl font-bold mt-4">Best Prices</h3>
                <p className="text-gray-600 mt-2">
                  Find the best prices for all your travel needs.
                </p>
              </div>
            </div>
  
            {/* Feature 2 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <div className="text-center">
                <i className="fas fa-clock text-blue-600 text-3xl"></i>
                <h3 className="text-xl font-bold mt-4">24/7 Support</h3>
                <p className="text-gray-600 mt-2">
                  We're here to help you anytime, anywhere.
                </p>
              </div>
            </div>
  
            {/* Feature 3 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <div className="text-center">
                <i className="fas fa-plane text-blue-600 text-3xl"></i>
                <h3 className="text-xl font-bold mt-4">Flexible Travel</h3>
                <p className="text-gray-600 mt-2">
                  Plan your trips with full flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  