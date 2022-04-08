import React from 'react';
import '../../styles/Promotions.css';
import Icon from '@mdi/react';

import { mdiDotsVertical } from '@mdi/js';

const Promotions = () => {
	return (
		<>
			<div className='headerspace' />
			<div className='promotionscontainer'>
				<div className='nav-path'>Create {'>'} Promotions</div>

				<section className='card'>
					<div className='header'>
						<h6>All Promotions</h6>

						<Icon
							path={mdiDotsVertical}
							title='options'
							size={'20px'}
							color='#04084e'
							className='optionicon'
						/>
					</div>

					<div className='row mt-4'>
						<div className='col-4'>Promotion page under construction</div>
						<div className='col'>Promotion page under construction</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Promotions;
