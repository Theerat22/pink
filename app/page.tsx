import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import IconGrid from "@/app/components/Card";

export default function Port() {

  return (
    <>
      <Navbar />
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="justify-center mt-24">
            <h1 className="text-4xl text-center text-black md:text-6xl font-semibold mb-4 lg:text-5xl ">
                รายชื่อนักกีฬา <span className="text-pink-500 underline">สีชมพู</span>
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