import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import '../../styles/Home.css';
import Icon from '@mdi/react';
import { ProductData, CategoryData } from '../../content/data';
import {
	mdiAccountGroupOutline,
	mdiAccountHardHatOutline,
	mdiApps,
	mdiBasket,
	mdiCartOutline,
	mdiDotsVertical,
	mdiOfficeBuilding,
	mdiShopping,
	mdiStoreSettingsOutline,
} from '@mdi/js';

const Home = () => {
	const [percentage, setPercentage] = useState({
		order: 23,
		completed: 78,
		uncomplete: 10,
	});
	const [lineStylesData] = useState({
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'Novemeber',
			'December',
		],
		datasets: [
			{
				label: 'First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40, 57, 30, 61, 46, 85],
				fill: true,
				tension: 0.1,
				borderColor: '#b09456',
			},
		],
	});

	const basicOptions = {
		maintainAspectRatio: false,
		aspectRatio: 0.6,
		plugins: {
			legend: {
				labels: {
					color: '#04084e',
				},
			},
		},
		scales: {
			x: {
				ticks: {
					color: '#9092ad',
				},
				grid: {
					color: '#fff',
				},
			},
			y: {
				ticks: {
					color: '#9092ad',
				},
				grid: {
					color: '#fff',
				},
			},
		},
	};

	const ProgressBar = (props) => {
		return (
			<div className='progress-bar'>
				<Filler percentage={props.percentage} />
			</div>
		);
	};

	const Filler = (props) => {
		return <div className='filler' style={{ width: `${props.percentage}%` }} />;
	};

	const statuscheck = (qty) => {
		if (qty < 1) {
			return (
				<div
					className='status'
					style={{ borderColor: '#df4759', color: '#df4759' }}
				>
					Out of Stock{' '}
				</div>
			);
		} else if (qty < 10) {
			return (
				<div
					className='status'
					style={{ borderColor: ' #eed202', color: ' #eed202' }}
				>
					Running low
				</div>
			);
		} else
			return (
				<div
					className='status'
					style={{ borderColor: '#4BB543', color: '#4BB543' }}
				>
					Available
				</div>
			);
	};

	const amountcal = (price, qty) => {
		let amount = Math.abs(price * qty);
		return amount.toFixed(2);
	};

	return (
		<>
			<div className='headerspace' />
			<div className='homecontainer'>
				<div className='nav-path'>Dashboard</div>

				<section className='main'>
					<div className='row'>
						<div className='col'>
							<div className='card color1'>
								<div className='circle'>
									<Icon
										path={mdiAccountGroupOutline}
										title='users'
										size={'30px'}
										color='#FFF'
									/>
								</div>
								<div className='info'>
									<div className='stats'>56034</div>
									<div className='label'>Users</div>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card color2'>
								<div className='circle'>
									<Icon
										path={mdiStoreSettingsOutline}
										title='outliet'
										size={'30px'}
										color='#FFF'
									/>
								</div>
								<div className='info'>
									<div className='stats'>63</div>
									<div className='label'>Outlets</div>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card color3'>
								<div className='circle'>
									<Icon
										path={mdiCartOutline}
										title='order'
										size={'30px'}
										color='#FFF'
									/>
								</div>
								<div className='info'>
									<div className='stats'>5603</div>
									<div className='label'>Total Orders</div>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card color4'>
								<div className='circle'>
									<Icon
										path={mdiAccountHardHatOutline}
										title='employees'
										size={'30px'}
										color='#FFF'
									/>
								</div>
								<div className='info'>
									<div className='stats'>213</div>
									<div className='label'>Employees</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='firstbody'>
					<div className='row'>
						<div className='col'>
							<div className='card graph-card'>
								<div className='header'>
									<h6>Statistics</h6>

									<Icon
										path={mdiDotsVertical}
										title='options'
										size={'20px'}
										color='#04084e'
										className='optionicon'
									/>
								</div>
								<div className='graph'>
									<Chart
										type='line'
										data={lineStylesData}
										options={basicOptions}
									/>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='card graph-card'>
								<div className='header'>
									<h6>Orders</h6>

									<Icon
										path={mdiDotsVertical}
										title='options'
										size={'20px'}
										color='#04084e'
										className='optionicon'
									/>
								</div>
								<div className='order-data mt-4'>
									<div className='data-group'>
										<div className='text-bold'>Total Orders</div>
										<div>Number of Orders - {percentage.order} %</div>
										<div>
											<ProgressBar percentage={percentage.order} />
										</div>
									</div>

									<div className='data-group'>
										<div className='text-bold'>Completed Orders</div>
										<div> Transported orders - {percentage.completed} %</div>
										<div>
											<ProgressBar percentage={percentage.completed} />
										</div>
									</div>

									<div className='data-group'>
										<div className='text-bold'>Failed Orders</div>
										<div>Uncomplete Orders - {percentage.uncomplete} %</div>
										<div>
											<ProgressBar percentage={percentage.uncomplete} />
										</div>
									</div>
								</div>
							</div>

							<div className='card smcard'>
								<div className='header'>
									<h6>Total Orders</h6>

									<Icon
										path={mdiDotsVertical}
										title='options'
										size={'20px'}
										color='#04084e'
										className='optionicon'
									/>
								</div>
								<div className='smbargraph'>
									<Chart
										type='bar'
										data={lineStylesData}
										options={basicOptions}
										style={{ width: '100%' }}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='row'>
						<div className='col'>
							<div className='card smcard'>
								<div className='flex-header'>
									<div className='data'>
										<div>Total Products</div>
										<div className='stats-bold'>23,4563</div>
									</div>
									<div>
										<Icon
											path={mdiBasket}
											title='products'
											size={'40px'}
											color='#9092ad50'
										/>
									</div>
								</div>
								<div>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
									odit aut ratione voluptate msequi nesciunt.
								</div>
								<div className='showbtn'>Show All</div>
							</div>
						</div>
						<div className='col'>
							<div className='card smcard'>
								<div className='flex-header'>
									<div className='data'>
										<div>Business Profile</div>
										<div className='stats-bold'>263</div>
									</div>
									<div>
										<Icon
											path={mdiOfficeBuilding}
											title='business'
											size={'40px'}
											color='#9092ad50'
										/>
									</div>
								</div>
								<div>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
									odit aut ratione voluptate msequi nesciunt.
								</div>
								<div className='showbtn'>Show All</div>
							</div>
						</div>
						<div className='col'>
							<div className='card smcard'>
								<div className='flex-header'>
									<div className='data'>
										<div>Market Sales</div>
										<div className='stats-bold'>R 23,4563</div>
									</div>
									<div>
										<Icon
											path={mdiShopping}
											title='market sales'
											size={'40px'}
											color='#9092ad50'
										/>
									</div>
								</div>
								<div>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
									odit aut ratione voluptate msequi nesciunt.
								</div>
								<div className='showbtn'>Show All</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='row'>
						<div className='col'>
							<div className='card smcard'>
								<div className='smheader'>
									<h6>Recent Products</h6>

									<Icon
										path={mdiDotsVertical}
										title='options'
										size={'20px'}
										color='#04084e'
										className='optionicon'
									/>
								</div>
								<div className='productlist'>
									<div className='row rowheading'>
										<div className='col-4'>Product Name</div>
										<div className='col-2'>Price</div>
										<div className='col-2'>Quantity</div>
										<div className='col-2'>Status</div>
										<div className='col-2'>Amount</div>
									</div>
									{ProductData.map((prod, index) => (
										<div className='row rowproducts' key={index}>
											<div className='col-4'>{prod.ProductName}</div>
											<div className='col-2'>R {prod.Price}</div>
											<div className='col-2'>{prod.Quantity}</div>
											<div className='col-2'>{statuscheck(prod.Quantity)}</div>
											<div className='col-2'>
												R {amountcal(prod.Price, prod.Quantity)}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='col-4'>
							<div className='card smcard'>
								<div className='smheader'>
									<h6>Best Selling Category</h6>

									<Icon
										path={mdiDotsVertical}
										title='options'
										size={'20px'}
										color='#04084e'
										className='optionicon'
									/>
								</div>
								{CategoryData.map((item, index) => (
									<div className='smheader cat' key={index}>
										<div className='innerheader'>
											<div className='catcircle'>
												<Icon
													path={mdiApps}
													title='categoty'
													size={'30px'}
													color='#FFF'
												/>
											</div>
											<div>
												<h6>{item.Category}</h6>
												<p>Sales: R {item.Sales}</p>
											</div>
										</div>
										<div className='roundamount'>R 9k</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
