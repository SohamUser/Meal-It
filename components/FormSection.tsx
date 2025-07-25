"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"

interface Recipe {
  recipeName: string;
  ingredients: string[];
  instruction: string;
}

const FormSection = () => {
  const [val, setVal] = useState("")
  const [itemsArr, setItemsArr] = useState<string[]>([])
  const [recipes, setRecipes] = useState<Recipe[] | null>(null)
  const [loading, setLoading] = useState(false)

  const addItems = () => {
    if (val.trim() === "") return
    setItemsArr((prev) => [...prev, val])
    setVal("")
  }

  const submitItems = async () => {
    setLoading(true)
    setRecipes(null)

    try {
      const res = await fetch("/api/get-recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: itemsArr }),
      })
      
      
      const data = await res.json();
      const newArr = JSON.parse(data)
      
      
      setRecipes(newArr) 
    } catch (error) {
      console.error("Failed to fetch recipes:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl">
        <Input
          type="text"
          value={val}
          placeholder="Enter your item's"
          className="text-2xl py-6 px-6 font-bold rounded-2xl shadow-md"
          onChange={(e) => setVal(e.target.value)}
        />
      </div>

      <div className="my-4 flex gap-4">
        <Button
          onClick={addItems}
          className="bg-green-600 font-bold hover:bg-green-400"
        >
          Add
        </Button>
        <Button
          onClick={submitItems}
          className="bg-green-600 font-bold hover:bg-green-400"
          disabled={loading || itemsArr.length === 0}
        >
          {loading ? "Generating..." : "Get dishe's"}
        </Button>
      </div>

      {itemsArr.length > 0 && (
        <div className="mt-6 w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-2 text-green-700">Your Items:</h2>
          <div className="flex flex-wrap gap-2">
            {itemsArr.map((item, index) => (
              <Badge key={index} className="font-bold text-sm bg-blue-400" variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {recipes && (
        <div className="mt-10 w-full max-w-3xl space-y-8">
          <h2 className="text-2xl font-bold text-green-800">Recommended Recipes:</h2>
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold text-green-700">{recipe.recipeName}</h3>
              <p className="mt-2 text-gray-700">
                <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
              </p>
              <p className="mt-2 text-gray-700 whitespace-pre-line">
                <strong>Instructions:</strong> {recipe.instruction}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FormSection
