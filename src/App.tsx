import { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

import { makeApiRequest } from "./utilities/makeApiRequest";

import { TPageSettings } from "./interfaces/PageSettings";
import { TWord } from "./interfaces/Word";

import Search from "./components/Search";
import Card from "./components/Card";
import Heading from "./components/Heading";

function App() {

    const [ searchTerm, setSearchTerm ] = useState<string>( 'hello' );
    const [ error, setError ] = useState<boolean>( false );
    const [ wordData, setWordData ] = useState<TWord|null>( null );
    const [ pageSettings, setPageSettings ] = useState<TPageSettings>( { font: 'sans', dark: false } );

    useEffect(() => {

        if ( ! searchTerm ) {
          return;
        }

        const delaySearchRequest = setTimeout( async () => {
            try {
              setError( false );
              const data = await makeApiRequest( searchTerm );
              setWordData( data[0] );
            } catch( error ) {
              setError( true );
            }
        }, 2000)

        return () => clearTimeout( delaySearchRequest );
    }, [ searchTerm ]);


    return (
      <div className={`w-full flex bg-white dark:bg-slate-900 text-black dark:text-white min-h-screen font-${ pageSettings.font } ${ pageSettings.dark ? 'dark' : '' }`}>
          <div className="w-3/12 bg-gray-100 dark:bg-slate-800 h-screen p-5 shadow-md">
            <h1 className="text-xl font-sans mb-5 text-blue-400 dark:text-orange-400 font-bold">Dictionary</h1>
            <div className="mb-5">
              <Search callback={ ( e: React.KeyboardEvent<HTMLInputElement> ) => setSearchTerm( e.currentTarget.value ) } />
            </div>
            <label className="block mb-2 text-sm font-sans">Font Style</label>
            <select className="mb-5 p-2 py-3 w-full rounded-sm outline-none font-sans bg-white dark:bg-slate-900" name="font" onChange={( e ) => setPageSettings( { ...pageSettings, font: e.target.value } ) } value={ pageSettings.font }>
                <option value="serif">Serif</option>
                <option value="sans">Sans-Serif</option>
            </select>
            <div className="flex justify-start items-center font-sans">
                <button className="text-lg cursor-pointer rounded bg-gray-200 dark:bg-slate-900 p-3" onClick={ () => setPageSettings( { ...pageSettings, dark: ! pageSettings.dark } ) }>{ pageSettings.dark ? <FaSun /> : <FaMoon /> }</button>
            </div>
          </div>
          <div className="w-8/12 m-auto overflow-y-scroll h-screen">
              <div className="p-5">
                {wordData &&
                  <>
                    <Heading data={ wordData } />
                    <div className="flex flex-col gap-5">
                        { wordData.meanings.map( ( m ) => <Card meaning={ m } /> ) }
                    </div>
                  </>
                }
                { error && <div><p>Unable to find word!</p></div> }
              </div>
          </div>
      </div>
    )
}

export default App
