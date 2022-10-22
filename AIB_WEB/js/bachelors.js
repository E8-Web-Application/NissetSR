const bachelors = [
  {
    id:1,
    parent: "Bachelor's Degree of Science",
    text: [
      {
        id: 1,
        list: 'Major in Computer Science and Engineering',
      },
    ],
  },
  {
  id:2,
    parent: 'Bachelor of Arts',
    text: [
      {
        id: 1,
        list: 'Major in English for Business Communication',
      },
      {  
        id: 2,
        list: 'Major in English for Translation and Interpreting',
      },
      {
        id: 3,
        list: 'Major in Teaching English as a Foreign Language',
      },
    ],
  },
  {
  id:3,
    parent: 'Finance and Banking',
    text: [
      {
        id:1,
        list:'Major in Finance and Banking',
      },
    ],
  },
  {
    id:4,
      parent: 'International Businesses',
      text: [
        {
          id:1,
          list:'Major in International Businesses',
        },
      ],
    },
  {
    id:5,
      parent: 'Risk Management and Insurance',
      text: [
        {
          id:1,
          list:'Major in Risk Management and Insurance',
        },
        
      ],
  },
  {
    id:6,
      parent: 'Supply Chain Management and Logistics',
      text: [
        {
          id:1,
          list:'Major in Supply Chain Management and Logistics',
        },
      ],
  },
  {
    id:7,
      parent: 'Business IT',
      text: [
        {
          id:1,
          list:'Major in Business IT',
        },
      ],
  },
  {
    id:8,
      parent: 'FinTech',
      text: [
        {
          id:1,
          list:'Major in FinTech',
        },
      ],
  },
  {
    id:9,
      parent: 'Accounting',
      text: [
        {
          id:1,
          list:'Major in Accounting',
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