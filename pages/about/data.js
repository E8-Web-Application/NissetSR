const about = [
	{
		id: 1,
		img: 'images/codingspace.jpg',
		name: 'Sok Chansocheat',
		position: 'Software Engineer',
		linkFace: 'https://web.facebook.com/sok.chansocheat.1',
		linkGit: 'https://github.com/cheat2001',
		linkIG: 'https://www.linkedin.com/in/chansocheat-sok-55a03b243/',
	},
	{
		id: 2,
		img: './images/seyha.jpg',
		name: 'Vorn Seyha',
		position: 'Full Stack Developer',
		linkFace: 'https://web.facebook.com/seyha.vornn/',
		linkGit: 'https://github.com/SeyhaVORN',
		linkIG: 'https://www.linkedin.com/in/seyha-vorn/',
	},
	{
		id: 3,
		img: './images/vid.jpg',
		name: 'Phally David',
		position: 'Software Engineer',
		linkFace: 'https://web.facebook.com/pozz.vln',
		linkGit: 'https://github.com/Videvo',
		linkIG: '',
	},
	{
		id: 4,
		img: './images/sorphea.jpg',
		name: 'Phen Sorphea',
		position: 'Software Engineer',
		linkFace: '',
		linkGit: '',
		linkIG: '',
	},
	{
		id: 5,
		img: './images/liza.jpg',
		name: 'Huy Liza',
		position: 'Software Engineer',
		linkFace: '',
		linkGit: '',
		linkIG: '',
	},
	{
		id: 6,
		img: './images/dara.jpg',
		name: 'Huy Dara',
		position: 'Software Engineer',
		linkFace: '',
		linkGit: '',
		linkIG: '',
	},
	{
		id: 7,
		img: './images/vuthin.jpg',
		name: 'Thoeun Thiravuthin',
		position: 'Software Engineer',
		linkFace: '',
		linkGit: '',
		linkIG: '',
	},
	{
		id: 8,
		img: './images/ve.jpg',
		name: 'Ly Veasna',
		position: 'Software Engineer',
		linkFace: '',
		linkGit: '',
		linkIG: '',
	},
];

const aboutCard = document.getElementById('card-about');
aboutCard.innerHTML = ` ${about
	?.map((about) => {
		return `
    <div class="card card1">
			<div class="top-container">
				<div class="card-profile">
						<img src="${about?.img}" class="img-${about.id}" alt="">
				</div>
			</div>
			<div class="bottom-container">
				<div class="text">
						<p class="name">${about?.name}</p>
						<p class="position">${about?.position}</p>
				</div>
				<div class="social-media">
						<div class="facebook box">
								<a href="${about?.linkFace}" target="_blank">
										<img width="20" src="/Images/facebook.png" alt="">
								</a>
						</div>
						<div class="github box">
								<a href="${about?.linkGit}" target="_blank">
										<img width="20" src="/Images/github-sign.png" alt="">
								</a>
						</div>
						<div class="instagram box">
								<a href="${about?.linkIG}" target="_blank">
										<img width="20" src="/Images/linkedin.png" alt="">
								</a>
						</div>
				</div>
			</div>
    </div>`;
	})
	.join(' ')}`;
