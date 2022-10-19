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