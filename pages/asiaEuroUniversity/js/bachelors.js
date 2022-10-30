const bachelors = [
  {
    id: 1,
    parent: 'Faculty of Science and Technology',
    text: [
      {
        id: 1,
        list: 'Computer Science',
      },
      {
        id: 2,
        list: 'Computer Network Technology',
      },
      {
        id: 3,
        list: 'Electronic and Electicity Engineering',
      },
      {
        id: 4,
        list: ' Information Technology',
      },
    ],
  },
  {
    id: 2,
    parent: 'Faculity of law and Political Science',
    text: [
      {
        id: 1,
        list: ' Public Law',
      },
      {
        id: 2,
        list: 'Public Administration',
      },
      {
        id: 3,
        list: 'Public Science',
      },
      {
        id: 4,
        list: ' Law',
      },
    ],
  },
  {
    id: 3,
    parent: 'Faculity of Social Science and Economics',
    text: [
      {
        id: 1,
        list: 'community Development',
      },
      {
        id: 2,
        list: 'Finance and Banking',
      },
      {
        id: 3,
        list: 'Economics',
      },
      {
        id: 4,
        list: 'International Business',
      },
    ],
  },
  {
    id: 4,
    parent: 'Faculity of Arts, Humanities and languages',
    text: [
      {
        id: 1,
        list: 'English',
      },
      {
        id: 2,
        list: 'Chinese Literature',
      },
      {
        id: 3,
        list: 'International Ralations',
      },
    
    ],
  },
  {
    id: 5,
    parent: 'Facuty of Business Administration and Tourism',
    text: [
      {
        id: 1,
        list: 'Management',
      },
      {
        id: 2,
        list: 'Marketing',
      },
      {
        id: 3,
        list: 'Accounting',
      },
      {
        id: 4,
        list: 'Hotel and Tourism Management',
      },
      {
        id: 5,
        list: 'Hument Resource Management',
      },
      {
        id: 6,
        list: 'Information Management System',
      },
    ],
  },
];

const bachelorstList = document.getElementById("bachelors-list");

bachelorstList.innerHTML = `${bachelors?.map((bachelors) => {
  return `
      <h4 class="head-bachelors-list">
        ${bachelors.parent}
      </ h4>
      <ul class="un-list">
        ${bachelors?.text?.map((child) => {
    return `
            <li>${child?.list}</li>
          `
  }).join(" ")}
      </ul>
  `;
}).join(' ')}`;