import { validateName } from 'react-add-new';

validateName('foo'); // $ExpectType true
validateName('5oo'); // $ExpectType string
