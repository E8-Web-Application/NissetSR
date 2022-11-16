

// master detail
const master = [
  {
    id: 1,
    text: 'Materials and Structural Engineering',
  },
  {
    id: 2,
    text: 'Computer Science',
  },
  {
    id: 3,
    text: 'Water and Environmental Engineering',
  },
  {
    id: 4,
    text: 'Agro-Industrial Engineering',
  },
  {
    id: 5,
    text: 'Energy Technology and Management',
  },
  {
    id: 6,
    text: 'Mechatronics, Information and Communication Engineering',
  },
  {
    id: 5,
    text: 'Transport Engineering',
  },
  {
    id: 6,
    text: 'Data Science',
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
    text: 'ITC Official Web: https://itc.edu.kh/',
  },
  {
    id: 2,
    text: 'ITC Official Email: info@itc.edu.kh',
  },
  {
    id: 3,
    text: 'ITC Tell: 855 23 880 370 / 982 404',
  },
  {
    id: 4,
    text: 'PO Box 86, Russian Conf. Blvd. Phnom Penh, Cambodia.',
  },
];

const informationList = document.getElementById('information-list');
informationList.innerHTML = `${information?.map((information) => {
  return ` <li>${information.text}</li>`;
}).join(" ")}`;