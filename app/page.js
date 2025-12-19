import Features from "@/components/Features";


export default function Home() {
  return (
    <div className="flex flex-col text-center">
      <div>
        <h1 className="font-extrabold text-2xl md:text-4xl mt-15">Welocome to MyWebsite</h1>
      <p className="mt-4 text-sm text-gray-500">This is a simple clean website built with NextJs and tailwind CSS Prefect for biginners learning web development</p>
      </div>
      <div className="my-6 space-x-3">
        <button className="text-white bg-blue-600 rounded-sm px-2 py-2 font-semibold text-sm">Get Started</button>
        <button className="text-gray-700 border border-gray-400 rounded-sm px-2 py-2 font-semibold text-sm">Learn More</button>
      </div>
      <div className="mt-10">
        <Features/>
     </div>
    </div>
  );
}
