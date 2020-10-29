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
            usageExample: "", // "Ich habe ein Dackel"
            translations: {
              "": { // "enUS"
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
          usageExample: "", // "Das ist mein Haus."
          translations: {
            "": { // enUS
              usageTranslation: "" // "That is my house."
            }
          }
        },
        plural: {
          term: "", // "Häuser"
          usageExample: "", // "Ich besitze viele Häuser."
          translations: {
            "": { // enUS
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
