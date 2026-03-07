import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <OccasionsSection />
      <ReviewsSection />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white tracking-tight">
          Kovac Luxury Car Rentals
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300 cursor-pointer">
            <span className="text-sm font-medium">Vehicles</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300 cursor-pointer">
            <span className="text-sm font-medium">Occasions</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300 cursor-pointer">
            <span className="text-sm font-medium">About</span>
            <ChevronDown size={16} />
          </div>
          <button className="px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dnxzhyyw0/video/upload/v1756694442/5th_version_of_b_roll_jw0fvt.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}

function OccasionsSection() {
  const occasions = [
    {
      title: 'Content Creation',
      copy: 'Put a real car in the frame and your content levels up instantly.',
      image: '/images/occassions/Screenshot_20260225_204104_Instagram.jpg'
    },
    {
      title: 'Weddings',
      copy: 'The arrival, the photos, the getaway, make it part of the memory.',
      image: '/images/occassions/Screenshot_20260225_204025_Instagram.jpg'
    },
    {
      title: 'Visiting Vegas',
      copy: 'You\'re already in the city that flexes. Don\'t show up in a rental Camry.',
      image: '/images/occassions/Screenshot_20260225_204209_Instagram.jpg'
    },
    {
      title: 'For The Experience',
      copy: 'Red Rock roads. Strip nights. No excuse needed.',
      image: '/images/occassions/Screenshot_20260225_204125_Instagram.jpg'
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-950">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
        Why are you renting?
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {occasions.map((occasion, index) => (
          <div
            key={index}
            className="relative h-96 overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src={occasion.image}
              alt={occasion.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                console.error('Failed to load image:', occasion.image);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {occasion.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {occasion.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const reviews = [
    {
      name: 'Caleb Kuechly',
      rating: 5,
      text: 'Vadim had the Ferrari ready for me within two hours on a Saturday morning. The whole process was smooth and the car was incredible. If you\'re considering renting somewhere else, don\'t. Vadim makes sure you have an amazing experience.'
    },
    {
      name: 'Conner Rich',
      rating: 5,
      text: 'We surprised my dad for his 50th birthday with a Lamborghini Urus and Vadim made the whole experience unforgettable. He even staged the car outside to help with the surprise. Amazing service and communication.'
    },
    {
      name: 'Ashley Davis',
      rating: 5,
      text: 'I rented a Lamborghini Huracán for my husband\'s birthday and everything exceeded expectations. The car was immaculate and the process was smooth and stress-free.'
    },
    {
      name: 'Andy Chaplin',
      rating: 5,
      text: 'Rented the Huracán for a weekend and had an incredible time. Vadim explained everything clearly beforehand and made the entire experience easy and enjoyable.'
    },
    {
      name: 'Carlos Juarez',
      rating: 5,
      text: 'The entire process was seamless and stress-free. Vadim was extremely professional and responsive. I\'ll definitely be renting from Premier Luxury Club again.'
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('reviews-container');
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('reviews-container');
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400">
            Real experiences from people who rented with Premier Luxury Club.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-lg p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-left">
              <p className="text-gray-400 text-sm font-medium mb-2">Google Reviews</p>
              <div className="flex items-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-2xl font-bold text-white">Rating: 5.0</p>
            </div>
          </div>

          <a
            href="https://share.google/7T3WzFO9W2BiKa3y6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors duration-300 whitespace-nowrap"
          >
            Read More Reviews
          </a>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300 -ml-4 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            id="reviews-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96 bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors duration-300 border border-zinc-800 hover:border-red-600/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{review.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300 -mr-4 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
