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
  id:1,
    parent: 'Preparing Financial Statement',
    text: [
      {
        id:1,
        list:'US GAAP',
      },
      {
        id: 2,
        list:'IFRS',
      }
    ],
  },
   {  
    id:2,
      parent: 'External Auditing',
      text: [
        {
          id:1,
          list:'Auditing Concepts',
        },
        {
          id: 2,
          list:'IFRS',
        },
        {
          id: 3,
          list:'Auditing Planning',
        },
        {
          id: 4,
          list:'Internal Control System',
        },
        {
          id: 5,
          list:'Substantive Tests: TOT',
        },
        {
          id: 6,
          list:'Substantive Tests: TOB',
        },
        {
          id: 7,
          list:'Analytical Procedures',
        },
        {
          id: 8,
          list:'Sampling Methods',
        },
        {
          id: 9,
          list:'Audit Reports',
        },
        {
          id: 10,
          list:'International Auditing and Assurance Standards',
        },
      ],
    },
    {  
      id:3,
        parent: 'Internal Auditing',
        text: [
          {
            id:1,
            list:'Government Auditing and its standards',
          },
          {
            id: 2,
            list:'Government Tax Auditing &Taxation Law',
          },
          {
            id: 3,
            list:'Audit Practices',
          },
          {
            id: 4,
            list:'Audit Practices',
          },
          {
            id: 5,
            list:'Economic',
          },
          {
            id: 6,
            list:'Finance',
         },
        ],
      } 
   ]

const msterList = document.getElementById('master-list');

msterList.innerHTML = `${master?.map((master) => {
  return `
      <h4 class="head-bachelors-list">
        ${master.parent}
      </ h4>
      <ul class="un-list">
        ${master?.text?.map((child) => {
          return `
            <li>${child?.list}</li>
          `
        }).join(" ")}
      </ul>
  `;
}).join(' ')}`;

// information detail
const information = [
  {
    id: 1,
    text: 'Address : #216, 218, MaoTse Tung, Khan Chamkamon, Phnom Penh',
  },
  {
    id: 2,
    text: '+85523213563',
  },
  {
    id: 3,
    text: 'E-mail: vandaacc@yahoo.com',
  },
  {
    id: 4,
    text: 'Website: http://vanda.edu.kh ',
  },
];

const informationList = document.getElementById('information-list');
informationList.innerHTML = `${information?.map((information) => {
  return ` <li>${information.text}</li>`;
}).join(" ")}`;

// Address :No.216, 218, MaoTse Tung, Khan Chamkamon, Phnom Penh
// Tel / Fax:  023213563  
// E-mail:  vandaacc@yahoo.com   