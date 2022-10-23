const bachelors = [
  {
    id:1,
    parent: 'មហាវិទ្យាល័យការគ្រប់គ្រង (Management)',
    text: [
      {
        id: 1,
        list: 'ទីផ្សារ (Maketing)',
      },
    ],
  },
  {
  id:2,
    parent: 'ភាពជាសហគ្រិន ( Entrepreneurship)',
    text: [
      {
        id: 1,
        list: 'បុគ្គលិកមហាវិទ្យាល័យ ( Faculty Staff )',
      },
    ],
  },
  {
  id:3,
    parent: 'មហាវិទ្យាល័យសេដ្ឋកិច្ច (Economics)',
    text: [
      {
        id:1,
        list:'សេដ្ឋកិច្ចសម្រាប់ការអភិវឌ្ឍន៍ (Economics For Development)',
      },
      {
        id: 2,
        list:'បុគ្គលិកមហាវិទ្យាល័យ (Faculty Staff)',
      }
    ],
  },
  {
    id:4,
      parent: 'មហាវិទ្យាល័យ​ហិរញ្ញវត្ថុ និងគណនេយ្យ (Finance & Accounting)',
      text: [
        {
          id:1,
          list:'គណនេយ្យ ( Accounting)',
        },
        {
          id: 2,
          list:'ធនាគារ (Banking)',
        },
        {
          id: 3,
          list:'បុគ្គលិកមហាវិទ្យាល័យ (Faculty Staff)',
        }
      ],
    },
  {
    id:5,
      parent: 'មហាវិទ្យាល័យទេសចរណ៍​(Tourism)',
      text: [
        {
          id:1,
          list:'ទេសចរណ៍ ( Tourism )',
        },
        {
          id: 2,
          list:'បដិសណ្ឋារកិច្ច ( Hospitality)',
        },
        {
          id: 3,
          list:'ភាសាអង់គ្លេស (Englih )',
        },
        {
          id: 3,
          list:'បុគ្គលិកមហាវិទ្យាល័យ (Faculty Staff)',
        }
      ],
  },
  {
    id:6,
      parent: 'មហាវិទ្យាល័ច្បាប់ (Law)',
      text: [
        {
          id:1,
          list:'ច្បាប់ ( Law )',
        },
        {
          id: 2,
          list:'បុគ្គលិកមហាវិទ្យាល័យ (Faculty Staff)',
        }
      ],
  },
  {
    id:7,
      parent: 'មហាវិទ្យាល័យព​ត៌​មាន​វិទ្យា (Information Technology)',
      text: [
        {
          id:1,
          list:'អាជីវកម្ម IT ( Business IT )',
        },
        {
          id: 2,
          list:'ព​ត៌​មាន​វិទ្យា (Information Technology )',
        },
        {
          id: 2,
          list:'បុគ្គលិកមហាវិទ្យាល័យ (Faculty Staff)',
        }
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