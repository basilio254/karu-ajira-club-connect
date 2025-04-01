
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Laptop, Users, Calendar, MessageSquare, BookOpen, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ajira-darkBlue">Welcome, John!</h1>
          <p className="text-ajira-gray">Manage your digital skills journey and mentorship programs.</p>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">My Skills</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-ajira-gray">
                    Skills in Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-ajira-gray mt-1">
                    4 more recommended
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-ajira-gray">
                    Upcoming Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-ajira-gray mt-1">
                    Next: Tomorrow, 10:00 AM
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-ajira-gray">
                    Certificates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-ajira-gray mt-1">
                    2 in progress
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-ajira-gray">
                    Community Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-ajira-gray mt-1">
                    5 new responses
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Continue Learning</CardTitle>
                  <CardDescription>Pick up where you left off</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Web Development Fundamentals", progress: 65 },
                      { title: "Digital Marketing Essentials", progress: 32 },
                      { title: "Data Analysis with Python", progress: 10 }
                    ].map((course, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{course.title}</h3>
                          <span className="text-sm text-ajira-gray">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-ajira-blue h-full rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <Button variant="link" className="mt-2 p-0 h-auto text-ajira-blue">
                          Continue <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Upcoming Mentorship</CardTitle>
                  <CardDescription>Your scheduled sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Career Guidance Session",
                        mentor: "Sarah Kamau",
                        date: "June 12, 2023",
                        time: "10:00 AM - 11:00 AM" 
                      },
                      { 
                        title: "Web Development Q&A",
                        mentor: "David Mwangi",
                        date: "June 15, 2023",
                        time: "2:00 PM - 3:00 PM" 
                      }
                    ].map((session, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium">{session.title}</h3>
                        <p className="text-sm text-ajira-gray">Mentor: {session.mentor}</p>
                        <div className="flex items-center mt-2 text-sm">
                          <Calendar className="h-4 w-4 mr-1 text-ajira-blue" />
                          <span>{session.date}</span>
                          <span className="mx-2">•</span>
                          <span>{session.time}</span>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <Button size="sm" className="bg-ajira-blue hover:bg-ajira-lightBlue">
                            Join
                          </Button>
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="skills">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Web Development",
                  description: "Learn HTML, CSS, JavaScript, and modern frameworks",
                  courses: 12,
                  icon: <Laptop className="h-8 w-8 text-ajira-blue" />
                },
                {
                  title: "Digital Marketing",
                  description: "Master SEO, social media, and content marketing",
                  courses: 10,
                  icon: <BookOpen className="h-8 w-8 text-ajira-blue" />
                },
                {
                  title: "Data Analysis",
                  description: "Learn data processing, visualization, and insights",
                  courses: 8,
                  icon: <BookOpen className="h-8 w-8 text-ajira-blue" />
                },
                {
                  title: "UI/UX Design",
                  description: "Create beautiful and functional user interfaces",
                  courses: 7,
                  icon: <BookOpen className="h-8 w-8 text-ajira-blue" />
                },
                {
                  title: "Project Management",
                  description: "Learn to manage digital projects efficiently",
                  courses: 6,
                  icon: <BookOpen className="h-8 w-8 text-ajira-blue" />
                },
                {
                  title: "Content Creation",
                  description: "Master writing, video, and podcast production",
                  courses: 9,
                  icon: <BookOpen className="h-8 w-8 text-ajira-blue" />
                }
              ].map((skill, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{skill.icon}</div>
                    <CardTitle>{skill.title}</CardTitle>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-ajira-gray mb-4">{skill.courses} courses available</p>
                    <Button className="w-full bg-ajira-blue hover:bg-ajira-lightBlue">
                      Explore Courses
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mentorship">
            <Card>
              <CardHeader>
                <CardTitle>Mentorship Programs</CardTitle>
                <CardDescription>Connect with industry experts for guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      name: "John Mwangi",
                      role: "Senior Web Developer",
                      experience: "10+ years experience",
                      specialization: "Frontend Development, React, Angular",
                      image: "https://randomuser.me/api/portraits/men/1.jpg"
                    },
                    {
                      name: "Sarah Kamau",
                      role: "Digital Marketing Specialist",
                      experience: "8+ years experience",
                      specialization: "SEO, Content Strategy, PPC",
                      image: "https://randomuser.me/api/portraits/women/2.jpg"
                    },
                    {
                      name: "David Ochieng",
                      role: "Data Scientist",
                      experience: "7+ years experience",
                      specialization: "Python, Machine Learning, Data Visualization",
                      image: "https://randomuser.me/api/portraits/men/3.jpg"
                    },
                    {
                      name: "Mary Njeri",
                      role: "UX/UI Designer",
                      experience: "9+ years experience",
                      specialization: "User Research, Wireframing, Prototyping",
                      image: "https://randomuser.me/api/portraits/women/4.jpg"
                    }
                  ].map((mentor, index) => (
                    <div key={index} className="flex bg-gray-50 p-4 rounded-lg">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name} 
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{mentor.name}</h3>
                        <p className="text-sm text-ajira-gray">{mentor.role}</p>
                        <p className="text-xs text-ajira-gray mt-1">{mentor.experience}</p>
                        <p className="text-xs text-ajira-gray mt-1">
                          <span className="font-medium">Specializes in:</span> {mentor.specialization}
                        </p>
                        <Button size="sm" className="mt-2 bg-ajira-blue hover:bg-ajira-lightBlue">
                          Book Session
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Community & Social Media</CardTitle>
                <CardDescription>Connect with other members and join our exclusive groups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      platform: "Facebook Group",
                      members: "2,500+ members",
                      description: "Daily tips, job postings, and member discussions",
                      icon: <Facebook className="h-10 w-10 text-[#1877F2]" />,
                      color: "bg-[#1877F2]/10"
                    },
                    {
                      platform: "LinkedIn Network",
                      members: "1,800+ connections",
                      description: "Professional networking and career opportunities",
                      icon: <Linkedin className="h-10 w-10 text-[#0A66C2]" />,
                      color: "bg-[#0A66C2]/10"
                    },
                    {
                      platform: "Twitter Community",
                      members: "3,200+ followers",
                      description: "Latest industry news and quick learning tips",
                      icon: <Twitter className="h-10 w-10 text-[#1DA1F2]" />,
                      color: "bg-[#1DA1F2]/10"
                    },
                    {
                      platform: "Instagram Page",
                      members: "4,100+ followers",
                      description: "Visual content, success stories, and events",
                      icon: <Instagram className="h-10 w-10 text-[#E4405F]" />,
                      color: "bg-[#E4405F]/10"
                    },
                    {
                      platform: "YouTube Channel",
                      members: "1,500+ subscribers",
                      description: "Tutorial videos, expert interviews, and workshops",
                      icon: <Youtube className="h-10 w-10 text-[#FF0000]" />,
                      color: "bg-[#FF0000]/10"
                    },
                    {
                      platform: "Community Forum",
                      members: "5,000+ users",
                      description: "24/7 Q&A, project sharing, and feedback",
                      icon: <MessageSquare className="h-10 w-10 text-ajira-blue" />,
                      color: "bg-ajira-blue/10"
                    }
                  ].map((social, index) => (
                    <Card key={index} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                          {social.icon}
                        </div>
                        <h3 className="font-medium text-lg">{social.platform}</h3>
                        <p className="text-sm text-ajira-blue font-medium">{social.members}</p>
                        <p className="text-sm text-ajira-gray mt-2">{social.description}</p>
                        <Button className="w-full mt-4 bg-ajira-blue hover:bg-ajira-lightBlue">
                          Join Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
