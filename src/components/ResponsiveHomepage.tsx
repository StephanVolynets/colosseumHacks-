import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  ChevronRight,
  Star,
  Users,
  Zap,
  Shield,
  Smartphone,
  Monitor,
  Tablet,
  Check,
  ArrowRight,
  Globe,
  Heart,
  TrendingUp
} from "lucide-react";

interface ResponsiveHomepageProps {
  className?: string;
}

export const ResponsiveHomepage = ({ className }: ResponsiveHomepageProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance across all devices and screen sizes"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Available worldwide with multi-language support"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built for teams with advanced collaboration features"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "This platform has revolutionized how our team works. The responsive design works perfectly on every device.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "Incredible performance and user experience. Our productivity increased by 40% since switching.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Designer",
      company: "Creative Studio",
      content: "The mobile experience is just as good as desktop. Finally, a truly responsive platform!",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "month",
      features: ["Up to 5 users", "10GB storage", "Basic support", "Mobile app"],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "month",
      features: ["Up to 50 users", "100GB storage", "Priority support", "Advanced analytics", "API access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      features: ["Unlimited users", "1TB storage", "24/7 dedicated support", "Custom integrations", "SLA guarantee"],
      popular: false
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900 ${className || ''}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ResponsivePro
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors">
                  Testimonials
                </a>
                <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </a>
                <Button size="sm" className="ml-4">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
                <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 block px-3 py-2 text-base font-medium">
                  Features
                </a>
                <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 block px-3 py-2 text-base font-medium">
                  Testimonials
                </a>
                <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 block px-3 py-2 text-base font-medium">
                  Pricing
                </a>
                <div className="px-3 py-2">
                  <Button className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            {/* Device Icons */}
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-8">
              <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Tablet className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Monitor className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>

            <Badge className="mb-4 sm:mb-6 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Fully Responsive Design
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Perfect on
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Every Device</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
              Experience seamless performance across all screen sizes. From mobile phones to ultra-wide monitors,
              our platform adapts perfectly to provide the best user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for Modern Workflows
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to work efficiently, whether you're on your phone during commute or at your desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See what our customers have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the plan that's right for your team. All plans include our responsive design guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500 shadow-lg' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm sm:text-base">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-purple-600 hover:bg-purple-700'
                        : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-4">ResponsivePro</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Building the future of responsive web applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 ResponsivePro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};