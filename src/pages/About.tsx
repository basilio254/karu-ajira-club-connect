
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Shield, Globe, CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-ajira-darkBlue mb-4">About KARU AJIRA CLUB HUB</h1>
          <p className="text-lg text-ajira-gray mb-8">
            Our mission is to empower individuals with in-demand digital skills and mentorship to thrive in today's digital economy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button className="bg-ajira-blue hover:bg-ajira-lightBlue text-white">
                Join Our Community
              </Button>
            </Link>
            <Link to="/skills">
              <Button variant="outline" className="border-ajira-blue text-ajira-blue hover:bg-ajira-blue hover:text-white">
                Explore Our Offerings
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-ajira-darkBlue mb-4">Our Story</h2>
            <p className="text-ajira-gray mb-4">
              KARU AJIRA CLUB HUB was founded in 2020 with a simple yet powerful vision: to bridge the digital skills gap in Kenya and provide accessible, quality digital education to all.
            </p>
            <p className="text-ajira-gray mb-4">
              What started as a small initiative with just 50 students has grown into a thriving community of learners, mentors, and industry professionals all united by a passion for digital skills and innovation.
            </p>
            <p className="text-ajira-gray">
              Today, we are proud to have helped thousands of individuals transform their careers and lives through practical digital skills training and personalized mentorship.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-ajira-blue mb-2">5,000+</div>
                <p className="text-sm text-ajira-gray">Active Members</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ajira-blue mb-2">50+</div>
                <p className="text-sm text-ajira-gray">Digital Courses</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ajira-blue mb-2">30+</div>
                <p className="text-sm text-ajira-gray">Expert Mentors</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ajira-blue mb-2">85%</div>
                <p className="text-sm text-ajira-gray">Employment Rate</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ajira-darkBlue mb-4 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-ajira-blue/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-ajira-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-sm text-ajira-gray">
                  We believe in the power of community and collaborative learning to accelerate growth and development.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-ajira-blue/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-ajira-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-ajira-gray">
                  We are committed to delivering high-quality, relevant, and up-to-date digital skills training.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-ajira-blue/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-ajira-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-ajira-gray">
                  We operate with transparency, honesty, and ethical practices in all our interactions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-ajira-blue/10 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-ajira-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-ajira-gray">
                  We continuously evolve our curriculum to reflect the latest digital trends and technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ajira-darkBlue mb-4 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                name: "Daniel Muthui",
                role: "Founder & CEO",
                bio: "Daniel has over 15 years of experience in technology and education, with a passion for digital skills development in Kenya.",
                image: "https://randomuser.me/api/portraits/men/41.jpg"
              },
              {
                name: "Grace Wangari",
                role: "Head of Education",
                bio: "Grace brings her expertise in curriculum development and educational technology to ensure high-quality learning experiences.",
                image: "https://randomuser.me/api/portraits/women/42.jpg"
              },
              {
                name: "Samuel Omondi",
                role: "Mentorship Director",
                bio: "Samuel oversees our mentorship program, leveraging his extensive network of industry professionals and expertise in career development.",
                image: "https://randomuser.me/api/portraits/men/43.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-ajira-blue mb-3">{member.role}</p>
                  <p className="text-sm text-ajira-gray">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-ajira-darkBlue mb-4 text-center">Why Choose KARU AJIRA?</h2>
            <div className="grid gap-4 mt-6">
              {[
                "One-time registration fee for unlimited access to all courses and resources",
                "Personalized mentorship from industry experts",
                "Practical, project-based learning approach",
                "Exclusive access to social media communities and networking opportunities",
                "Job placement assistance and career guidance",
                "Constantly updated curriculum reflecting current industry demands"
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-ajira-gray">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ajira-darkBlue mb-4 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              {
                question: "How much is the registration fee?",
                answer: "Our one-time registration fee is KES 2,500. This gives you lifetime access to all our digital skills courses, mentorship programs, and exclusive community groups."
              },
              {
                question: "Do I need any prior experience to join?",
                answer: "No prior experience is required. Our courses are designed for all skill levels, from complete beginners to advanced practitioners looking to enhance their skills."
              },
              {
                question: "How do I access the courses?",
                answer: "After registration, you'll receive login credentials to access our learning platform where all courses, resources, and mentorship booking are available."
              },
              {
                question: "Can I book multiple mentorship sessions?",
                answer: "Yes, you can book as many mentorship sessions as you need. Each session is scheduled based on both your availability and the mentor's schedule."
              },
              {
                question: "Do you offer job placement?",
                answer: "While we don't guarantee job placement, we provide career guidance, resume reviews, interview preparation, and access to our network of hiring partners."
              },
              {
                question: "Are there certificates for completed courses?",
                answer: "Yes, we provide certificates of completion for all courses. These certificates are recognized by many employers in the industry."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-ajira-darkBlue">{faq.question}</h3>
                <p className="text-ajira-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-ajira-blue text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Skills?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join KARU AJIRA CLUB HUB today and take the first step towards mastering in-demand digital skills, 
            getting expert mentorship, and becoming part of our thriving community.
          </p>
          <Link to="/register">
            <Button className="bg-white text-ajira-blue hover:bg-gray-100 px-8 py-6 text-lg">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
