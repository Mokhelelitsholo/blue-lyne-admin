import React from 'react';
import './Bubble.css';

const Bubble = (props) => {
	const { text, id, image, time } = props.message;
	const messageClass = id === 1 ? 'sent' : 'received';

	return (
		<>
			<div className={`bubble ${messageClass}`}>
				<div className='image-time'>
					<img src={image} className='image' alt='user' />
					<div className='msgtime'>{time}</div>
				</div>
				<div className='messagebubble'>
					<div className='text'>{text}</div>
				</div>
			</div>
		</>
	);
};

export default Bubble;
