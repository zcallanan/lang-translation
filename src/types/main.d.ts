interface ConjugationsI {
  [name: string]: TermI // "Ich"
}

interface TermI {
  term: string, // "habe"
  translations: TranslationI
}

interface TranslationI {
  [name: string]: { // "enUS"
    usageExample: string, // "Ich habe ein hund."
    usageTranslation: string // "I have a dog."
  }
}

