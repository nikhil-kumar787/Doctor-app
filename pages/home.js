import Head from "next/head";
import Banner from "../components/Banner";
import BookingProcess from "../components/BookingProcess";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import PatientsList from "../components/PatientsList";
import Services from "../components/Services";

export default function HomeScreen() {
  return (
    <div className="">
      <Head>
        <title>Doctor App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-4xl font-semibold py-8">Our Services</h2>
          {/* <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'> */}
          <Services />
          <BookingProcess />
          {/* </div> */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
