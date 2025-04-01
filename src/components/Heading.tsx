import { THeading } from "../interfaces/HeadingProps"

export default function Heading( { data }: THeading ) {
    return (
        <div className="py-10">
            <h1 className="font-bold text-6xl dark:text-white">{ data.word }</h1>
            <p className="font-light italic text-xl text-blue-400 dark:text-orange-400">{ data.phonetics[1]?.text }</p>
        </div>
    )
}
