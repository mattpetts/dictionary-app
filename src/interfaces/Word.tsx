export interface TWord {
    word: string;
    phonetics: { text: string }[];
    meanings: {
      partOfSpeech: string;
      definitions: { definition: string }[];
      synonyms: string[];
    }[];
}