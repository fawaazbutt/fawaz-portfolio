import { Button } from "@nextui-org/button";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="max-w-md min-w-xl  p-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ">
        <div className="bg-red-500 flex flex-col justify-center items-center">
          <Image
            src="https://picsum.photos/200/200"
            alt="profile picture"
            width={200}
            height={200}
          />

          <h2>Ammar Qureshi</h2>
        </div>
        <div>
          <Button variant="flat" color="primary" className="w-full">
            Github
          </Button>
        </div>
      </div>
    </main>
  );
}
