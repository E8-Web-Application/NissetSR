const university = [
  {
    id: 1,
    image: "../Rupp/images/rupp-cover.jpg",
    name: "The Royal University of Phnom Penh",
    link: "../Rupp/rupp.html",
  },
  {
    id: 2,
    image: "../setecInstitute/image/s1.jpeg",
    name: "SETEC INSTITUTE",
    link: "../setecInstitute/index.html",
  },
  {
    id: 3,
    image: "../aib/image/banner-building.jpg",
    name: "ACLEDA INSTITUTE OF BUSINESS (AIB)",
    link: "../aib/index.html",
  },
  {
    id: 4,
    image: "../NIM/image/1607911346037.jpg",
    name: "National University of Management",
    link: "../NIM/index.html",
  },
  {
    id: 5,
    image: "../vandaInstitute/image/p6.jpg",
    name: "Vanda Institute",
    link: "../vandaInstitute/index.html",
  },
  {
    id: 6,
    image: "../asiaEuroUniversity/images/logo-asia.jpg",
    name: "Asia Euro University",
    link: "../asiaEuroUniversity/index.html",
  },
  {
    id: 7,
    image: "../rule/picture/front.jpg",
    name: "Royal University of Law and Economics (RULE)",
    link: "../rule/rule.html",
  },
  {
    id: 8,
    image: "../theUC/images/2560px-UC_Building_New_Sky.png",
    name: "The University of Cambodia",
    link: "../theUC/index.html",
  },
  {
    id: 9,
    image: "../Norton/images/banner.jpg",
    name: "Norton University",
    link: "../Norton/norton.html",
  },
];
const universityLink = document.getElementById("university");
universityLink.innerHTML = ` ${university
  ?.map((university) => {
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
               </div>`;
  })
  .join(" ")}`;
