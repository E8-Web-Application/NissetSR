const image = [
  {
    id: 1,
    imageUrl: "./picture/b12.jpg",
  },
  {
    id: 2,
    imageUrl: "./picture/b22.jpg",
  },
  {
    id: 3,
    imageUrl: "./picture/b32.jpg",
  },
  {
    id: 4,
    imageUrl: "./picture/b4_new_building_in_20042.jpg",
  },
  {
    id: 5,
    imageUrl: "./picture/b52.jpg",
  },
  {
    id: 6,
    imageUrl: "./picture/map.jpg",
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
                          .join(" ")}`;
