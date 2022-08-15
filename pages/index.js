import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Project M²</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center pt-24 pb-32">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold text-center">
          Accessible Financial Education
          <br /> Built For A{" "}
          <span className="underline underline-offset-4">New Generation</span>
        </h1>
        <h3 className="max-w-3xl text-center text-gray-400 text-xl mt-8">
          Discover how Project Morals × Money can help guide your personal
          financial journey
        </h3>
        <button className="hover:ring-4 ring-white/25 mt-12 px-4 py-2 bg-white rounded-lg text-gray-800 text-lg font-semibold">
          Get Started →
        </button>
        <div className="relative mt-16 flex">
          <div className="w-[720px] h-[480px] card-shadow rounded-2xl bg-gray-800/80 p-4">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-red-400"></div>
              <div className="w-4 h-4 rounded-full bg-amber-400"></div>
              <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="col-span-2 w-full h-56 bg-white/20 rounded-lg"></div>
              <div className="flex flex-col gap-3">
                <div className="w-full bg-white/20 h-full rounded-lg"></div>
                <div className="w-full bg-white/20 h-full rounded-lg"></div>
                <div className="w-full bg-white/20 h-full rounded-lg"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="col-span-2 gap-3 flex flex-col">
                <div className="w-full h-3 bg-white/30 rounded-lg"></div>
                <div className="w-2/3 h-3 bg-white/30 rounded-lg"></div>
                <div className="mt-6 w-full h-3 bg-white/20 rounded-lg"></div>
                <div className="w-full h-3 bg-white/20 rounded-lg"></div>
                <div className="w-full h-3 bg-white/20 rounded-lg"></div>
                <div className="w-1/3 h-3 bg-white/20 rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="gradient -z-10 absolute -inset-6"></div>
        </div>
      </div>
    </>
  );
}
