interface ConjugationsI {
  [name: string]: TermI // "Ich"
}

interface TermI {
  term: string, // "habe"
  usageExample: string, // "Ich habe ein hund."
  translations: TranslationI
}

interface TranslationI {
  [name: string]: { // "enUS"
    usageTranslation: string // "I have a dog."
  }
}

