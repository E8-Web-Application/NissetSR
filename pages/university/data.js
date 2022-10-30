const university = [
  {
    id:1,
    image: '../Rupp/images/rupp-cover.jpg',
    name:'The Royal University of Phnom Penh',
    link:'/Rupp/rupp.html',
  },
  {
    id:2,
    image: '../SetecInstitute/image/s1.jpeg',
    name:'SETEC INSTITUTE',
    link:'/SetecInstitute/index.html',
  },
  {
    id:3,
    image: '../AIB/image/banner-building.jpg',
    name:'ACLEDA INSTITUTE OF BUSINESS (AIB)',
    link:'/AIB/index.html',
  },
  {
    id:4,
    image: '../NIM/image/1607911346037.jpg',
    name:'National University of Management',
    link:'/NIM/index.html',
  },
  {
    id:5,
    image: '../VandaInstitute/image/p6.jpg',
    name:'Vanda Institute',
    link:'../VandaInstitute/index.html',
  },
  {
    id:6,
    image: '../Images/rupp.jpg',
    name:'SETEC INSTITUTE',
    link:'/SetecInstitute/index.html',
  },
  {
    id:7,
    image: '../Images/rupp.jpg',
    name:'SETEC INSTITUTE',
    link:'/SetecInstitute/index.html',
  },
  {
    id:8,
    image: '../Images/rupp.jpg',
    name:'SETEC INSTITUTE',
    link:'/SetecInstitute/index.html',
  }
];
const universityLink = document.getElementById('university');
  universityLink.innerHTML = ` ${university?.map((university) =>{
    return ` 
              <div class="card card1">
                <a href="${university?.link}">
                    <div class="image-container">
                        <img src="${university.image}" alt="">
                    </div>
                    <div class="text-container">
                        <p>${university?.name}</p>
                        <a href="${university?.link}">
                            <button>Learn More</button>
                        </a>
                    </div>
                </a>
               </div>`
    }).join(" ")}`;

