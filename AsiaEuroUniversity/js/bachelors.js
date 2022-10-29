const bachelors = [
  {
    id:1,
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
    ],
  },
  {
    id:2,
    parent: 'Faculity of law and Political Science',
    text: [
      {
        id: 1,
        list: 'Computer Science',
      },
      {
        id: 2,
        list: 'Computer Network Technology',
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