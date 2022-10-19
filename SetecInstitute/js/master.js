const master = [
  {
    id:1,
    text: 'អនុបណ្ឌិតផ្នែកអភិរក្សជីវៈចម្រុះ Master of Science in Biodiversity Conservation',
  },
  {
    id:2,
    text: 'អនុបណ្ឌិតផ្នែកសិក្សាអភិវឌ្ឍន៍ Master of Development Studies',
  },
  {
    id:3,
    text: 'អនុបណ្ឌិតផ្នែកគីមីវិទ្យា Master of Chemistry អនុបណ្ឌិតផ្នែកគណិតវិទ្យា Master of Mathematics',
  },
  {
    id:4,
    text: 'អនុបណ្ឌិតផ្នែកចិត្តវិទ្យា និងប្រឹក្សាយោបល់ Master of Psychology and Counseling',
  },
  {
    id:5,
    text: 'អនុបណ្ឌិតផ្នែកវិស្វកម្មព័ត៌មានវិទ្យា Master of IT Engineering',
  },
  {
    id:6,
    text: 'អនុបណ្ឌិតផ្នែកអប់រំ Master of Education អនុបណ្ឌិតផ្នែកភាសាវិទ្យា Master of Arts in Linguistics',
  },
  {
    id:7,
    text: 'អនុបណ្ឌិតផ្នែកទស្សនៈវិទ្យា Master of Philosophy',
  },
  {
    id:8,
    text: 'អនុបណ្ឌិតផ្នែករូបវិទ្យា Master of Physics អនុបណ្ឌិតផ្នែកការងារសង្គម Master of Arts in Social Work',
  },
];

const msterList = document.getElementById('master-list');
msterList.innerHTML = `${master?.map((master) => {
  return ` <li>${master.text}</li>`;
}).join(" ")}`;