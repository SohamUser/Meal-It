import ImageSection from "./ImageSection"
import { Badge } from "./ui/badge"

const Top = () => {
  return (
    <div className="m-4 rounded-2xl bg-green-200/80">
        <div className="text-center pt-[100px]">
            <h1 className="text-7xl font-extrabold font-mono bg-gradient-to-r from-green-950 via-green-600 to-green-300 bg-clip-text text-transparent">
                Best Recipes for you
            </h1>
            <p className="p-6 font-bold text-2xl font-sans bg-gradient-to-r from-green-950 via-green-600 to-green-300 bg-clip-text text-transparent">best recipe recomender that suggests dishes <br /> based on the items present in your fridge</p>
        </div>
        <div className="text-center p-4">
            <Badge className="bg-emerald-400/80 font-medium text-sm">Elaborative recipe's</Badge>
            <Badge className="bg-emerald-400/80 font-medium text-sm ml-4">Utilize frideg item's</Badge>
            <Badge className="bg-emerald-400/80 font-medium text-sm ml-4">No food wastage</Badge>
        </div>
        <ImageSection />
    </div>
  )
}

export default Top