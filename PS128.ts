'use strict';

import * as dotenv from 'dotenv'

dotenv.config();

const HEADERLIMIT = process.env.HEADERLIMIT;

const makeTokenHeader = (length: number) => {
  let result = '';
  const CHARACTERS = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдеєжзиіїйклмнопрстуфхцчшщьюя0123456789';
  const CHARACTERS1337 = '¥€€$T$₴₴';
  const CHARACTERS_Length = CHARACTERS.length;
  for (let i = 0; i < length; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS_Length));
    while (i = length/2){
      result += CHARACTERS
    }
  }
  return result;
};

console.log(makeTokenHeader(HEADERLIMIT)); // creating headeroftoken

const makePayload = (amount: number) => {
  let result = '';
  const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
}
