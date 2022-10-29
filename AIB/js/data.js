// master detail
const master = [
  {
    id:1,
    text: 'ហិរញ្ញវត្ថុ និងធនាគារ (Finance and Banking)',
  },
  {
    id:2,
    text: 'ហិរញ្ញវត្ថុ (Finance)',
  },
  {
    id:3,
    text: 'គ្រប់គ្រង (Management)',
  },
];

const msterList = document.getElementById('master-list');
msterList.innerHTML = `${master?.map((master) => {
  return ` <li>${master?.text}</li>`;
}).join(" ")}`;

// information detail
const information = [
  {
    id: 1,
    text: 'Official Web AIB:',
    list:'',
    link: 'https://www.acleda-aib.edu.kh/tc/eng/',
  },
  {
    id: 3,
    text: 'Official FB page AIB:',
    list:'',
    link: 'https://www.facebook.com/acleda.aib' , 
  },
  {
    id: 4,
    text: 'Official Mail AIB: info@acleda-aib.edu.kh',
    list:'',
    link: '',
  },
  {
    id: 5,
    text: 'AIB Address:',
    list:' #1397, Phnom Penh-Hanoi Friendship Blvd., Phum Anlong Kngan, Sangkat Khmuonh, Khan Saensokh, Phnom Penh, Kingdom of Cambodia.',
    link: '',
  },
  {
    id: 6,
    list:'+855 15 900 457, 010 900 537, 015 600 410',
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