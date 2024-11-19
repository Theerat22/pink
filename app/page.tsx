import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import IconGrid from "@/app/components/Card";

export default function Port() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center">
        <section className="w-full px-4 sm:px-6 lg:px-8 mt-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            รายชื่อนักกีฬา <span className="text-pink-500 underline">สีชมพู</span>
          </h1>
        </section>
        <section className="w-full px-4 mb-10 sm:px-6 lg:px-8">
          <IconGrid />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
