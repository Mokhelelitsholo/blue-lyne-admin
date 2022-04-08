import React, { useState } from 'react';
import '../../styles/LiveLocations.css';
import Icon from '@mdi/react';
import {
	mdiOfficeBuildingMarkerOutline,
	mdiDotsVertical,
	mdiWindowClose,
	mdiMagnify,
	mdiStoreMarkerOutline,
} from '@mdi/js';
import MapView from '../../components/Mapview/MapView';
import { users } from '../../content/messages';

const LiveLocation = () => {
	const [search, setSearch] = useState('');
	const [selected, setSelected] = useState('');

	return (
		<>
			<div className='headerspace' />
			<div className='livecontainer'>
				<div className='nav-path'>Live Location</div>

				<section className='row'>
					<div className='card fullPage'>
						<div className='col-3 chatlist'>
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
											<div className='name-messsage'>
												<div className='user-name'>Warehouse {index + 1}</div>
												<div className='message'>Physica Address</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='col center-map'>
							{selected !== '' ? (
								<>
									<div className='closeIcon'>
										<Icon
											path={mdiWindowClose}
											title='close'
											size={'30px'}
											color='#04084e'
											onClick={() => setSelected('')}
										/>
									</div>

									<div className='mapcontainer'>
										<MapView />
									</div>
								</>
							) : (
								<>
									<div className='no-messages'>
										<Icon
											path={mdiStoreMarkerOutline}
											title='location'
											size={'300px'}
											color='#04084e90'
										/>
										<div>Select a location from the list</div>
									</div>
								</>
							)}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default LiveLocation;
