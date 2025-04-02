
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import RegisterForm from "@/components/register/RegisterForm";
import SuccessView from "@/components/register/SuccessView";

const Register = () => {
  const { toast } = useToast();
  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleSuccessfulRegistration = () => {
    setIsRegistered(true);
    toast({
      title: "Registration Successful!",
      description: "Welcome to KARU AJIRA CLUB HUB!",
      variant: "default"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {!isRegistered ? (
            <Card>
              <CardContent className="pt-6">
                <RegisterForm onSuccess={handleSuccessfulRegistration} />
              </CardContent>
            </Card>
          ) : (
            <SuccessView />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
