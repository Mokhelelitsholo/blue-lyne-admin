import React, { useState } from 'react';
import '../../styles/BusinessManage.css';
import Icon from '@mdi/react';
import { outlets } from '../../content/data';
import { mdiDotsVertical, mdiMagnify, mdiMenuDownOutline } from '@mdi/js';

const WarehouseManage = () => {
	const [search, setSearch] = useState('');
	const [orderBy, setOrderBy] = useState('Total Spent');

	return (
		<>
			<div className='headerspace' />
			<div className='businesscontainer'>
				<div className='nav-path'>Manage {'>'} Warehouses</div>

				<section className='main'>
					<div className='card smcard'>
						<div className='header'>
							<h6>Warehouse Management</h6>

							<Icon
								path={mdiDotsVertical}
								title='options'
								size={'20px'}
								color='#04084e'
								className='optionicon'
							/>
						</div>
						<div className='subheader'>
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
							<div className='button'>Add Warehouse</div>
						</div>
						<div className='row rowheading mt-5'>
							<div className='col-1' onClick={() => setOrderBy('')}>
								#
							</div>
							<div className='col' onClick={() => setOrderBy('Business Name')}>
								<div className='flex-align'>
									Warehouse Name
									{orderBy === 'Business Name' && (
										<Icon
											path={mdiMenuDownOutline}
											title='orderby'
											size={'20px'}
											color='#04084e'
											className='orderIcon'
										/>
									)}
								</div>
							</div>
							<div className='col' onClick={() => setOrderBy('Owner Name')}>
								<div className='flex-align'>
									Manager Name
									{orderBy === 'Owner Name' && (
										<Icon
											path={mdiMenuDownOutline}
											title='orderby'
											size={'20px'}
											color='#04084e'
											className='orderIcon'
										/>
									)}
								</div>
							</div>
							<div className='col-3' onClick={() => setOrderBy('')}>
								Physical Address
							</div>
							<div className='col' onClick={() => setOrderBy('Employee Count')}>
								<div className='flex-align'>
									Employee Count
									{orderBy === 'Employee Count' && (
										<Icon
											path={mdiMenuDownOutline}
											title='orderby'
											size={'20px'}
											color='#04084e'
											className='orderIcon'
										/>
									)}
								</div>
							</div>
							<div className='col' onClick={() => setOrderBy('Total Spent')}>
								<div className='flex-align'>
									Total Sales
									{orderBy === 'Total Spent' && (
										<Icon
											path={mdiMenuDownOutline}
											title='orderby'
											size={'20px'}
											color='#04084e'
											className='orderIcon'
										/>
									)}
								</div>
							</div>
						</div>
						{outlets.map((item, index) => (
							<div className='row listdata' key={index}>
								<div className='col-1'>{index + 1}</div>
								<div className='col'>{item.Business}</div>
								<div className='col owner'>{item.Owner}</div>
								<div className='col-3'>{item.Address}</div>
								<div className='col'>{item.Orders}</div>
								<div className='col'>R {item.Spent}</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default WarehouseManage;
