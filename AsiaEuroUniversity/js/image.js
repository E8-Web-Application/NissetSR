const image = [
  {
    id:1,
    imageUrl: '../AsiaEuroUniversity/images/img.jpg'
  },
  {
    id:2,
    imageUrl: '../AsiaEuroUniversity/images/img1.jpg'
  },
  {
    id:3,
    imageUrl: '../AsiaEuroUniversity/images/img2.jpg'
  },
  {
    id:4,
    imageUrl: '../AsiaEuroUniversity/images/study.jpg'
  },
  {
    id:5,
    imageUrl: '../AsiaEuroUniversity/images/img4.jpg'
  },
  {
    id:6,
    imageUrl: '../AsiaEuroUniversity/images/img5.jpg'
  },
];

const imageScript = document.getElementById('image-script');
var txt = [];
for (i = 0; i < image.length; i++) {
    txt += `<div class="box ${image[i].id}">
              <img src="${image[i].imageUrl}" class="image-detail" alt="">
            </div>`;
}
imageScript.innerHTML = txt;