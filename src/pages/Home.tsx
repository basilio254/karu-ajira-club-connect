
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Lightbulb, Award, DollarSign } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-ajira-blue to-ajira-teal text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Unlock Your Digital Future with KARU AJIRA
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Access premium digital skills training, expert mentorship, and an exclusive community of professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="bg-white text-ajira-blue hover:bg-gray-100 text-base px-8 py-6">
                  Join Now
                </Button>
              </Link>
              <Link to="/skills">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">
                  Explore Skills
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 p-4 rounded-lg flex flex-col items-center text-center">
                  <Lightbulb className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold">Digital Skills</h3>
                  <p className="text-sm opacity-90">50+ in-demand courses</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg flex flex-col items-center text-center">
                  <Users className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold">Expert Mentors</h3>
                  <p className="text-sm opacity-90">1-on-1 guidance</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg flex flex-col items-center text-center">
                  <Award className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold">Certificates</h3>
                  <p className="text-sm opacity-90">Recognized industry-wide</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg flex flex-col items-center text-center">
                  <DollarSign className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold">Job Access</h3>
                  <p className="text-sm opacity-90">Exclusive opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ajira-darkBlue mb-4">Featured Digital Skills</h2>
            <p className="max-w-2xl mx-auto text-ajira-gray">
              Master the most in-demand digital skills that employers are looking for today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Learn front-end and back-end development with modern frameworks and tools.",
                image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "Digital Marketing",
                description: "Master SEO, social media marketing, content strategy, and PPC advertising.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "Data Analysis",
                description: "Learn how to analyze and visualize data to drive business decisions.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              }
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={skill.image} 
                    alt={skill.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ajira-darkBlue mb-2">{skill.title}</h3>
                  <p className="text-ajira-gray mb-4">{skill.description}</p>
                  <Link to="/register">
                    <Button className="w-full bg-ajira-blue hover:bg-ajira-lightBlue text-white">
                      Start Learning
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/skills">
              <Button variant="outline" className="border-ajira-blue text-ajira-blue hover:bg-ajira-blue hover:text-white">
                View All Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ajira-darkBlue mb-4">How It Works</h2>
            <p className="max-w-2xl mx-auto text-ajira-gray">
              Our simple process to get you started on your digital skills journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Register",
                description: "Create an account and pay a one-time registration fee to unlock all features."
              },
              {
                step: "2",
                title: "Choose Skills",
                description: "Select from our wide range of digital skills courses that match your goals."
              },
              {
                step: "3",
                title: "Get Mentored",
                description: "Connect with expert mentors who will guide you through your learning journey."
              },
              {
                step: "4",
                title: "Join Community",
                description: "Access exclusive social media groups and networking opportunities."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-ajira-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-ajira-darkBlue mb-2">{item.title}</h3>
                <p className="text-ajira-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-ajira-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              See how KARU AJIRA has helped our members achieve their career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Mwangi",
                role: "Web Developer",
                quote: "The web development course and mentorship at KARU AJIRA helped me land my dream job at a top tech company.",
                image: "https://randomuser.me/api/portraits/men/1.jpg"
              },
              {
                name: "Sarah Kamau",
                role: "Digital Marketer",
                quote: "I was able to start my own digital marketing agency after completing the comprehensive training at KARU AJIRA.",
                image: "https://randomuser.me/api/portraits/women/2.jpg"
              },
              {
                name: "David Ochieng",
                role: "Data Analyst",
                quote: "The data analysis skills I learned here helped me transition from a clerk to a data analyst, doubling my salary.",
                image: "https://randomuser.me/api/portraits/men/3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm opacity-90">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic opacity-90">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-ajira-darkBlue mb-4">Ready to Start Your Journey?</h2>
          <p className="max-w-2xl mx-auto text-ajira-gray mb-8">
            Join KARU AJIRA CLUB HUB today and take the first step towards mastering digital skills, 
            getting expert mentorship, and unlocking exclusive career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="bg-ajira-blue hover:bg-ajira-lightBlue text-white text-base px-8 py-6">
                Register Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-ajira-blue text-ajira-blue hover:bg-ajira-blue hover:text-white text-base px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-ajira-gray">
            <div className="flex items-center">
              <CheckCircle className="text-ajira-blue mr-2 h-5 w-5" />
              <span>One-time registration fee</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-ajira-blue mr-2 h-5 w-5" />
              <span>Unlimited course access</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-ajira-blue mr-2 h-5 w-5" />
              <span>Exclusive community membership</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
