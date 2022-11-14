// information detail
const information = [
  {
    id: 1,
    text: 'Official Web:',
    list:'',
    link: 'http://www.aeu.edu.kh/',
  },
  {
    id: 3,
    text: 'Official FB page',
    list:'',
    link: 'https://www.facebook.com/groups/185232318884952/?ref=share',
    link: 'www.facebook.com/aeucambodia'
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
    list:'#826, kammpuch Krum Blvd Teuk Laak I, Khan Toul Kok, Phnom Penh-Kingdom of Cambodia, Postal Code: 12156',
    link: '',
  },
  {
    id: 6,
    list:'+855 023998124',
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