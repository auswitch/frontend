import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Route } from "@/config/Route";

export default function CMUOAuthCallback() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-screen h-screen gap-10 -rounded font-extrabold justify-center items-center">
      <h1 className="text-3xl whitespace-break-spaces">Redirecting ...</h1>
      <div className="justify-center flex gap-10 text-xl">
        <Button
          variant="destructive"
          className="!text-lg"
          onClick={() => router.back()}
        >
          Back
        </Button>
        <Button
          className="!text-lg bg-blue-500 hover:bg-blue-600"
          onClick={() => router.push(Route.SelectDepartment)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
