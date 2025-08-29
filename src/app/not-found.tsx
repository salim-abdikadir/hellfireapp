import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-3  items-center justify-center min-h-screen w-full text-4xl font-bold bg-orange-200">
      <h1>oops 🙀 404 - Page Not Found</h1>
      <Button>
        <Link href="/todos">Go Back</Link>
      </Button>
    </div>
  );
};

export default NotFound;
