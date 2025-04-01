export const makeApiRequest = async ( word: string ) => {

    try {
        const result = await fetch( `https://api.dictionaryapi.dev/api/v2/entries/en/${ word }`, {
            method: 'GET'
        });
        return await result.json();
    } catch ( error ) {
        throw new Error( 'unable to search for word' );
    }

}