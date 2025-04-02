
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import RegisterForm from "@/components/register/RegisterForm";
import SuccessView from "@/components/register/SuccessView";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            {!isRegistered ? (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Create Your Account</CardTitle>
                  <CardDescription className="text-center">
                    Join KARU AJIRA CLUB HUB to access digital skills and mentorship
                  </CardDescription>
                </CardHeader>
                <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
              </>
            ) : (
              <SuccessView />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
