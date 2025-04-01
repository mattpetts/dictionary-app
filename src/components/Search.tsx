import { TSearch } from "../interfaces/SearchProps"

export default function Search( { callback }: TSearch ) {
    return (
        <input 
            type="text" 
            name="search" 
            className="p-3 rounded bg-white dark:bg-slate-900 w-full outline-none font-sans" 
            onKeyUp={ callback } 
            placeholder="Search Here.."
        />
    )
}
