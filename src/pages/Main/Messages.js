import React, { useState, useRef, useEffect } from 'react';
import '../../styles/Messages.css';
import Icon from '@mdi/react';
import { messages, users } from '../../content/messages';
import Bubble from '../../components/Message/Bubble';

import {
	mdiMagnify,
	mdiDotsVertical,
	mdiEmoticonHappyOutline,
	mdiSend,
	mdiForumOutline,
	mdiWindowClose,
} from '@mdi/js';

const Messages = () => {
	const dummy = useRef();
	const [search, setSearch] = useState('');
	const [message, setMessage] = useState('');
	const [selected, setSelected] = useState('');

	useEffect(() => {
		if (selected !== '') {
			dummy.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [selected]);

	return (
		<>
			<div className='headerspace' />
			<div className='messagescontainer'>
				<div className='nav-path'>Communication {'>'} Messages</div>

				<div className='messagebox'>
					<div className='card'>
						<div className='col-4 chatlist'>
							<div className='header'>
								<div className='search'>
									<input
										type='text'
										className='search-input'
										placeholder='Search...'
										onChange={(text) => setSearch(text.target.value)}
										value={search}
									/>
									<Icon
										path={mdiMagnify}
										title='search'
										size={'20px'}
										color='#04084e90'
									/>
								</div>
							</div>
							<div className='list-items'>
								{users.map((item, index) => (
									<div
										className={
											selected === index ? `list-item selected` : `list-item`
										}
										key={index}
										onClick={() => setSelected(index)}
									>
										<div className='image-name'>
											<img src={item.image} className='image' alt='user' />
											<div className='name-messsage'>
												<div className='user-name'>
													{item.name} {index + 1}
												</div>
												<div className='message'>{item.text}</div>
											</div>
											<div className='time'>{item.time}</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='col messagelist'>
							{selected !== '' ? (
								<>
									<div className='header'>
										<div className='image-name'>
											<img
												src='https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
												className='image'
												alt='user'
											/>
											<div className='name-messsage'>
												<div className='user-name'>Name Surname</div>
												<div className='message'>Offline</div>
											</div>
										</div>
										<div>
											<Icon
												path={mdiDotsVertical}
												title='options'
												size={'30px'}
												color='#04084e'
												className='optionicon'
											/>
											<Icon
												path={mdiWindowClose}
												title='close chats'
												size={'30px'}
												color='#04084e'
												className='optionicon'
												onClick={() => setSelected('')}
											/>
										</div>
									</div>

									<div className='messagelist-container'>
										<>
											<main>
												{messages &&
													messages.map((msg, index) => (
														<Bubble key={index} message={msg} />
													))}
												<span ref={dummy}></span>
											</main>
										</>
										<div className='bottom'>
											<div className='message-input-box'>
												<div className='emoji'>
													<Icon
														path={mdiEmoticonHappyOutline}
														title='emojis'
														size={'35px'}
														color='#04084e90'
													/>
												</div>
												<input
													type='text'
													className='message-input'
													placeholder='Type your message here...'
													onChange={(text) => setMessage(text.target.value)}
													value={message}
												/>
												<button className='send-btn' disabled={!message}>
													<Icon
														path={mdiSend}
														title='send'
														size={'20px'}
														color='#fff'
													/>
												</button>
											</div>
										</div>
									</div>
								</>
							) : (
								<>
									<div className='no-messages'>
										<Icon
											path={mdiForumOutline}
											title='message'
											size={'300px'}
											color='#04084e90'
										/>
										<div>Select a message sender from the message list</div>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Messages;
