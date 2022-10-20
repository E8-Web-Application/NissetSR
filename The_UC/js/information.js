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

const informationList = document.getElementById('information_list');
informationList.innerHTML = `${information?.map((information) => {
  return ` <li>${information.text}</li>`;
}).join(" ")}`;