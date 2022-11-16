const text = [
    {
        text: ''
    }
]
const texts = document.getElementById('text');
texts.innerHTML = `${text.map((val) => {
    return `<p>${val.text}</p>`
}).join(" ")
    }`;

const paragrap = [
    {
        text: "The Institut de Technologie du Cambodge (ITC) is one of Cambodias  higher education institutions. It offers education and research programs in engineering.Programs are offered in French and English. In the freshman undergraduate program, students complete a foundation year before choosing their majors in the engineering program. As of June 2017, ITC had 263 lecturers and 3, 729 undergraduate students. From the 2017–18 academic year, the number of students is 4,942.",
    }
]
const paragraps = document.getElementById('paragrap');
paragraps.innerHTML = `${paragrap.map((val) => {
    return `<p>${val.text}</p>`
}).join(" ")
    }`;
