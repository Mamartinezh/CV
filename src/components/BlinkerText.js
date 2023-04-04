
import './BlinkerText.css'
import { useState, useRef, useEffect } from "react"

export default function BlinkerText(props) {

	const [ text, setText ] = useState("")
	const speed = props.speed || 200
	const cutPos = props.cutPos || 0
	let nIter = props.nIter || Infinity

	useEffect(() => {
		blink()
	}, [])

	async function blink() {
		for (let sample of props.samples) {

			for (let i = cutPos; i < sample.length; i++) {
				await new Promise(r => setTimeout(r, speed))
				setText(sample.substr(0, i + 1))
			}

			await new Promise(r=>setTimeout(r,3000))
			if (nIter === 1 && sample === props.samples.at(-1)) return

			let backSpeed = speed
			for (let i = sample.length; i >=cutPos; i--) {
				backSpeed *= 0.9
				await new Promise(r => setTimeout(r, backSpeed))
				setText(sample.substr(0, i + 1))
			}
		}
		nIter--
		blink()		
	}

	return (

		<h1 className="glitch">
  			<span aria-hidden="true">{text}</span>
  			{text}
  			<span aria-hidden="true">{text}</span>
		</h1>

	)

}
