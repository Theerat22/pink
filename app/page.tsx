import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import IconGrid from "@/app/components/Card";

export default function Port() {

  return (
    <>
      <Navbar
        navigationType={"single"}
        items={[
          {
            name: "Home",
            path: "#home",
          },
          { name: "Portfolio", path: "#" },
          {
            name: "Activities",
            path: "#activities",
          },
        ]}
      />
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="justify-center mt-24">
            <h1 className="text-4xl text-center md:text-6xl font-semibold mb-4 lg:text-5xl ">
                รายชื่อนักกีฬาสีชมพู
            </h1>
        </div>
        <div className="w-full flex justify-center">
          <IconGrid />
        </div>
      </div>
      <Footer />
      
    </>
  );
}