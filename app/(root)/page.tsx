import Testimonials from "@/components/shared/Testimonials";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <div className="w-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div className="text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold pt-20">
          Centralized Hub for Your App’s Essentials
        </h1>
        <p className="pt-2 my-4">
          connectivity grid tool helps you store all the important details of
          multiple applications at one place!
        </p>
        <Link href={"/sign-up"}>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2  mx-auto"
          >
            <span>Get Started,It's free!</span>
          </HoverBorderGradient>
        </Link>
        <Testimonials/>
        <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                All the details you need<br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  At one place!
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/linear.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      </div>
      
    </div>
  );
}
