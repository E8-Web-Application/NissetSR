// master detail
const master = [
  {
    id:1,
    text: 'អនុបណ្ឌិតគ្រប់គ្រងពាណិជ្ជកម្ម (MBA)',
  },
  {
    id:2,
    text: 'អនុបណ្ឌិតសិល្បៈ (MA)',
  },
  {
    id:3,
    text: 'អនុបណ្ឌិតរដ្ឋបាលសាធារណៈ (MPA)',
  },
  {
    id:4,
    text: 'អនុបណ្ឌិតវិទ្យាសាស្ត្រ (MSc)',
  },
];

const msterList = document.getElementById('master-list');
msterList.innerHTML = `${master?.map((master) => {
  return ` <li>${master?.text}</li>`;
}).join(" ")}`;

// information detail
const information = [
  {
    id: 1,
    text: 'Official Web:',
    list:'',
    link: 'https://num.edu.kh/web/web/num/Pages?id=253',
  },
  {
    id: 3,
    text: 'Official FB page',
    list:'',
    link: 'សាកលវិទ្យាល័យជាតិគ្រប់គ្រង',
  },
  {
    id: 4,
    text: 'Official Mail',
    list:'',
    link: 'sokmonirath@num.edu.kh',
  },
  {
    id: 5,
    text: 'Num Address:',
    list:'St.96 Christoher Howes, Khan Daun Penh Phnom Penh, Cambodia 12202',
    link: '',
  },
  {
    id: 6,
    list:'+855 23 428 120',
    text: 'Tel: ',
    link: '',
  },
];

const informationList = document.getElementById('information-list');
informationList.innerHTML = `${information?.map((information) => {
  return ` <li>
            <span>${information?.text}</span>
            <span>${information?.list}</span>
            <a href="${information?.link}">${information?.link}</a> 
          </li>
  `;
}).join(" ")}`;