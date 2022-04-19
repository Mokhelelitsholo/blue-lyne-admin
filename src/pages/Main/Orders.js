import React, { useState } from 'react';
import '../../styles/Orders.css';
import { orders } from '../../content/data';
import Icon from '@mdi/react';
import {
	mdiArchiveOutline,
	mdiCancel,
	mdiCheckCircleOutline,
	mdiChevronLeft,
	mdiChevronRight,
	mdiNewBox,
	mdiPlus,
	mdiTrashCanOutline,
	mdiCheckboxMultipleBlankCircleOutline,
	mdiHammerScrewdriver,
	mdiTruckDeliveryOutline,
	mdiCheckboxOutline,
	mdiMinusBoxOutline,
} from '@mdi/js';

const Orders = () => {
	const [selectedRequest, setSelectedRequest] = useState({
		index: '',
		status: false,
	});

	const onSelect = (index, status) => {
		if (index === selectedRequest.index) {
			setSelectedRequest({
				index: '',
				status: false,
			});
		} else {
			setSelectedRequest({
				index,
				status,
			});
		}
	};
	return (
		<>
			<div className='headerspace' />
			<div className='orderscontainer'>
				<div className='nav-path'>Orders</div>

				<section className='row'>
					<div className='col-3'>
						<div className='card fullPage'>
							<div className='header'>
								<h6>Orders</h6>
							</div>
							<div className='mt-4 leftcontainer'>
								<div className='leftoption selected'>
									<Icon
										path={mdiNewBox}
										title='icon'
										size={'25px'}
										className='icon'
									/>
									New Orders
								</div>
								<div className='leftoption'>
									<Icon
										path={mdiHammerScrewdriver}
										title='icon'
										size={'25px'}
										className='icon'
									/>
									Processed
								</div>
								<div className='leftoption'>
									<Icon
										path={mdiTruckDeliveryOutline}
										title='icon'
										size={'25px'}
										className='icon'
									/>
									Dispatched
								</div>

								<div className='leftoption'>
									<Icon
										path={mdiCheckboxOutline}
										title='icon'
										size={'25px'}
										className='icon'
									/>
									Completed
								</div>
								<div className='leftoption'>
									<Icon
										path={mdiMinusBoxOutline}
										title='icon'
										size={'25px'}
										className='icon'
									/>
									Failed
								</div>
							</div>
							<div className='mt-5'>
								<div className='header'>
									<h6 className='heading'>Labels</h6>

									<Icon
										path={mdiPlus}
										title='add'
										size={'20px'}
										color='#04084e'
										className='optionicon'
									/>
								</div>

								<div className='labels'>
									<div className='label'>
										<div
											className='labelcircle'
											style={{ backgroundColor: '#e8000d' }}
										/>
										<div className='labelItem'>Most Orders</div>
									</div>
									<div className='label'>
										<div
											className='labelcircle'
											style={{ backgroundColor: '#01b3c7' }}
										/>
										<div className='labelItem'>Most Spend</div>
									</div>
									<div className='label'>
										<div
											className='labelcircle'
											style={{ backgroundColor: '#ff8243' }}
										/>
										<div className='labelItem'>New Buyers</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card fullPage'>
							<div className='subheader'>
								<div className='row rowheading'>
									<div className='col-1'>#</div>
									<div className='col'>Owner</div>
									<div className='col'>Item Count</div>
									<div className='col'>Total Price</div>
									<div className='col-3'>Physical Address</div>
									<div className='col'>Delivery</div>
								</div>
							</div>

							<div className='listdata'>
								{orders.map((item, index) => (
									<div className='row listdata' key={index}>
										<div className='col-1'>{index + 1}</div>
										<div className='col owner'>
											<Icon
												path={mdiCheckboxMultipleBlankCircleOutline}
												title='categoty'
												size={'25px'}
												className='icon'
											/>
											{item.owner}
										</div>
										<div className='col'> {item.itemcount}</div>
										<div className='col'> {item.total}</div>
										<div className='col-3'>{item.address}</div>
										<div className='col'>{item.delivery ? 'Yes' : 'No'}</div>
									</div>
								))}
							</div>
							<div className='pagination'>
								<div>Showing 1-20 of 43</div>
								<div className='buttons'>
									<div className='btn-prev'>
										<Icon
											path={mdiChevronLeft}
											title='Prev'
											size={'25px'}
											className='icon'
										/>
									</div>
									<div className='btn-next'>
										<Icon
											path={mdiChevronRight}
											title='Next'
											size={'25px'}
											className='icon'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Orders;
