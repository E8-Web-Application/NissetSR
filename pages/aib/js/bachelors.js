const bachelors = [
  {
    id:1,
    parent: "បរិញ្ញាបត្រវិទ្យាសាស្រ្ត​ (Bachelor's Degree of Science)",
    text: [
      {
        id: 1,
        list: 'ជំនាញវិទ្យាសាស្ត្រ និងវិស្វកម្មកុំព្យូទ័រ (Computer Science and Engineering)',
      },
    ],
  },
  // {
  // id:2,
  //   parent: 'សិល្បៈ (Bachelor of Arts)',
  //   text: [
  //     {
  //       id: 1,
  //       list: 'ជំនាញភាសាអង់គ្លេសសម្រាប់ទំនាក់ទំនងអាជីវកម្ម (English for Business Communication)',
  //     },
  //     {  
  //       id: 2,
  //       list: 'Major in English for Translation and Interpreting',
  //     },
  //     {
  //       id: 3,
  //       list: 'Major in Teaching English as a Foreign Language',
  //     },
  //   ],
  // },
  {
  id:2,
    parent: 'ហិរញ្ញវត្ថុ និងធនាគារ (Finance and Banking)',
    text: [
      {
        id:1,
        list:'ជំនាញហិរញ្ញវត្ថុ និងធនាគារ (Finance and Banking)',
      },
    ],
  },
  {
    id:3,
      parent: 'ពាណិជ្ជកម្មអន្តរជាតិ (International Businesses)',
      text: [
        {
          id:1,
          list:'ជំនាញពាណិជ្ជកម្មអន្តរជាតិ (International Businesses)',
        },
      ],
    },
  {
    id:4,
      parent: 'គ្រប់គ្រងហានិភ័យ និងធានារ៉ាប់រង (Risk Management and Insurance)',
      text: [
        {
          id:1,
          list:'ជំនាញគ្រប់គ្រងហានិភ័យ និងធានារ៉ាប់រង (Risk Management and Insurance)',
        },
        
      ],
  },
  {
    id:5,
      parent: 'គ្រប់គ្រង បណ្ដាញផ្គត់ផ្គង់ និងចលនូបត្ថម្ភ​(Supply Chain Management and Logistics)',
      text: [
        {
          id:1,
          list:'ជំនាញគ្រប់គ្រង បណ្ដាញផ្គត់ផ្គង់ និងចលនូបត្ថម្ភ​(Supply Chain Management and Logistics)',
        },
      ],
  },
  {
    id:6,
      parent: 'បច្ចេកវិទ្យាព័ត៌មានធុរកិច្ច​ (Business IT)',
      text: [
        {
          id:1,
          list:'ជំនាញបច្ចេកវិទ្យាព័ត៌មានធុរកិច្ច​ (Business IT)',
        },
      ],
  },
  {
    id:7,
      parent: 'បច្ចេកវិទ្យហិរញ្ញវត្ថុ (FinTech)',
      text: [
        {
          id:1,
          list:'ជំនាញបច្ចេកវិទ្យហិរញ្ញវត្ថុ (FinTech)',
        },
      ],
  },
  {
    id:8,
      parent: 'គណនេយ្យ (Accounting)',
      text: [
        {
          id:1,
          list:'ជំនាញគណនេយ្យ (Accounting)',
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