import { useState } from 'react';
import { Users, Zap, Gauge, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <OccasionsSection />
      <VehicleCardsSection />
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
      image: '/src/Images/occassions/Screenshot_20260225_204104_Instagram.jpg'
    },
    {
      title: 'Weddings',
      copy: 'The arrival, the photos, the getaway, make it part of the memory.',
      image: '/src/Images/occassions/Screenshot_20260225_204025_Instagram.jpg'
    },
    {
      title: 'Visiting Vegas',
      copy: 'You\'re already in the city that flexes. Don\'t show up in a rental Camry.',
      image: '/src/Images/occassions/Screenshot_20260225_204209_Instagram.jpg'
    },
    {
      title: 'For The Experience',
      copy: 'Red Rock roads. Strip nights. No excuse needed.',
      image: '/src/Images/occassions/Screenshot_20260225_204125_Instagram.jpg'
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

function VehicleCardsSection() {
  const vehicles = [
    {
      name: 'Blacked Out Lamborghini Urus',
      images: [
        '/src/Images/Urus/Screenshot_20260225_202332_Instagram.jpg',
        '/src/Images/Urus/Screenshot_20260225_202350_Instagram.jpg',
        '/src/Images/Urus/Screenshot_20260225_202404_Instagram.jpg',
        '/src/Images/Urus/Screenshot_20260225_202431_Instagram.jpg'
      ],
      specs: [
        { icon: Users, label: 'Seats: 5' },
        { icon: Gauge, label: 'Automatic' },
        { icon: Zap, label: 'SUV' }
      ],
      price: '$899'
    },
    {
      name: 'C8 Corvette',
      images: [
        '/src/Images/Corvette/Screenshot_20260225_202445_Instagram.jpg',
        '/src/Images/Corvette/Screenshot_20260225_202451_Instagram.jpg',
        '/src/Images/Corvette/Screenshot_20260225_202458_Instagram.jpg',
        '/src/Images/Corvette/Screenshot_20260225_202513_Instagram.jpg'
      ],
      specs: [
        { icon: Users, label: 'Seats: 2' },
        { icon: Zap, label: '0–60: 2.9s' },
        { icon: Gauge, label: 'Automatic' }
      ],
      price: '$599'
    },
    {
      name: 'Porsche 911 GT3RS',
      images: [
        '/src/Images/Porsche/Screenshot_20260225_202523_Instagram.jpg',
        '/src/Images/Porsche/Screenshot_20260225_202550_Instagram.jpg',
        '/src/Images/Porsche/Screenshot_20260225_202557_Instagram.jpg',
        '/src/Images/Porsche/Screenshot_20260225_202610_Instagram.jpg',
        '/src/Images/Porsche/Screenshot_20260225_202618_Instagram.jpg'
      ],
      specs: [
        { icon: Users, label: 'Seats: 2' },
        { icon: Zap, label: '0–60: 3.0s' },
        { icon: Gauge, label: 'Automatic' }
      ],
      price: '$799'
    }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rental Options
          </h2>
          <p className="text-xl text-gray-400">
            Available for Pick-up and Delivery Now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle }: { vehicle: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-2xl hover:shadow-red-600/20 transition-all duration-300">
      <div className="relative h-64 overflow-hidden group">
        <img
          src={vehicle.images[currentImageIndex]}
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />

        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {vehicle.images.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-red-600 w-6'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-4">
          {vehicle.name}
        </h3>

        <div className="space-y-2 mb-6">
          {vehicle.specs.map((spec: any, specIndex: number) => (
            <div key={specIndex} className="flex items-center gap-2 text-gray-300">
              <spec.icon size={18} className="text-red-500" />
              <span className="text-sm">{spec.label}</span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-1">Start from</p>
          <p className="text-3xl font-bold text-white">
            {vehicle.price} <span className="text-lg text-gray-400">per day</span>
          </p>
        </div>

        <button className="w-full py-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default App;
