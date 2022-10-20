const bachelors = [
  {
    id: 1,
    text: 'College of Arts and Humanities (CoAH)',
  },
  {
    id: 2,
    text: 'College of Education (CoE)',
  },
  {
    id: 3,
    text: 'College of Law (CoL)',
  },
  {
    id: 4,
    text: 'College of Media and Communications (CMC)',
  },
  {
    id: 5,
    text: 'College of Science and Technology (CoST)',
  },
  {
    id: 6,
    text: 'College of Social Sciences (CoSS)',
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
    text: 'School of Creative Arts (SCA)',
  },
  {
    id: 2,
    text: 'School of Foreign Languages (SFL)',
  },
  {
    id: 3,
    text: 'Techo Sen School of Government and International Relations (TSS)',
  },
  {
    id: 4,
    text: 'The Tony Fernandes School of Business (formerly the College of Management)',
  },
  {
    id: 5,
    text: 'The School of Undergraduate Studies (SUS)',
  },
  {
    id: 6,
    text: 'The School of Graduate Studies (SGS)',
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
    text: 'UC Official Web: https://uc.edu.kh/#',
  },
  {
    id: 2,
    text: 'UC Official Email: info@uc.edu.kh; admissions@uc.edu.kh',
  },
  {
    id: 3,
    text: 'Tell: (855-23) 993-274; 993-276',
  },
  {
    id: 4,
    text: 'FB page: The University of Cambodia',
  },
];

const informationList = document.getElementById('information-list');
informationList.innerHTML = `${information?.map((information) => {
  return ` <li>${information.text}</li>`;
}).join(" ")}`;