
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, CheckCircle } from "lucide-react";

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure your passwords match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false);
      setIsRegistered(true);
      toast({
        title: "Registration Successful!",
        description: "Welcome to KARU AJIRA CLUB HUB!",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {!isRegistered ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Create Your Account</CardTitle>
                <CardDescription className="text-center">
                  Join KARU AJIRA CLUB HUB to access digital skills and mentorship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 712 345 678"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6 bg-ajira-blue hover:bg-ajira-lightBlue" 
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...
                      </>
                    ) : (
                      "Register"
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <p className="text-sm text-gray-500 mt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-ajira-blue hover:underline">
                    Login
                  </Link>
                </p>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl text-center">Registration Complete!</CardTitle>
                <CardDescription className="text-center">
                  Welcome to KARU AJIRA CLUB HUB
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">
                  Thank you for joining our community. You now have access to all digital skills courses, mentorship programs, and our exclusive social media groups.
                </p>
                <div className="flex flex-col gap-4">
                  <Link to="/dashboard">
                    <Button className="w-full bg-ajira-blue hover:bg-ajira-lightBlue">
                      Go to Dashboard
                    </Button>
                  </Link>
                  <Link to="/skills">
                    <Button variant="outline" className="w-full">
                      Explore Skills
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
