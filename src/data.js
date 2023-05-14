

const samples = [
	"I'm Mateo Martinez Herrera",
	"I'm a Web Dev",
	"I'm a 3D Artist",
	"I'm a UI/UX designer",
]

const contact = [
	{
		label: 'Medellín, Ant, COL',
		link: 'https://www.google.com/maps/place/Rionegro,+Antioquia/@6.1448369,-75.374118,14z/data=!3m1!4b1!4m6!3m5!1s0x8e469f0f10c26bc9:0x76297df352b016c6!8m2!3d6.1490188!4d-75.3789523!16zL20vMDdrNGh0',
		icon: <i className="fa-solid fa-house-user contact-link-icon"></i>
	},
	{
		label: 'mateomartinezherrera@gmail.com',
		link: 'mailto:mateomartinezherrera@gmail.com',
		icon: <i className="fa-solid fa-envelope contact-link-icon"></i>
	},
	{
		label: '(+57) 319 424 3643',
		link: 'https://wa.me/573194243643',
		icon: <i className="fa-brands fa-whatsapp contact-link-icon"></i>
	},
	{
		label: 'Mateo Martinez',
		link: 'https://www.linkedin.com/in/mateo-martínez-herrera-developer',
		icon:<i className="fa-brands fa-linkedin contact-link-icon"></i>
	}
]

const profile = 'FullStack Web Developer experienced using React, Javascript ES6+, Node.js, HTML, CSS, Three.js, R3F, and Mongoose. I have a developing approach focused on immersive experiences using tools such as Blender, Photoshop, and Three.js. Furthermore, I had worked with Fortran, Python, and VBA Scripting with the Microsoft Office suite. I have a background as a Civil Engineer with 10+ years of specific experience in the field of thermal analysis for massive concrete structures and process automation applied to dam monitoring, working with tools such as Python, MySQL, VBA, Cloud Services, and Civil Engineering software.'

const skills = ['HTML / CSS / JS', 'React', 'Webpack', 'Three.js', 'R3F', 'Node.js', 'Express', 'MongoDB / Mongoose', 'Git', 'Python', 'Kivy', 'Excel / VBA', 'Power Automate', 'Blender']

const interests = [
	{
		label:'Web Dev.',
		icon: <i className="fa-solid fa-computer"></i>
	},
	{
		label:'Immersive Webs',
		icon: <i className="fa-solid fa-vr-cardboard"></i>
	},
	{
		label:'3D Modeling',
		icon: <i className="fa-brands fa-uncharted"></i>
	},
	{
		label:'Game Dev.',
		icon: <i className="fa-solid fa-gamepad"></i>
	},	
	{
		label:'Classic Guitar',
		icon: <i className="fa-solid fa-guitar"></i>
	},
	{
		label:'Animals',
		icon: <i className="fa-solid fa-paw"></i>
	},
	{
		label:'Keep Learning',
		icon: <i className="fa-solid fa-graduation-cap"></i>
	}
]

const langs = {
	Spanish: {
		reading: {
			level: 'native',
			col: '#9fcd99'
		},
		writting: {
			level: 'native',
			col: '#9fcd99'
		},
		listening: {
			level: 'native',
			col: '#9fcd99'
		},
		speaking: {
			level: 'native',
			col: '#9fcd99'
		}
	},
	English: {
		reading: {
			level: 'C1/C2',
			link: 'https://www.efset.org/cert/i1FZuH',
			col: '#9fcd99'
		},
		writting: {
			level: 'B1/B2',
			col: '#ffdd71'
		},
		listening: {
			level: 'C1/C2',
			link: 'https://www.efset.org/cert/i1FZuH',
			col: '#9fcd99'
		},
		speaking: {
			level: 'B1/B2',
			col: '#ffdd71'
		}
	},	
}

const works = [
	{
		company: 'Integral',
		place: 'COL',
		positions: [
			{
				position: 'Semi Senior Civil Engineer',
				duration: 'Feb 2013 - Present',
				description: 'Accountable for the automation of thermal calculations for massive concrete structures. Shared leadership of a multidisciplinary team for dam monitoring and surveillance automation. Responsible for static and dynamic designs of dams, tunnel lining, and prestressed concrete bridges.',
				items: [
					'Development of coding algorithms for optimization of thermal analysis using Python.',
					'Development of coding algorithms for optimization of structures design using Fortran, Python and VBA Scripting.',
					'Modeling of massive concrete structures using 3D software, such as COSMOS, Code_Aster, SALOME, AutoCAD, MIDAS GTS/NX.',
					'Development of coding algorithms for the management of big data resulting from 3D models and calculations.',
					'Designing massive concrete structures in hydroelectrical projects, such as dam components and hydropower plants.',
				]
			}, 			
		]
	},
	{
		company: 'Concreacero',
		place: 'COL',
		positions: [
			{
				position: 'Resident Engineer',
				duration: 'Oct 2012 - Feb 2013',
				description: 'Assisted in the construction of sports courts roofs, being accountable for the material reception, as-built blueprints making, and management of construction site workers.'
			}
		]
	}
]

const education = [
	{
		institution: 'Colombo Americano',
		title: 'B2 English Courses',
		place: 'COL',
		date: 'Present'
	},
	{
		institution: 'Universidad de Medellín',
		title: 'Civil Engineer',
		place: 'COL',
		date: '2012'
	}
]

export {
	langs,
	works,
	skills,
	contact,
	profile,
	samples,
	education,
	interests
}