import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyBujvhIATzafxCIjwWBhrifqDCg1BKDjjU"})

export default async function getFoodRecom(items : string[]){
    const resp = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:`You are an recipe recommender , you are given some items : ${items} these are present in the fridge and based on that items give some recipes to cook , remember the instructions must be very clear and elaborative like if using microwave what temps and time must be given or if rice is to be made in pressure cooker how many wistles to take etc like that . give atleast 3 to 4 recipes or more`,
        config:{
            responseMimeType:"application/json",
            responseSchema:{
                type:Type.ARRAY,
                items:{
                    type:Type.OBJECT,
                    properties:{
                        recipeName:{
                            type:Type.STRING
                        },
                        ingredients:{
                            type:Type.ARRAY,
                            items:{
                                type:Type.STRING
                            }
                        },
                        instruction:{
                            type:Type.STRING
                        }
                    }
                    
                    
                }
                
            }
        }
    })

    return resp
    
}