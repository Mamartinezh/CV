

const samples = [
	"I'm Mateo Martinez Herrera",
	"I'm a Web Dev",
	"I'm a 3D Artist",
	"I'm a UI/UX designer",
]

const contact = [
	{
		label: 'Rionegro, Ant, COL',
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
		link: 'https://www.linkedin.com/in/mateo-martinez-1b59a6138/',
		icon:<i className="fa-brands fa-linkedin contact-link-icon"></i>
	}
]

const profile = 'Civil engineer with 10+ years of experience designing hydroelectrical projects, specifically in the area of thermal analysis for massive concrete structures, such as dams, spillways, intake towers, and other structures. My latest experience was the automation of monitoring and surveillance for the hydroelectrical project HidroItuango, using Python, MySQL, VBA, cloud services, etc.'

const skills = ['HTML / CSS / JS', 'React', 'Webpack', 'ThreeJS', 'NodeJS', 'Express', 'MongoDB / Mongoose', 'Git', 'Python', 'Kivy', 'Excel / VBA', 'Power Automate', 'Blender']

const interests = [
	{
		label:'Web Dev.',
		icon: <i className="fa-solid fa-computer"></i>
	},
	{
		label:'Game Dev.',
		icon: <i className="fa-solid fa-gamepad"></i>
	},	
	{
		label:'3D Modeling',
		icon: <i className="fa-brands fa-uncharted"></i>
	},
	{
		label:'Inmersive Apps',
		icon: <i className="fa-solid fa-vr-cardboard"></i>
	},
	{
		label:'Data Science',
		icon: <i className="fa-solid fa-circle-nodes"></i>
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
				position: 'Auxiliar Engineer',
				duration: 'Feb 2012 - Feb 2013',
				description: 'Accountable for the automation of thermal calculations for massive structures using Fortran and modeling software, such as COSMOS, MIDAS GTS/NX and SAP 2000.',
				items: [
					'Development of algorithms for calculation optimization using VBA and Fortran',
					'Modeling of massive concrete structures using 3D software',
					'Development of coding algorithms for managment of big data resulting from 3D models and calculations'
				]
			}, 
			{
				position: 'Junior Civil Engineer',
				duration: 'Feb 2013 - Jul 2019',
				description: 'Led the thermo-dynamic studies of hydroelectrical projects such as Porvenir II (Colombia), Minas San Francisco (Ecuador), and Embalse Bucaramanga (Colombia); as well as the design of tunnel sections for Pacific I and Pacific III road projects.',
				items: [
					'Development of coding algorithms for optimization of thermal analysis using Python.',
					'Implementation of advanced finite element software (CODE-ASTER) for thermal analysis.',
					'Development of new methdologies regarding the approch of thermal designs using machine learning for the optimization of calculations.'
				]
			}, 
			{
				position: 'Intermedian Civil Engineer',
				duration: 'Jul 2019 - Present',
				description: 'Led the thermo-dynamic studies of HydroItuango',
				items: [
					'Designs of the concrete massive structures in the hydropower plant.',
					'Designs of concrete components of the dam.'
				]
			}			
		]
	},
	{
		company: 'Concreacero',
		place: 'COL',
		positions: [
			{
				position: 'Resident Engineer',
				duration: 'Oct 2011 - Feb 2012',
				description: 'Assist in the construction of sports courts roofs, being accountable of the material reception, as-built blueprints elaboration and managment of construction site workers'
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