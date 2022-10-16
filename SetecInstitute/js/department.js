const department = [
  {
    id:1,
    parent: 'មហាវិទ្យាល័យវិទ្យាសាស្ត្រ Faculty of Science:',
    text: [
      {
        id: 1,
        list: 'បរិញ្ញាបត្រគិណិតវិទ្យា Bachelor of Science in Mathematics',
      },
      {
        id: 2,
        list: 'បរិញ្ញាបត្រជីវវិទ្យាទូទៅ Bachelor of Science in General Biology',
      },
      {
        id: 3,
        list: 'បរិញ្ញាបត្រគីមីវិទ្យា Bachelor of Science in Chemistry',
      },
      {
        id: 4,
        list: 'បរិញ្ញាបត្រជីវៈគឺមីវិទ្យា Bachelor of Science in Biochemistry',
      },
    ],
  },
  {
  id:2,
    parent: 'មហាវិទ្យាល័យវិទ្យាសាស្ត្រសង្គម និងមនុស្សសាស្ត្រ Faculty of Social Science and Humanities',
    text: [
      {
        id: 1,
        list: 'បរិញ្ញាបត្រគិណិតវិទ្យា Bachelor of Science in Mathematics',
      },
      {
        id: 2,
        list: 'បរិញ្ញាបត្រជីវវិទ្យាទូទៅ Bachelor of Science in General Biology',
      },
      {
        id: 3,
        list: 'បរិញ្ញាបត្រគីមីវិទ្យា Bachelor of Science in Chemistry',
      },
      {
        id: 4,
        list: 'បរិញ្ញាបត្រជីវៈគឺមីវិទ្យា Bachelor of Science in Biochemistry',
      },
    ],
  },
];

const departmentList = document.getElementById("department-list");

departmentList.innerHTML = `${department?.map((department) => {
  return `
      <h4 class="head-department-list">
        ${department.parent}
      </ h4>
      <ul class="un-list">
        ${department?.text?.map((child) => {
          return `
            <li>${child.list}</li>
          `
        }).join(" ")}
      </ul>
  `;
}).join(' ')}`;