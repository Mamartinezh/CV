
import { useState } from 'react'
import pcImg from './assets/render1.png'
import serverImg from './assets/render5.png'
import PieChart from "./components/PieChart"
import BlinkerText from "./components/BlinkerText"
import cvPath from './assets/Mateo-Martinez-Herrera-Resume.pdf'
import soundSrc from './assets/all-key.mp3'
import {
	langs,
	works,
	skills,
	contact,
	profile,
	samples,
	education,
	interests
} from './data'


export default function App() {

	const audio = new Audio(soundSrc)
	const [ volOn, setVolOn ] = useState(true)

	return (
		<div className='app'>
			<div className='experience'>
				<img src={serverImg} />
				<div className='profile-text'>
					<h2 className='profile-title'>
						<i className="fa-solid fa-user"></i>
						Profile
					</h2>
					<p>{profile}</p>
				</div>
				<h2 className='experience-title'>
					<i className="fa-solid fa-briefcase"></i>
					Working Experience
				</h2>
				{works.map((work, id)=>
				<div key={id} className={`experience-work_item ${id===0?'first':''}`}>
					<div className='experience-work_item--head'>
						<h3>@ {work.company}</h3>
						<i className="fa-solid fa-location-dot"></i>
						<h3>{work.place}</h3>
					</div>
					{work.positions.map((pos, pid)=>
						<div className='experience-work_item--pos'>
							<h3>{pos.position}</h3>
							<h4>{pos.duration}</h4>
							<p>{pos.description}</p>
							<ul>
							{pos.items?.map((item, iid)=>
								<li>{item}</li>
							)}
							</ul>
						</div>
					)}
				</div>
				)}
				<div className='experience-education'>
					<h2 className='experience-title'>
						<i className="fa-solid fa-user-graduate"></i>
						Education
					</h2>
					{education.map((item, id)=>
						<div className='experience-education_item'>
							<div className='experience-education_item--head'>
								<h3>@ {item.institution}</h3>
								<i className="fa-solid fa-location-dot"></i>
								<h3>{item.place}</h3>
							</div>
							<div className='experience-education_item--body'>
								<p>{item.title}</p>
								<h4>{item.date}</h4>
							</div>							
						</div>
					)}
				</div>
				<div className='experience-languages'>
					<h2 className='experience-title'>
						<i className="fa-solid fa-language"></i>
						Languages
					</h2>	
					<div className='experience-languages_cont'>
						{Object.entries(langs).map(([lang, items])=>
							<PieChart title={lang} data={items} r={80} w={30} />
						)}
					</div>
				</div>
			</div>
			<div className='profile'>
				<div className='profile-anim'>
					<img src={pcImg} />
					<BlinkerText samples={samples} audio={null} muted={true} />
				</div>
				<div className='profile-contact'>
					<h2 className='profile-title'>
						<i className="fa-solid fa-address-card"></i>
						Contact
					</h2>
					{contact.map((data, id)=>
						<a 
							title={data.label} 
							className='contact-link' 
							target='BLANK' 
							href={data.link}
						>
							{data.icon}{data.label}
						</a>
					)}
				</div>
				<div className='profile-skills'>
					<h2 className='profile-title'>
						<i className="fa-solid fa-screwdriver-wrench"></i>
						Skills
					</h2>				
					<div className='profile-skills_cont'>
						{skills.map(skill=>
							<span key={skill}>{skill}</span>
						)}
					</div>
				</div>
				<div className='profile-interests'>
					<h2 className='profile-title'>
						<i className="fa-solid fa-book"></i>
						Interests
					</h2>	
					<div className='profile-interests_cont'>
						{interests.map(interest=>
							<div key={interest.label} className='profile-interest'>
							{interest.icon}
							<span>{interest.label}</span>
							</div>
						)}
					</div>
				</div>
				<a className='pdf-link' href={cvPath} download='Mateo-Martinez-Herrera-Resume.pdf'>
					<i class="fa-solid fa-file-arrow-down"></i>
					Get Résumé PDF
				</a>
			</div>
		</div>
	)
}
