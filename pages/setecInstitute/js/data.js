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
    text: 'Official Web :',
    list:'',
    link: 'https://www.acleda-aib.edu.kh/tc/eng/',
  },
  {
    id: 3,
    text: 'Official page :',
    list:'',
    link: 'https://www.facebook.com/setecu' , 
  },
  {
    id: 4,
    text: 'Official mail :',
    list:'',
    link: 'info@setecu.com',
  },
  {
    id: 5,
    text: 'Address:',
    list:' Address :No. 86A, Street 110, Russian Federation Boulevard, Sangkat Teuk Laak I, Khan Toul Kork, Phnom Penh, Cambodia',
    link: '',
  },
  {
    id: 6,
    list:'010 880612, 011 600619, 012 395190, 013 880612, 016 229514',
    text: 'Tel: ',
    link: '',
  },
];

const informationList = document.getElementById('information-list');
informationList.innerHTML = `${information?.map((information) => {
  return ` <li>
            <span>${information?.text}</span>
            <span>${information?.list}</span>
            <a href="${information?.link}">${information?.link}</a> 
          </li>
  `;
}).join(" ")}`;