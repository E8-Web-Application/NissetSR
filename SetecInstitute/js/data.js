const bachelors = [
  {
    id: 1,
    text: 'Management Information System',
  },
  {
    id: 2,
    text: 'Design',
  },
];

const bachelorstList = document.getElementById("bachelors-list");

bachelorstList.innerHTML = `${bachelors?.map((bachelors) => {
  return ` <li>${bachelors.text}</li>`;
}).join(' ')}`;

// master detail
const master = [
  {
    id: 1,
    text: 'Information Technology',
  },
  {
    id: 2,
    text: 'Design',
  },
];

const msterList = document.getElementById('master-list');
msterList.innerHTML = `${master?.map((master) => {
  return ` <li>${master.text}</li>`;
}).join(" ")}`;

// information detail
const information = [
  {
    id: 1,
    text: 'Address :No. 86A, Street 110, Russian Federation Boulevard, Sangkat Teuk Laak I, Khan Toul Kork, Phnom Penh, Cambodia',
  },
  {
    id: 2,
    text: 'Email: info@setecu.com',
  },
  {
    id: 3,
    text: 'Mobile:     010 880612, 011 600619, 012 395190, 013 880612, 016 229514',
  },
  {
    id: 4,
    text: 'E-mail:     info@setecu.com',
  },
];

const informationList = document.getElementById('information-list');
informationList.innerHTML = `${information?.map((information) => {
  return ` <li>${information.text}</li>`;
}).join(" ")}`;

// Address :No. 86A, Street 110, Russian Federation Boulevard,
// Sangkat Teuk Laak I, Khan Toul Kork, Phnom Penh, Cambodia
// Tel / Fax:     023 880612
// Mobile:     010 880612, 011 600619, 012 395190, 013 880612, 016 229514
// E-mail:     info@setecu.com