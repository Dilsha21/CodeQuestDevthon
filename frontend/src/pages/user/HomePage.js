import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Search, 
  MapPin, 
  Leaf, 
  Clock, 
  Users, 
  User,
  TrendingDown,
  ArrowRight,
  Star,
  Shield,
  Heart
} from 'lucide-react';

const HomePage = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const features = [
    {
      icon: Search,
      title: 'Real-time Medicine Search',
      description: 'Find available medicines at nearby pharmacies instantly with up-to-date inventory information.',
      color: 'primary'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Recommendations',
      description: 'Get pharmacy suggestions that minimize travel distance and reduce carbon emissions.',
      color: 'success'
    },
    {
      icon: Clock,
      title: 'Refill Reminders',
      description: 'Never run out of essential medicines with timely refill notifications.',
      color: 'warning'
    },
    {
      icon: TrendingDown,
      title: 'Reduce Medicine Waste',
      description: 'Help pharmacies optimize stock levels and reduce expired medicine waste.',
      color: 'danger'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Users', value: '50,000+', color: 'primary' },
    { icon: MapPin, label: 'Partner Pharmacies', value: '1,200+', color: 'success' },
    { icon: Leaf, label: 'CO₂ Saved (kg)', value: '12,500+', color: 'success' },
    { icon: Star, label: 'User Rating', value: '4.8/5', color: 'warning' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'MedFinder saved me hours of searching for my medication. The eco-friendly feature is a bonus!',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Healthcare Provider',
      content: 'Great platform that helps patients find medicines quickly while promoting sustainability.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Regular User',
      content: 'The refill reminders are lifesavers. I never miss my medications anymore.',
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              Find Medicines
              <span className="text-primary-600"> Sustainably</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Locate nearby pharmacies with your required medicines while reducing your carbon footprint. 
              Smart healthcare for you and the planet.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for medicines..."
                    className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary px-8 py-3 text-lg flex items-center justify-center space-x-2"
                >
                  <span>Search</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={user ? "/dashboard" : "/register"}
                className="btn btn-primary px-8 py-3 text-lg"
              >
                {user ? 'Go to Dashboard' : 'Get Started'}
              </Link>
              <Link
                to="/sustainability"
                className="btn btn-secondary px-8 py-3 text-lg"
              >
                Learn About Sustainability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}-100 mb-4`}>
                  <stat.icon className={`text-${stat.color}-600`} size={32} />
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-600 mb-1`}>
                  {stat.value}
                </div>
                <div className="text-secondary-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose MedFinder?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We combine convenience with sustainability to create a better healthcare experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${feature.color}-100 mb-6`}>
                  <feature.icon className={`text-${feature.color}-600`} size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-secondary-600">
              Real experiences from real users
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-warning-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-secondary-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <User className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-secondary-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Healthcare More Sustainable?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of users who are already saving time and reducing their environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="btn bg-white text-primary-600 hover:bg-secondary-50 px-8 py-3 text-lg"
              >
                Sign Up Now
              </Link>
              <Link
                to="/chatbot"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg"
              >
                Try AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
