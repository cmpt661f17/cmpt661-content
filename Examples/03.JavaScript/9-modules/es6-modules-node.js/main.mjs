/*must run with
node --experimental-modules main.mjs
*/

import {add} from './lib.mjs';
import fs1 from 'fs';

console.log( Object.keys(fs1).length ); // 86

console.log('Result: ' + add(2, 3));