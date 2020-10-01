import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi(){
	return 	<div>
				Hello <strong>Murad!</strong>
				<h3>Your Work List:{1+1+1+1}</h3>
				<ul>
					<li>SASA Subscription</li>
					<li>Handle Orders</li>
					<li>Distribute DSB</li>
					<li>Handle Products</li>
				</ul>
			</div>
}

ReactDOM.render(<Hi />,document.getElementById('root'));