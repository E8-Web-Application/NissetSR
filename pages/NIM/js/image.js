const image = [
  {
    id: 1,
    imageUrl: "image/19961091_1619201021485360_2936204355977939031_n.jpg",
  },
  {
    id: 2,
    imageUrl: "image/22692.jpg",
  },
  {
    id: 3,
    imageUrl: "image/42432668_wGS7NcoT1vV2opIbzYgiEFc46mzjIchPqCJM1_ZzCkg.jpg",
  },
  {
    id: 4,
    imageUrl: "image/clc_4.jpg",
  },
  {
    id: 5,
    imageUrl: "image/m1.jpg",
  },
  {
    id: 6,
    imageUrl: "image/8-num.jpg",
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
