import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Discover
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                {' '}Sweet{' '}
              </span>
              Perfection
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our collection of mouth-watering dessert recipes from around the world. 
              From classic cakes to innovative pastries, find your next sweet obsession.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Explore Recipes
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-colors duration-200">
                Watch Videos
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Beautiful dessert"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
