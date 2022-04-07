import React, { useState } from 'react';
import '../../styles/Messages.css';
import Icon from '@mdi/react';

import {
	mdiMagnify,
	mdiDotsVertical,
	mdiEmoticonHappyOutline,
	mdiSend,
} from '@mdi/js';

const Messages = () => {
	const [search, setSearch] = useState('');
	const [message, setMessage] = useState('');

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
								<div className='list-item'>
									<div className='image-name'>
										<img
											src='https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
											className='image'
											alt='user'
										/>
										<div className='name-messsage'>
											<div className='user-name'>Name Surname</div>
											<div className='message'>
												hello world!, How you doing?
											</div>
										</div>
										<div className='time'>Time</div>
									</div>
								</div>

								<div className='list-item selected'>
									<div className='image-name'>
										<img
											src='https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
											className='image'
											alt='user'
										/>
										<div className='name-messsage'>
											<div className='user-name'>Name Surname</div>
											<div className='message'>
												hello world!, How you doing?
											</div>
										</div>
										<div className='time'>Time</div>
									</div>
								</div>

								<div className='list-item'>
									<div className='image-name'>
										<img
											src='https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
											className='image'
											alt='user'
										/>
										<div className='name-messsage'>
											<div className='user-name'>Name Surname</div>
											<div className='message'>
												hello world!, How you doing?
											</div>
										</div>
										<div className='time'>Time</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col messagelist'>
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
								<Icon
									path={mdiDotsVertical}
									title='options'
									size={'30px'}
									color='#04084e'
									className='optionicon'
								/>
							</div>

							<div className='messagelist-container'>
								<div className='bubble'>
									<div className='image-name'>
										<img
											src='https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
											className='image'
											alt='user'
										/>
										<div className='name-messsage'>
											<div className='user-name'>Name Surname</div>
											<div className='msgtime'>Time</div>
										</div>
									</div>
									<div className='messagebubble'>
										<div className='text'>
											Hello, how ar you?
											{'\n'}I wanted to talk about...
										</div>
									</div>
								</div>

								<div className='bubble sentByMe'>
									<div className='image-name'>
										<img
											src='https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
											className='image'
											alt='user'
										/>
										<div className='name-messsage'>
											<div className='user-name'>Me</div>
											<div className='msgtime'>Time</div>
										</div>
									</div>
									<div className='messagebubble'>
										<div className='text'>
											Im good?
											{'\n'}I wanted to talk about...
										</div>
									</div>
								</div>

								<div className='bottom'>
									<div className='message-input-box'>
										<div className='emoji'>
											<Icon
												path={mdiEmoticonHappyOutline}
												title='emojis'
												size={'30px'}
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
										<div className='send-btn'>
											<Icon
												path={mdiSend}
												title='send'
												size={'20px'}
												color='#fff'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Messages;
