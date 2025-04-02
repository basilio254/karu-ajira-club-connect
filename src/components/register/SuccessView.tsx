
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SuccessView = () => {
  return (
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
  );
};

export default SuccessView;
