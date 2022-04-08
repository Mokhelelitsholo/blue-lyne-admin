import React from 'react';
import '../../styles/Requests.css';
import Icon from '@mdi/react';
import { ProductData } from '../../content/data';
import {
	mdiArchiveOutline,
	mdiCancel,
	mdiCheckboxMultipleBlankCircleOutline,
	mdiCheckCircleOutline,
	mdiChevronLeft,
	mdiChevronRight,
	mdiNewBox,
	mdiPlus,
	mdiRefresh,
	mdiTrashCanOutline,
} from '@mdi/js';

const Requests = () => {
	return (
		<>
			<div className='headerspace' />
			<div className='requestcontainer'>
				<div className='nav-path'>Communication {'>'} Requests</div>

				<section className='row'>
					<div className='col-3'>
						<div className='card'>
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
										<div className='labelcircle' />
										<div className='labelItem'>Warehouse 1</div>
									</div>
									<div className='label'>
										<div className='labelcircle' />
										<div className='labelItem'>Warehouse 2</div>
									</div>
									<div className='label'>
										<div className='labelcircle' />
										<div className='labelItem'>Warehouse 3</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card'>
							<div className='subheader'>
								<div className='buttonicon'>
									<Icon
										path={mdiCheckCircleOutline}
										title='Approve'
										size={'20px'}
										className='icon'
									/>
								</div>
								<div className='buttonicon'>
									<Icon
										path={mdiCancel}
										title='Disapprove'
										size={'20px'}
										className='icon'
									/>
								</div>
								<div className='buttonicon'>
									<Icon
										path={mdiArchiveOutline}
										title='Move To Archive'
										size={'20px'}
										className='icon'
									/>
								</div>
								<div className='buttonicon'>
									<Icon
										path={mdiTrashCanOutline}
										title='Move To Trash'
										size={'20px'}
										className='icon'
									/>
								</div>
								<div className='buttonicon'>
									<Icon
										path={mdiRefresh}
										title='Refresh'
										size={'20px'}
										className='icon'
									/>
								</div>
							</div>

							<div className='request-list mt-4'>
								<div className='listitem row'>
									<div className='col-3 leaveRequester'>
										<Icon
											path={mdiCheckboxMultipleBlankCircleOutline}
											title='categoty'
											size={'25px'}
											className='icon'
										/>
										Name Surname
									</div>
									<div className='col leaveComment'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Donec vel velit consectetur, volutpat ligula lobortis,
										mattis sapien.
									</div>
									<div className='col-2'>Date Sent</div>
								</div>

								<div className='listitem seen row'>
									<div className='col-3 leaveRequester'>
										<Icon
											path={mdiCheckboxMultipleBlankCircleOutline}
											title='categoty'
											size={'25px'}
											className='icon'
										/>
										Name Surname
									</div>
									<div className='col leaveComment'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Donec vel velit consectetur, volutpat ligula lobortis,
										mattis sapien.
									</div>
									<div className='col-2'>Date Sent</div>
								</div>
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
