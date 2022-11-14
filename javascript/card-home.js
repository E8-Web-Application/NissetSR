const university = [
  {
    id: 1,
    image: "pages/Rupp/images/rupp-cover.jpg",
    name: "The Royal University of Phnom Penh",
    link: "pages/Rupp/rupp.html",
  },
  {
    id: 2,
    image: "pages/setecInstitute/image/s1.jpeg",
    name: "SETEC INSTITUTE",
    link: "pages/setecInstitute/index.html",
  },
  {
    id: 3,
    image: "pages/aib/image/banner-building.jpg",
    name: "ACLEDA INSTITUTE OF BUSINESS (AIB)",
    link: "pages/aib/index.html",
  },
  {
    id: 4,
    image: "pages/NIM/image/1607911346037.jpg",
    name: "National University of Management",
    link: "pages/NIM/index.html",
  },
];
const cardUniversity = document.getElementById("card-university");
cardUniversity.innerHTML = ` ${university
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
  .join("")}`;
