import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi(){
	return 	<div>
				Hello <strong>Murad!</strong>
				<h3>Your Work List:</h3>
				<ul>
					{ for (var i = 1; i <= 4; i++) { }
						<li>{i} SASA Subscription</li>
						<li>{i} Handle Orders</li>
						<li>{i} Distribute DSB</li>
						<li>{i} Handle Products</li>
					{ } }
				</ul>
			</div>
}

ReactDOM.render(<Hi />,document.getElementById('root'));