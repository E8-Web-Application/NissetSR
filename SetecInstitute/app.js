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
    imageUrl: '../AsiaEuroUniversity/images/img3.jpg'
  },
  {
    id:5,
    imageUrl: '../AsiaEuroUniversity/images/img4.jpg'
  },
  {
    id:6,
    imageUrl: '../AsiaEuroUniversity/images/img5.jpg'
  },
  {
    id:7,
    imageUrl: '../AsiaEuroUniversity/images/img6.jpg'
  },
  {
    id:8,
    imageUrl: '../AsiaEuroUniversity/images/img1.jpg'
  },
];

const imageScript = document.getElementById('image-script');
var txt = [];
for (i = 0; i < image.length; i++) {
    txt += `<div class="box box-1">
              <img src="${image[i].imageUrl}" class="image-detail" alt="">
            </div>`;
}
imageScript.innerHTML = txt;