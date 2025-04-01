
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="h-40 overflow-hidden">
        <img 
          src={skill.image} 
          alt={skill.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{skill.title}</CardTitle>
        <CardDescription>{skill.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          {skill.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center text-sm text-ajira-gray">
          <span>{skill.modules} modules</span>
          <span className="mx-2">•</span>
          <span>{skill.duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to="/register" className="w-full">
          <Button className="w-full bg-ajira-blue hover:bg-ajira-lightBlue">
            Start Learning
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const Skills = () => {
  const skills = {
    development: [
      {
        title: "Web Development Fundamentals",
        description: "Learn HTML, CSS, and JavaScript from scratch",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["HTML5 & CSS3", "JavaScript Basics", "Responsive Design", "Project-Based Learning"],
        modules: 12,
        duration: "8 weeks"
      },
      {
        title: "Frontend Development with React",
        description: "Build modern interactive web applications",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["React Fundamentals", "State Management", "Hooks & Context API", "Real-world Projects"],
        modules: 10,
        duration: "10 weeks"
      },
      {
        title: "Backend Development with Node.js",
        description: "Create powerful server-side applications",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Node.js Basics", "Express Framework", "REST APIs", "Database Integration"],
        modules: 8,
        duration: "8 weeks"
      }
    ],
    marketing: [
      {
        title: "Digital Marketing Essentials",
        description: "Master the fundamentals of online marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Marketing Strategy", "SEO Basics", "Content Marketing", "Social Media Marketing"],
        modules: 10,
        duration: "6 weeks"
      },
      {
        title: "Search Engine Optimization (SEO)",
        description: "Drive organic traffic to websites and content",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["On-page SEO", "Off-page SEO", "Technical SEO", "SEO Analytics"],
        modules: 8,
        duration: "7 weeks"
      },
      {
        title: "Social Media Marketing",
        description: "Build and grow brand presence on social platforms",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Platform Strategy", "Content Creation", "Community Building", "Paid Advertising"],
        modules: 9,
        duration: "6 weeks"
      }
    ],
    data: [
      {
        title: "Data Analysis Fundamentals",
        description: "Learn to analyze and visualize data effectively",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Data Collection", "Data Cleaning", "Statistical Analysis", "Data Visualization"],
        modules: 8,
        duration: "8 weeks"
      },
      {
        title: "Python for Data Science",
        description: "Use Python to extract insights from data",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Python Basics", "Pandas & NumPy", "Data Visualization", "Machine Learning Intro"],
        modules: 10,
        duration: "12 weeks"
      },
      {
        title: "Business Intelligence",
        description: "Transform data into actionable business insights",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["BI Tools", "Dashboard Design", "KPI Tracking", "Decision Support"],
        modules: 7,
        duration: "7 weeks"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-ajira-darkBlue mb-4">Digital Skills Catalog</h1>
          <p className="text-ajira-gray">
            Browse our comprehensive collection of digital skills courses. Register once to get unlimited access to all courses and mentorship.
          </p>
        </div>
        
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search skills, courses, or topics..." 
              className="pl-10 bg-white"
            />
          </div>
        </div>
        
        <Tabs defaultValue="development" className="w-full">
          <TabsList className="mb-8 justify-center">
            <TabsTrigger value="development">Web Development</TabsTrigger>
            <TabsTrigger value="marketing">Digital Marketing</TabsTrigger>
            <TabsTrigger value="data">Data Analysis</TabsTrigger>
            <TabsTrigger value="all">View All</TabsTrigger>
          </TabsList>
          
          <TabsContent value="development">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.development.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marketing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.marketing.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.data.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...skills.development, ...skills.marketing, ...skills.data].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-ajira-darkBlue mb-4">Ready to Start Learning?</h2>
          <p className="text-ajira-gray max-w-2xl mx-auto mb-6">
            Register once to gain unlimited access to all our digital skills courses, 
            mentorship programs, and our exclusive community.
          </p>
          <Link to="/register">
            <Button className="bg-ajira-blue hover:bg-ajira-lightBlue text-white px-8 py-6 text-lg">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
