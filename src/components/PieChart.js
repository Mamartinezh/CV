
import './PieChart.css'

const PieChart = (props) => {

	return (
		<div key={props.title} className='pie-chart'>
			<h3 className='pie-chart_name'>{props.title}</h3>
			<div className='pie-chart_graph'>
				{Object.entries(props.data).map(([key, data],idx)=>
					<PieSlice 
						key={key}
						text={key} 
						r={props.r}	
						w={props.w} 
						deg={idx*90} 
						col={data.col} 
						hide={data.level} />
				)}	
			</div>
		</div>		
	)
}

const PieSlice = ({text, r, w, deg, col, hide='c2'}) => {

	const spanDeg = 90 / (text?.length + 2)
	const hideDeg = 90 / (hide?.length + 2)

	return (
		<div 
			style={{
				transformOrigin: '0 100%',
				transform: `rotateZ(${deg}deg)`}}
			className='pie-slice'>
			<svg viewBox={`0 0 ${r*2} ${r*2}`}>
				<circle 
					cx={0} 
					cy={r*2}  
					r={r-w/2}
					fill='none' 
					stroke={col??'inherit'} 
					strokeWidth={w} />
			</svg>
			{text &&
				<p className='pie-slice_text'>{text.split('').map((char, i)=>
					<span 
						key={i}
						style={{
							top: `${r}px`,
							transformOrigin: `0 ${r}px`,
							transform: `rotate(${i * spanDeg + spanDeg}deg)`
						}}>
						{char}
					</span>
				)}</p>
			}
			{hide &&
				<p className='pie-slice_text hide'>{hide.split('').map((char, i)=>
					<span 
						key={i}
						style={{
							top: `${r}px`,
							transformOrigin: `0 ${r}px`,
							transform: `rotate(${i * hideDeg + hideDeg}deg) 
								translateY(22.5px)`
						}}>
						{char}
					</span>
				)}</p>
			}
		</div>
	)
}

export default PieChart