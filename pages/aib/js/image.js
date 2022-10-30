const image = [
  {
    id: 1,
    imageUrl: 'image/311301563_3427000194251455_397291004112671352_n.jpg'
  },
  {
    id: 2,
    imageUrl: 'image/ACLEDA-Institute-of-Business-Featured-998x749-1.jpg',
  },
  {
    id: 3,
    imageUrl: 'image/e78b7c7d-2f47-4ece-8452-d5473e89b34a.jpg'
  },
  {
    id: 4,
    imageUrl: 'image/img-languages.jpg'
  },
  {
    id: 5,
    imageUrl: 'image/41f9add2-707b-4b00-8d9c-cbf2db1e72ab.jpg'
  },
  {
    id: 6,
    imageUrl: 'image/aib1.jpg'
  },
];

const imageScript = document.getElementById('image-script');
imageScript.innerHTML = `
                      ${image?.map((image) => {
                        return `<div class="box ${image?.id}">
                                  <img src="${image?.imageUrl}" class="image-detail" alt="">
                                </div>`
                      }).join(" ")}`;
