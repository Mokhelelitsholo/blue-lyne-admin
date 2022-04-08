import React from 'react';
import '../../styles/Announcement.css';
import Icon from '@mdi/react';

import { mdiDotsVertical } from '@mdi/js';

const Announcement = () => {
	return (
		<>
			<div className='headerspace' />
			<div className='announcementcontainer'>
				<div className='nav-path'>Create {'>'} Announcement</div>

				<section className='card'>
					<div className='header'>
						<h6>All Announcement</h6>

						<Icon
							path={mdiDotsVertical}
							title='options'
							size={'20px'}
							color='#04084e'
							className='optionicon'
						/>
					</div>

					<div className='row mt-4'>
						<div className='col-4'>Page under construction</div>
						<div className='col'>Page under construction</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Announcement;
