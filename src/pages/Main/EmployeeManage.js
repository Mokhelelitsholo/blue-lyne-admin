import React, { useState } from 'react';
import '../../styles/EmployeeManage.css';
import Icon from '@mdi/react';
import { Employees } from '../../content/data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
	mdiCheckCircleOutline,
	mdiDotsVertical,
	mdiMagnify,
	mdiTimerSandEmpty,
} from '@mdi/js';

const EmployeeManage = () => {
	const [search, setSearch] = useState('');
	const [startDate, setStartDate] = useState(new Date());

	const checkStatus = (status) => {
		if (status === 'On Duty') {
			return (
				<div
					className='status'
					style={{ borderColor: '#4BB543', color: '#4BB543' }}
				>
					{status}
				</div>
			);
		} else if (status === 'On Leave') {
			return (
				<div
					className='status'
					style={{ borderColor: ' #eed202', color: ' #eed202' }}
				>
					{status}
				</div>
			);
		} else {
			return (
				<div
					className='status'
					style={{ borderColor: '#df4759', color: '#df4759' }}
				>
					{status}
				</div>
			);
		}
	};

	return (
		<>
			<div className='headerspace' />
			<div className='managecontainer'>
				<div className='nav-path'>Manage {'>'} Employee</div>

				<section className='main'>
					<div className='card smcard'>
						<div className='header'>
							<h6>Employee Management</h6>

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
							<div>
								<DatePicker
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									className='selectdate'
								/>
							</div>
							<div className='button'>Add Employee</div>
						</div>
						<div className='row rowheading mt-5'>
							<div className='col-1'>#</div>
							<div className='col-3'>Full Name</div>
							<div className='col'>Status</div>
							<div className='col'>Clocking</div>
							<div className='col'>Lunch</div>
							<div className='col-1'>Report</div>
						</div>
						{Employees.map((item, index) => (
							<div className='row listdata' key={index}>
								<div className='col-1'>{index}</div>
								<div className='col-3'>
									<div className='image-name'>
										<img src={item.image} className='image' alt='user' />
										<div className='user-name'>{item.name}</div>
									</div>
								</div>
								<div className='col'>{checkStatus(item.status)}</div>
								<div className='col'>
									{' '}
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
								<div className='col-1'>
									{item.report !== '' ? (
										<Icon
											path={mdiCheckCircleOutline}
											title='submitted'
											size={'30px'}
											color='#4BB543'
										/>
									) : (
										<Icon
											path={mdiTimerSandEmpty}
											title='awaiting'
											size={'30px'}
											color='#eed202'
										/>
									)}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default EmployeeManage;
