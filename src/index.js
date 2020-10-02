import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const MediaCard = (props) => (
// 	 		<div>
// 				<h2>{props.title}</h2>
// 				<p>{props.body}</p>
// 				{props.isOpen ? <div>Opened</div> : <div>Closed</div>}
// 				<div>{props.imageUrl}</div>
// 			</div>
// )

// ReactDOM.render(<MediaCard 
// 	title="Welcome" 
// 	body={<div>This is <b>Body</b></div>} 
// 	imageUrl={<img src="https://technowise360.com/assets/catalog/81608.jpg" style={{width: "200px"}} />}
// 	isOpen={true}
// 	/>,document.getElementById('root'));

const Room = () => {
	const[isLit, setLit] = React.useState(false);
	let[temp, setTemp] = React.useState(22);
	return (
	<div className={`room ${isLit ? "lit" : "dark"}`}>
		The Room is {isLit ? 'Lit' : 'Dark'}
		<br />
		<button onClick={()=>setLit(true)}>ON</button>
		<button onClick={()=>setLit(false)}>OFF</button>
		<br /><br />
		Room Temp: {temp}
		<br />
		<button onClick={()=>setTemp(++temp)}>+</button>
		<button onClick={()=>setTemp(--temp)}>-</button>
	</div>
	)
}


ReactDOM.render(<Room />,document.getElementById('root'));