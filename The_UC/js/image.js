const image = [
  {
    id: 1,
    imageUrl: './images/scythe.png'
  },
  {
    id: 2,
    imageUrl: './images/scythe.png',
  },
  {
    id: 3,
    imageUrl: './images/scythe.png'
  },
  {
    id: 4,
    imageUrl: './images/scythe.png'
  },
  {
    id: 5,
    imageUrl: './images/scythe.png'
  },
  {
    id: 6,
    imageUrl: './images/scythe.png'
  },
];

const imageScript = document.getElementById('image-script');
imageScript.innerHTML = `
                          ${image?.map((image) => {
  return `<div class="box ${image?.id}">
                                      <img src="${image?.imageUrl}" class="image-detail" alt="">
                                    </div>`;
}).join(" ")};
                        `;

