import { sayHi, sayBye } from './export.js'
import User from './export.js'; // not {User}, just User

// Named export
// export class User {...}
// import {User} from ...
sayHi('TungNT');
sayBye('TungNT');

// Default export
// export default class User {...}
// import User from ...
let user = new User('TungNT');
user.info();