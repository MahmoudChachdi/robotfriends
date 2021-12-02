import React from 'react';
import Card from './Card.js';


const CardList = ({robots}) => {

		return(
			<div  className='tc '> 
				{
					robots.map((user, i) => {
						return(
							<Card 
								Key={i} 
								id={robots[i].id} 
								name={robots[i].name} 
								email={robots[i].email}
							/>
						);
					})
				}
			</div>

		);
}

export default CardList;