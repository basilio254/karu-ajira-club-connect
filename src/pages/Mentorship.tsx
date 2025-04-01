
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Calendar, Clock, CheckCircle, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const MentorCard = ({ mentor }: { mentor: any }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <img 
          src={mentor.cover} 
          alt="Cover" 
          className="w-full h-28 object-cover"
        />
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img 
            src={mentor.avatar} 
            alt={mentor.name} 
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>
      <CardHeader className="pt-16 pb-2 text-center">
        <CardTitle className="text-xl">{mentor.name}</CardTitle>
        <div className="flex justify-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < mentor.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          ))}
          <span className="text-sm ml-1 text-ajira-gray">({mentor.reviews})</span>
        </div>
        <CardDescription className="mt-1">{mentor.role}</CardDescription>
      </CardHeader>
      <CardContent className="text-center pb-2">
        <div className="flex justify-center gap-2 mb-4">
          {mentor.skills.map((skill: string, index: number) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-ajira-darkBlue hover:bg-gray-200">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center gap-4 text-sm text-ajira-gray">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{mentor.students} students</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{mentor.experience} experience</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Link to="/register" className="w-full">
          <Button className="w-full bg-ajira-blue hover:bg-ajira-lightBlue">
            Book Session
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const Mentorship = () => {
  const mentors = {
    technology: [
      {
        name: "John Mwangi",
        role: "Senior Software Engineer",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        cover: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        skills: ["Web Dev", "React", "Node.js"],
        rating: 5,
        reviews: 48,
        students: 126,
        experience: "10+ years"
      },
      {
        name: "Michael Kamau",
        role: "Frontend Developer",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        cover: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        skills: ["UI/UX", "JavaScript", "Vue"],
        rating: 4,
        reviews: 32,
        students: 98,
        experience: "7+ years"
      },
      {
        name: "Grace Wanjiku",
        role: "Mobile App Developer",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        cover: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        skills: ["iOS", "Android", "Flutter"],
        rating: 5,
        reviews: 29,
        students: 87,
        experience: "8+ years"
      }
    ],
    marketing: [
      {
        name: "Sarah Kamau",
        role: "Digital Marketing Specialist",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        cover: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        skills: ["SEO", "Content", "PPC"],
        rating: 5,
        reviews: 52,
        students: 138,
        experience: "9+ years"
      },
      {
        name: "Alex Omondi",
        role: "Social Media Expert",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        cover: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        skills: ["Social", "Branding", "Analytics"],
        rating: 4,
        reviews: 37,
        students: 112,
        experience: "6+ years"
      },
      {
        name: "Mary Nyambura",
        role: "Content Strategist",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        cover: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        skills: ["Content", "Copywriting", "Storytelling"],
        rating: 5,
        reviews: 41,
        students: 103,
        experience: "7+ years"
      }
    ],
    data: [
      {
        name: "David Ochieng",
        role: "Data Scientist",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        skills: ["Python", "ML", "Analytics"],
        rating: 5,
        reviews: 39,
        students: 94,
        experience: "8+ years"
      },
      {
        name: "Faith Njeri",
        role: "Business Intelligence Analyst",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        skills: ["Tableau", "SQL", "Reporting"],
        rating: 4,
        reviews: 28,
        students: 76,
        experience: "6+ years"
      },
      {
        name: "Peter Kariuki",
        role: "Database Administrator",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        skills: ["SQL", "NoSQL", "Data Modeling"],
        rating: 4,
        reviews: 31,
        students: 82,
        experience: "9+ years"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-ajira-darkBlue mb-4">Expert Mentorship</h1>
          <p className="text-ajira-gray">
            Connect with experienced professionals who will guide you on your journey to mastering digital skills.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <Users className="h-10 w-10 text-ajira-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">1-on-1 Guidance</h3>
              <p className="text-ajira-gray text-sm">
                Get personalized attention and feedback tailored to your specific needs and goals.
              </p>
            </div>
            <div className="text-center p-4">
              <Calendar className="h-10 w-10 text-ajira-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-ajira-gray text-sm">
                Book mentorship sessions at times that work best for your schedule.
              </p>
            </div>
            <div className="text-center p-4">
              <ThumbsUp className="h-10 w-10 text-ajira-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Proven Experts</h3>
              <p className="text-ajira-gray text-sm">
                Learn from mentors with verified industry experience and positive reviews.
              </p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="technology" className="w-full">
          <TabsList className="mb-8 justify-center">
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="all">View All</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technology">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.technology.map((mentor, index) => (
                <MentorCard key={index} mentor={mentor} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marketing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.marketing.map((mentor, index) => (
                <MentorCard key={index} mentor={mentor} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.data.map((mentor, index) => (
                <MentorCard key={index} mentor={mentor} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...mentors.technology, ...mentors.marketing, ...mentors.data].map((mentor, index) => (
                <MentorCard key={index} mentor={mentor} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-ajira-darkBlue mb-4">How Our Mentorship Works</h2>
            <p className="text-ajira-gray mb-8">
              Get guided by experts who have walked the path you're on. Our mentorship program is designed to accelerate your learning and career growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-ajira-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Register</h3>
                <p className="text-sm text-ajira-gray">
                  Pay a one-time registration fee to access our mentorship program.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-ajira-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Book a Session</h3>
                <p className="text-sm text-ajira-gray">
                  Choose your mentor and schedule a session at your preferred time.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-ajira-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Grow Your Skills</h3>
                <p className="text-sm text-ajira-gray">
                  Get personalized guidance and feedback to accelerate your learning.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Link to="/register">
                <Button className="bg-ajira-blue hover:bg-ajira-lightBlue text-white px-8 py-6 text-lg">
                  Join Mentorship Program
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-ajira-darkBlue mb-4">Mentorship Testimonials</h2>
          <p className="text-ajira-gray max-w-2xl mx-auto mb-8">
            See what our members say about their mentorship experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "The mentorship program completely transformed my approach to web development. My mentor provided practical insights that no tutorial could offer.",
                name: "James Kimani",
                role: "Frontend Developer",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg"
              },
              {
                quote: "Having a personal mentor to guide me through digital marketing strategies helped me land my dream job within just three months.",
                name: "Lucy Wambui",
                role: "Digital Marketing Specialist",
                avatar: "https://randomuser.me/api/portraits/women/12.jpg"
              },
              {
                quote: "The personalized feedback on my data analysis projects was invaluable. My mentor helped me identify and fill knowledge gaps I didn't even know I had.",
                name: "Brian Omondi",
                role: "Data Analyst",
                avatar: "https://randomuser.me/api/portraits/men/13.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-ajira-gray mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-ajira-gray">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
