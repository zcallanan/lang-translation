import React from 'react';

interface Props {}

interface State {
  verb: {
    id: number,
    form: string,
    tense: string,
    context: string,
    conjugations: ConjugationsI
  }
  noun: {
    id: number,
    sex: string,
    singular: TermI,
    plural: TermI
  }
}

/* Verb Tenses
  Indicative: present, simple past, present perfect, past perfect, future, future perfect
  Konjunktiv: konjunktiv I & konjunktiv II
  Imperative: present
*/

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      verb: {
        id: -1,
        form: "", // Indicative, Konjunktiv, Imperative
        tense: "", // ex: present
        context: "",  // "to have"
        conjugations: {
          "": { // "Ich"
            term: "", // habe
            translations: {
              "": { // "enUS"
                usageExample: "", // "Ich habe ein Dackel"
                usageTranslation: "" // "I have a Dachsund"
              }
            }
          }
        }
      },
      noun: {
        id: -1,
        sex: "", // masculine, feminine, neutral
        singular: {
          term: "", // "Haus"
          translations: {
            "": { // enUS
              usageExample: "", // "Das ist mein Haus."
              usageTranslation: "" // "That is my house."
            }
          }
        },
        plural: {
          term: "", // "Häuser"
          translations: {
            "": { // enUS
              usageExample: "", // "Ich besitze viele Häuser."
              usageTranslation: "" // "I own many houses."
            }
          }
        }
      }
    }
  }

  render() {
    return (
      <p>Hello!</p>
    )
  }
}

export default App;
