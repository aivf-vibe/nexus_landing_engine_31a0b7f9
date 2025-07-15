import Image from 'next/image';
import { FaLeaf, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FaLeaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Serenity Tea</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Collection</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              <button className="btn-primary flex items-center">
                <FaShoppingCart className="mr-2" />
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-gray-800 mb-6">
              Discover the Art of <span className="text-green-600">Fine Tea</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Immerse yourself in the world of premium teas, carefully curated for the perfect cup every time.
            </p>
            <button className="btn-primary text-lg">
              Explore Our Collection
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our Featured Teas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jasmine Pearl Green Tea",
                price: "$24.99",
                image: "/tea1.jpg"
              },
              {
                name: "Earl Grey Supreme",
                price: "$22.99",
                image: "/tea2.jpg"
              },
              {
                name: "Organic Chamomile Bloom",
                price: "$19.99",
                image: "/tea3.jpg"
              }
            ].map((tea, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="tea-card"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-green-100" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tea.name}</h3>
                <p className="text-green-600 font-medium mb-4">{tea.price}</p>
                <button className="w-full btn-primary">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Why Choose Our Tea</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ethically Sourced",
                description: "Direct partnerships with tea gardens ensuring fair trade practices."
              },
              {
                title: "Premium Quality",
                description: "Hand-picked leaves and expert processing for the finest taste."
              },
              {
                title: "Wellness Benefits",
                description: "Rich in antioxidants and natural compounds for your health."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="tea-card text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}