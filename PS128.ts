
// let headerExample = 'lZB9EptbPQhA695ipmuswc3Q1wFVxtieAvna'; //JWT header example
// const SEPARATOR = '.';
// let payloadExample = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'; // JWT payload example
// const PAYLOADLIMIT = 74;
'use strict';


const HEADERLIMIT = 36; // limit of the headerstring

const makeTokenHeader = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

console.log(makeTokenHeader(HEADERLIMIT));
