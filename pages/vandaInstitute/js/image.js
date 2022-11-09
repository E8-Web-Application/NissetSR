const image = [
  {
    id: 1,
    imageUrl: "./image/p1.jpg",
  },
  {
    id: 2,
    imageUrl: "./image/p2.jpg",
  },
  {
    id: 3,
    imageUrl: "./image/p3.jpg",
  },
  {
    id: 4,
    imageUrl: "./image/p4.jpg",
  },
  {
    id: 5,
    imageUrl: "./image/p5.jpg",
  },
  {
    id: 6,
    imageUrl: "./image/p6.jpg",
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
