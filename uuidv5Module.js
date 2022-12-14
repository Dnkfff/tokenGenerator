import { v5 as uuidv5 } from 'uuid';

// Define a custom namespace.  Readers, create your own using something like
// https://www.uuidgenerator.net/
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

let randomuuidv5 = uuidv5('My random identeficator!', MY_NAMESPACE);

export default { randomuuidv5 };