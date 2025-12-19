
import { Heart, ArrowBigUpDash } from "lucide-react";
const Features = () => {
  return (
      <div>
      <div className="grid space-y-4 md:grid-cols-3 md:space-y-0 md:gap-5">
        <div className="shadow-sm p-3 hover:shadow-xl">
         <div className="flex justify-center"> <ArrowBigUpDash className="text-blue-500 bg-blue-100 p-2" size={50}/></div>
          <h2 className="font-semibold pt-2">Fast</h2>
          <p className="text-xs pt-1.5">Built with Modern Tech for OPtimal Performance</p>
        </div>
        <div className="shadow-sm p-3 hover:shadow-xl">
         <div className="flex justify-center"> <Heart className="text-green-500 bg-green-100 p-2" size={50}/></div>
          <h2 className="font-semibold pt-2">Fast</h2>
          <p className="text-xs pt-1.5">Built with Modern Tech for OPtimal Performance</p>
        </div>
        <div className="shadow-sm p-3 hover:shadow-xl">
         <div className="flex justify-center"> <ArrowBigUpDash className="text-purple-500 bg-purple-100 p-2" size={50}/></div>
          <h2 className="font-semibold pt-2">Fast</h2>
          <p className="text-xs pt-1.5">Built with Modern Tech for OPtimal Performance</p>
        </div>
      </div>
    </div>
  )
}

export default Features