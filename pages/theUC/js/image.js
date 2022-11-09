const image = [
  {
    id: 1,
    imageUrl: "./images/images.jpeg",
  },
  {
    id: 2,
    imageUrl: "./images/UC_main_staircase_.jpeg",
  },
  {
    id: 3,
    imageUrl: "./images/IMG_4717.JPG",
  },
  {
    id: 4,
    imageUrl: "./images/294747690_5979298262086271_903867814748826578_n.jpeg",
  },
  {
    id: 5,
    imageUrl: "./images/Computers_in_the_Handa_Library.jpg",
  },
  {
    id: 6,
    imageUrl: "./images/Scholarships_at_UC_-_2022.jpg",
  },
];

const imageScript = document.getElementById("image-script");
imageScript.innerHTML = `
                          ${image
                            ?.map((image) => {
                              return `<div class="box ${image?.id} image">
                                      <img src="${image?.imageUrl}" class="image-detail" alt="">
                                    </div>`;
                            })
                            .join(" ")}
                        `;
