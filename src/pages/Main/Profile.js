import React from 'react';
import '../../styles/Profile.css';
import { EmployeeTime } from '../../content/data';
import Icon from '@mdi/react';

import {
	mdiDotsVertical,
	mdiAt,
	mdiMapMarkerOutline,
	mdiPhoneOutline,
} from '@mdi/js';

const Profile = () => {
	const calculatehours = (start, end, lstart, lend) => {
		start = start.split(':');
		end = end.split(':');
		lstart = lstart.split(':');
		lend = lend.split(':');

		// Shift Hours
		var startDate = new Date(0, 0, 0, start[0], start[1], 0);
		var endDate = new Date(0, 0, 0, end[0], end[1], 0);
		var diff = endDate.getTime() - startDate.getTime();
		var hours = Math.floor(diff / 1000 / 60 / 60);
		diff -= hours * 1000 * 60 * 60;
		var minutes = Math.floor(diff / 1000 / 60);

		return (
			(hours < 9 ? '0' : '') + hours + ':' + (minutes < 9 ? '0' : '') + minutes
		);
	};

	return (
		<>
			<div className='headerspace' />
			<div className='profilecontainer'>
				<div className='nav-path'>
					Manage {'>'} Employees {'>'} Profile
				</div>

				<section className='main'>
					<div className='row'>
						<div className='col-6'>
							<div className='card info'>
								<div className='image-name'>
									<img
										src='https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
										className='image'
										alt='user'
									/>
									<div>
										<div className='user-name my-2'>Employee Name</div>
										<div className='my-2'>#121256</div>
										<div className='my-2'>Employee</div>
									</div>
								</div>
								<div className='row'>
									<div className='col'>
										<div className='heading'>Work Statistics:</div>
										<div className='information'>
											<div className='stats'>60</div> Working Days
										</div>
										<div className='information'>
											<div className='stats'>66</div> Present
										</div>
										<div className='information'>
											<div className='stats'>6</div> Absent
										</div>
										<div className='information'>
											<div className='stats'>552:41 </div>
											Total Working Hours
										</div>
										<div className='information'>
											<div className='stats'>07:55 </div>
											Average Working Hours
										</div>
									</div>
									<div className='col'>
										<div className='heading'>Employee Details:</div>
										<div className='information'>
											<Icon
												path={mdiMapMarkerOutline}
												title='icon'
												size={'20px'}
												color='#04084e90'
												className='mr-2'
											/>
											Physical Address
										</div>
										<div className='information'>
											<Icon
												path={mdiPhoneOutline}
												title='icon'
												size={'20px'}
												color='#04084e90'
												className='mr-2'
											/>
											Contact Number
										</div>
										<div className='information'>
											<Icon
												path={mdiAt}
												title='icon'
												size={'20px'}
												color='#04084e90'
												className='mr-2'
											/>
											Email Address
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-6'>
							<div className='card times'>
								<div className='header'>
									<h6>Time Stats</h6>

									<Icon
										path={mdiDotsVertical}
										title='options'
										size={'20px'}
										color='#04084e'
										className='optionicon'
									/>
								</div>
								<div className='timeStats'>
									<div className='row rowheading mt-3'>
										<div className='col'>Date</div>
										<div className='col'>Clocking</div>
										<div className='col'>Lunch</div>
										<div className='col'>Total Hours</div>
									</div>

									{EmployeeTime.map((item, index) => (
										<div className='row listdata' key={index}>
											<div className='col'>{item.date}</div>
											<div className='col'>
												<div className='time-space'>
													<div
														className='status'
														style={
															item.start === '00:00'
																? { borderColor: ' #eed202', color: ' #eed202' }
																: { borderColor: '#4BB543', color: '#4BB543' }
														}
													>
														{item.start}
													</div>
													-
													<div
														className='status'
														style={
															item.end === '00:00'
																? { borderColor: ' #eed202', color: ' #eed202' }
																: { borderColor: '#df4759', color: '#df4759' }
														}
													>
														{item.end}
													</div>
												</div>
											</div>
											<div className='col'>
												{' '}
												<div className='time-space'>
													<div
														className='status'
														style={
															item.lstart === '00:00'
																? { borderColor: ' #eed202', color: ' #eed202' }
																: { borderColor: '#4BB543', color: '#4BB543' }
														}
													>
														{item.lstart}
													</div>
													-
													<div
														className='status'
														style={
															item.lend === '00:00'
																? { borderColor: ' #eed202', color: ' #eed202' }
																: { borderColor: '#df4759', color: '#df4759' }
														}
													>
														{item.lend}
													</div>
												</div>
											</div>
											<div className='col'>
												{calculatehours(
													item.start,
													item.end,
													item.lstart,
													item.lend
												)}
											</div>
										</div>
									))}
									<div className='row rowbottom'>
										<div className='col'>Overall Hours</div>
										<div className='col'></div>
										<div className='col'></div>
										<div className='col'>38:08</div>
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

export default Profile;
