import { foods } from "./data"

export const getAllCategories=()=> {
    const categories=[...new Set(foods.map(obj=>obj.category))]
    return [...categories,'all'].sort((a,b)=>a.localeCompare(b))
}