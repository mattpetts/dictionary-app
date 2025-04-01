import { TCard } from "../interfaces/CardProps"

export default function Card( { meaning }: TCard ) {
    return (
        <div className="rounded p-5 bg-gray-100 dark:bg-slate-700 dark:text-white border-l-4 border-blue-400 dark:border-orange-400 shadow-sm">
            <h5 className="font-bold text-lg mb-5">{ meaning.partOfSpeech }</h5>
            {meaning.definitions.map( (d) => (
                <p className="mb-5">{ d.definition }</p>
            ) ) }
            { meaning.synonyms.length ? 
            <div className="rounded bg-gray-200 dark:bg-slate-600 p-3 mt-5">
                <h4 className="font-bold">Synonyms</h4>
                {meaning.synonyms.map( s => <p className="italic font-serif">{ s }</p>)}
            </div> : '' }
        </div>
    )
}
