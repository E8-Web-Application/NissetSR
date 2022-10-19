const bachelors = [
  {
    id:1,
    text: 'Management Information System',
  },
  {
    id:2,
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
    id:1,
    text: 'Information Technology',
  },
  {
    id:2,
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
    id:1,
    text: 'RUPP Official Web: http://www.rupp.edu.kh/',
  },
  {
    id:2,
    text: 'RUPP Official Email: iroffice(at)rupp.edu.kh',
  },
  {
    id:3,
    text: 'Tell: 855-23-883-640 RUPP Official',
  },
  {
    id:4,
    text: 'FB page: RUPP – Royal University of Phnom Penh',
  },
];

const informationList = document.getElementById('information-list');
informationList.innerHTML = `${information?.map((information) => {
  return ` <li>${information.text}</li>`;
}).join(" ")}`;