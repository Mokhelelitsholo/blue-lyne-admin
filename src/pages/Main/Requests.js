import React, { useState } from 'react';
import '../../styles/Requests.css';
import Icon from '@mdi/react';
import { request } from '../../content/messages';
import {
	mdiArchiveOutline,
	mdiCancel,
	mdiCheckboxMultipleBlankCircleOutline,
	mdiCheckboxMultipleBlankCircle,
	mdiCheckCircleOutline,
	mdiChevronLeft,
	mdiChevronRight,
	mdiNewBox,
	mdiPlus,
	mdiRefresh,
	mdiTrashCanOutline,
} from '@mdi/js';

const Requests = () => {
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

	const getColor = (warehouse) => {
		if (warehouse === 'Warehouse 1') {
			return '#e8000d';
		} else if (warehouse === 'Warehouse 2') {
			return '#01b3c7';
		} else return '#ff8243';
	};
	return (
		<>
			<div className='headerspace' />
			<div className='requestcontainer'>
				<div className='nav-path'>Communication {'>'} Requests</div>

				<section className='row'>
					<div className='col-3'>
						<div className='card fullPage'>
							<div className='header'>
								<h6>Leave Requests</h6>
							</div>
							<div className='mt-4 leftcontainer'>
								<div className='leftoption selected'>
									<Icon
										path={mdiNewBox}
										title='icon'
										size={'20px'}
										className='icon'
									/>
									New Request
								</div>
								<div className='leftoption'>
									<Icon
										path={mdiCheckCircleOutline}
										title='icon'
										size={'20px'}
										className='icon'
									/>
									Granted
								</div>
								<div className='leftoption'>
									<Icon
										path={mdiCancel}
										title='icon'
										size={'20px'}
										className='icon'
									/>
									Rejected
								</div>

								<div className='leftoption'>
									<Icon
										path={mdiArchiveOutline}
										title='icon'
										size={'20px'}
										className='icon'
									/>
									Achieved
								</div>
								<div className='leftoption'>
									<Icon
										path={mdiTrashCanOutline}
										title='icon'
										size={'20px'}
										className='icon'
									/>
									Trash
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
										<div className='labelItem'>Warehouse 1</div>
									</div>
									<div className='label'>
										<div
											className='labelcircle'
											style={{ backgroundColor: '#01b3c7' }}
										/>
										<div className='labelItem'>Warehouse 2</div>
									</div>
									<div className='label'>
										<div
											className='labelcircle'
											style={{ backgroundColor: '#ff8243' }}
										/>
										<div className='labelItem'>Warehouse 3</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card fullPage'>
							<div className='subheader'>
								<button
									className='buttonicon'
									disabled={!selectedRequest.status}
								>
									<Icon
										path={mdiCheckCircleOutline}
										title='Approve'
										size={'20px'}
										className='icon'
									/>
								</button>
								<button
									className='buttonicon'
									disabled={!selectedRequest.status}
								>
									<Icon
										path={mdiCancel}
										title='Disapprove'
										size={'20px'}
										className='icon'
									/>
								</button>
								<button
									className='buttonicon'
									disabled={!selectedRequest.status}
								>
									<Icon
										path={mdiArchiveOutline}
										title='Move To Archive'
										size={'20px'}
										className='icon'
									/>
								</button>
								<button
									className='buttonicon'
									disabled={!selectedRequest.status}
								>
									<Icon
										path={mdiTrashCanOutline}
										title='Move To Trash'
										size={'20px'}
										className='icon'
									/>
								</button>
								<button
									className='buttonicon'
									onClick={() =>
										setSelectedRequest({
											index: '',
											status: false,
										})
									}
								>
									<Icon
										path={mdiRefresh}
										title='Refresh'
										size={'20px'}
										className='icon'
									/>
								</button>
							</div>

							<div className='request-list mt-4'>
								{request.map((item, index) => (
									<div
										className={
											selectedRequest.index === index
												? 'listitem selected row'
												: 'listitem row'
										}
										key={index}
									>
										<div className='col-3 leaveRequester'>
											<Icon
												path={
													selectedRequest.index === index
														? mdiCheckboxMultipleBlankCircle
														: mdiCheckboxMultipleBlankCircleOutline
												}
												title='categoty'
												size={'25px'}
												className='icon'
												color={getColor(item.warehouse)}
												onClick={() => onSelect(index, true)}
											/>
											{item.requester}
										</div>
										<div className='col leaveComment'>{item.comment}</div>
										<div className='col-2'>{item.timestamp}</div>
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

export default Requests;
