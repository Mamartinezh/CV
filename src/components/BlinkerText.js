
import './BlinkerText.css'
import { useState, useRef, useEffect } from "react"

export default function BlinkerText(props) {

	const [ text, setText ] = useState("")
	const speed = props.speed || 200
	const cutPos = props.cutPos || 0
	const [ audio, setAudio ] = useState(props.audio??null)
	let nIter = props.nIter || Infinity

	useEffect(() => {
		blink()
	}, [props.audio])

	async function blink() {
		for (let sample of props.samples) {

			// let audio = props.audio?new Audio(props.audio):null
			if (audio) audio.play()
			for (let i = cutPos; i < sample.length; i++) {
				await new Promise(r => setTimeout(r, speed))
				setText(sample.substr(0, i + 1))
			}
			if (audio) audio.pause()

			await new Promise(r=>setTimeout(r,3000))
			if (nIter === 1 && sample === props.samples.at(-1)) return

			let backSpeed = speed
			if (audio) audio.play()
			for (let i = sample.length; i >=cutPos; i--) {
				backSpeed *= 0.9
				await new Promise(r => setTimeout(r, backSpeed))
				setText(sample.substr(0, i + 1))
			}
			if (audio) audio.pause()
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
