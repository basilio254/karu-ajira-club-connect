
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, CreditCard, CheckCircle } from "lucide-react";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

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
      setStep(2);
    }, 1500);
  };

  const handlePayment = () => {
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setPaymentCompleted(true);
      toast({
        title: "Registration Successful!",
        description: "Your payment has been processed. Welcome to KARU AJIRA CLUB HUB!",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 1 ? 'bg-ajira-blue text-white' : (paymentCompleted ? 'bg-green-500 text-white' : 'bg-ajira-blue text-white')}`}>
                {paymentCompleted ? <CheckCircle className="h-5 w-5" /> : "1"}
              </div>
              <div className={`h-1 w-24 ${step === 1 ? 'bg-gray-300' : 'bg-ajira-blue'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 2 ? 'bg-ajira-blue text-white' : (paymentCompleted ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600')}`}>
                {paymentCompleted ? <CheckCircle className="h-5 w-5" /> : "2"}
              </div>
            </div>
            <div className="flex justify-center text-sm mt-2">
              <span className="w-32 text-center">Account Information</span>
              <span className="w-32 text-center">Registration Payment</span>
            </div>
          </div>

          {step === 1 && (
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
                      "Continue to Payment"
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
          )}

          {step === 2 && !paymentCompleted && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Registration Payment</CardTitle>
                <CardDescription className="text-center">
                  One-time registration fee to access all features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 border rounded-lg p-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Registration Fee</span>
                    <span className="font-semibold">KES 2,500</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>KES 2,500</span>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                      <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-ajira-blue hover:bg-ajira-lightBlue" 
                  onClick={handlePayment}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing Payment...
                    </>
                  ) : (
                    "Pay Registration Fee"
                  )}
                </Button>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    By proceeding, you agree to our{" "}
                    <Link to="/terms" className="text-ajira-blue hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-ajira-blue hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {paymentCompleted && (
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
