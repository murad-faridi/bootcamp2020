import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ------------------ PROPS ----------------------------
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
// --------------------------------------------------------


// ------------------------ STATE ----------------------
// const Room = () => {
// 	const[isLit, setLit] = React.useState(false);
// 	let[temp, setTemp] = React.useState(22);
// 	return (
// 	<div className={`room ${isLit ? "lit" : "dark"}`}>
// 		The Room is {isLit ? 'Lit' : 'Dark'}
// 		<br />
// 		<button onClick={()=>setLit(true)}>ON</button>
// 		<button onClick={()=>setLit(false)}>OFF</button>
// 		<br /><br />
// 		Room Temp: {temp}
// 		<br />
// 		<button onClick={()=>setTemp(++temp)}>+</button>
// 		<button onClick={()=>setTemp(--temp)}>-</button>
// 	</div>
// 	)
// }

// ReactDOM.render(<Room />,document.getElementById('root'));
// --------------------------------------------------------------


// ------------------------ Fetch API DATA --------------------
import axios from 'axios';
function Reddit() {
	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => { // useEffect “queues up” that function to run after render is done.
		axios.get(`https://www.reddit.com/r/reactjs.json`)
			.then(res => {
				const newPosts = res.data.data.children
				.map(obj => obj.data);
		
				setPosts(newPosts);
			});
	}, []); // pass empty array [] as the second argument to useEffect so that the effect not run on every render. 
	// The useEffect hook will only queue up the effect another time if something in this array changes, and, since the array is empty, 
	// this effect will only run ONCE after the component renders the first time.
	// If we don’t pass the array at all, then the effect will run on every render. As in this case it’ll re-run the effect after we call setPosts.

	return (
		<div>
			<h1>API DATA</h1>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}

ReactDOM.render(<Reddit />,document.getElementById('root'));