 const andrea = {
  name: 'Andrea', 
  surname: 'Asioli', 
  yob: 1978, 
  nickname: 'labstraction',
  email: 'ilmionuovoaccount@gmail.com',
};

const pietro = {
  name: 'Pietro',
  surname: 'Miglino', 
  yob: 1989,
  nickname: 'PiMo',
  email: 'pimo@gmail.com',
};
const chiara = {
  name: 'Chiara',
  surname: 'Badile',
  yob: 1993, 
  nickname: 'SunshineMocha',
  email: 'sunshinemocha93@gmail.com',

};
const simone = {
  name: 'Simone',
  surname: 'Maccarone',
  yob: '2003',
  nickname: 'Macca', 
  email: 'macca@gmail.com'
};
const luis = {
  name: 'Luis', 
  surname: 'Castro',
  yob: 1993,
  nickname: 'lucho',
  email: 'lacj2003@hotmail.com',

};
const vlad = {
 name: 'Vlad',
 surname: 'Fodland', 
 yob: '1997', 
 nickname: 'here',
 email: 'sbfudab@mail.com',
};
const jing = {
  name: 'Jing',
  surname: 'Wang',
  yob: 1993,
  nickname: "BORT",
  email: 'em@at.me', 
};
const valentina = {
 name: 'Valentina', 
 surname: 'Cherubini', 
 yob: 2001,
 nickname: 'Dalila', 
 email: 'dalila@gmail.com',
};
const davideCo = {
  name: 'Davide',
  surname: 'Consigliere',
  yob: 1989,
  nickname: 'Dave',
  email: 'dave@gmail.com',
};
const daniele = {
 name: 'Daniele', 
 surname: 'Puggioni',
 yob: 1999,
 nickname: 'Pooh',
 email: 'pooh@gmail.com',
};

const myClass=[andrea, pietro, chiara, jing, daniele, davideCo, valentina, vlad, luis, simone];

for (let i = 0; i < myClass.length; i++) {
  console.log('Nome: ' + myClass[i].name + ' ' + myClass[i].surname + ' (' + myClass[i].nickname + '),\n Anni: '+ (2023 - myClass[i].yob) + ', \n email: ' + myClass[i].email);
};
