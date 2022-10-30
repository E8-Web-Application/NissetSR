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