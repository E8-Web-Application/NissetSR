const image = [
  {
    id: 1,
    imageUrl: './image/se1.jpeg'
  },
  {
    id: 2,
    imageUrl: './image/img1.jpg',
  },
  {
    id: 3,
    imageUrl: './image/img2.jpg'
  },
  {
    id: 4,
    imageUrl: './image/img3.jpg'
  },
  {
    id: 5,
    imageUrl: './image/img4.jpg'
  },
  {
    id: 6,
    imageUrl: './image/img5.jpg'
  },
];

const imageScript = document.getElementById('image-script');
imageScript.innerHTML = `
                      ${image?.map((image) => {
                        return `<div class="box ${image?.id}">
                                  <img src="${image?.imageUrl}" class="image-detail" alt="">
                                </div>`
                      }).join(" ")}`;

