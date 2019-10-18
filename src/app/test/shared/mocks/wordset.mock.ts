import { POS } from '@app/test/shared/word.model';
import { WordSet } from '@app/test/shared/wordset.model';

export default [
  {
    name: 'Unregelmäßige Verben',
    words: [
      {
        original: 'bleiben',
        translation: 'оставаться',
        pos: POS.Verb
      },
      {
        original: 'leihen',
        translation: 'брать взаймы',
        pos: POS.Verb
      },
      {
        original: 'meiden',
        translation: 'избегать',
        pos: POS.Verb
      },
      {
        original: 'scheiden',
        translation: 'разделять, разводить',
        pos: POS.Verb
      },
      {
        original: 'scheinen',
        translation: 'светить',
        pos: POS.Verb
      }
    ]
  }
] as WordSet[];
