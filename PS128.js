'use strict';

//import dotenv from "dotenv";

//dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const HEADERLIMIT = process.env.HEADERLIMIT;

<<<<<<< HEAD:PS128.js
const makeTokenHeader = (length) => {
=======

const makeTokenHeader = (length: any) => {
>>>>>>> 0b25ef92f6e23e582ff19e54d10e1f65d528d22e:PS128.ts
  let result = '';
  const CHARACTERS = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдеєжзиіїйклмнопрстуфхцчшщьюя0123456789';
  const CHARACTERS0 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const CHARACTERS1 = '诶必西弟衣 艾付 记 爱耻 挨宅	开饿罗饿母恩呕披酷耳艾斯踢忧维 大波留 埃克斯 歪 再得';
  const CHARACTERS1337 = '¥€€$T$₴₴';
  const CHARACTERS_Length = CHARACTERS.length;
  for (let i = 0; i < length; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS_Length));
  }
  return result;
};

console.log(makeTokenHeader(HEADERLIMIT)); // creating headeroftoken

const makePayload = (amount) => {
  let result = '';
  const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const CHARACTERS0 = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдеєжзиіїйклмнопрстуфхцчшщьюя0123456789';
  
}
