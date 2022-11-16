const bachelors = [
  {
    id:1,
    parent: "Faculty of Applied Science",
    text: [
      {
        id: 1,
        list: 'Department of Foundation Year',
      },
      {
        id: 2,
        list: 'Department of Applied Mathematics and Statistics',
      },
    ],
  },
  {
  id:2,
    parent: 'Faculty of Civil Engineering',
    text: [
      {
        id:1,
        list:'Department of Civil Engineering',
      },
      {
        id: 2,
        list: 'Department of Architectural Engineering',
      },
      {
        id: 3,
        list: 'Department of Transport and Infrastructure Engineering',
      },
    ],
  },
  {
    id:3,
    parent: 'Faculty of Chemical and Food Engineering',
      text: [
        {
          id:1,
          list:'Department of Chemical Engineering',
        },
        {
          id: 2,
          list: 'Department of Food Engineering',
        },
      ],
    },
  {
    id:4,
    parent: 'Faculty of Electrical Engineering',
      text: [
        {
          id:1,
          list:'Department of Electrical and Energy Engineering',
        },
        {
          id: 2,
          list: 'Department of Industrial and Mechanical Engineering',
        },
        {
          id: 3,
          list: 'Department of Telecommunications and Network Engineering',
        },
        {
          id: 4,
          list: 'Department of Information and Communication Engineering',
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