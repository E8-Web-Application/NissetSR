const image = [
    {
        id: 1,
        imageUrl: './pciture/b12.jpg'
    },
    {
        id: 2,
        imageUrl: './pciture/b22.jpg'
    },
    {
        id: 3,
        imageUrl: './pciture/b32.jpg'
    },
    {
        id: 4,
        imageUrl: './pciture/b4_new_building_in_20042.jpg'
    },
    {
        id: 5,
        imageUrl: './pciture/b52.jpg'
    },
    {
        id: 6,
        imageUrl: './pciture/map.jpg'
    }
];

const imageScript = document.getElementById('image-script');
imageScript.innerHTML = `${image?.map((image) => {
    return `<div class="box ${image?.id}">
                <img src="${image?.imageUrl}" class="image-detail" alt="">
            </div>`
}).join(" ")}`;