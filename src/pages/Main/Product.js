import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chart } from 'primereact/chart';
import '../../styles/Product.css';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiDelete, mdiPencilOutline } from '@mdi/js';

const useMountedState = () => {
	const mountedRef = useRef(false);
	const isMounted = useCallback(() => mountedRef.current, []);

	useEffect(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, []);

	return isMounted;
};

const Product = () => {
	let isMounted = useMountedState();
	const [action, setAction] = useState('');
	const [image, setImage] = useState(null);
	const [errors, setErrors] = useState({});
	const [imageError, setImageError] = useState(false);
	const [loading, setLoading] = useState(false);

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

	const [product, setProduct] = useState({
		image: null,
		name: '',
		price: '',
		quantity: '',
		lastUpdate: '',
	});

	const handleImage = (e) => {
		if (e === undefined) {
		} else {
			var imageUrl = URL.createObjectURL(e.target.files[0]);
			if (isMounted()) {
				setImageError(false);
				setImage(imageUrl);
			}
		}
	};

	const handleChange = (event) => {
		if (isMounted()) {
			setProduct({
				...product,
				[event.target.name]: event.target.value,
			});
		}
	};

	const onSaveInfo = () => {
		setLoading(true);
		console.log('save info');
	};

	return (
		<>
			<div className='headerspace' />
			<div className='productcontainer'>
				<div className='nav-path'>
					Manage {'>'} Products {'>'} Product
				</div>

				<section className='main'>
					<div className='row'>
						<div className='col-6'>
							<div className='card info'>
								<div className='header'>
									<h6>Product Preview</h6>

									<div className='headerIcons'>
										<Icon
											path={mdiDelete}
											title='Delete'
											size={'25px'}
											color='#04084e'
											className='optionicon'
										/>
										<Icon
											path={mdiPencilOutline}
											title='Update'
											size={'25px'}
											color='#04084e'
											className='optionicon'
											onClick={() => setAction('Update')}
										/>
									</div>
								</div>
								<div className='row mt-3'>
									<div className='col'>
										<div className='image'>
											<img
												src='https://yourlawnwise.com/wp-content/uploads/2017/08/photo-placeholder.png'
												className='image'
												alt='product'
											/>
										</div>
									</div>

									<div className='col'>
										<div className='heading'>Product Details</div>
										<div className='product-name my-2'>Product Name</div>
										<div className='my-2'>#121256</div>

										<div className='information'>
											Price <div className='stats'>R 567</div>
										</div>
										<div className='information'>
											Quantity
											<div className='stats'> 50</div>
										</div>
										<div className='information'>
											Status
											<div className='stats'>Available</div>
										</div>
										<div className='information'>
											Amount
											<div className='stats'>R 45343</div>
										</div>
										<div className='information'>
											last Update
											<div className='stats'>14 April 2022 15:10</div>
										</div>
									</div>
								</div>
							</div>
							<div className='card smcard'>
								<div className='header'>
									<h6>Total Sales</h6>

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
						<div className='col-6'>
							<div className='card times'>
								<div className='header'>
									<h6>Action: {action}</h6>
								</div>
								<section className='form'>
									<div className='image-container mt-2'>
										<div className='image'>
											<img
												src='https://yourlawnwise.com/wp-content/uploads/2017/08/photo-placeholder.png'
												className='image'
												alt='product'
											/>
										</div>
									</div>

									<div className='form-group mt-5'>
										<div className='label'>Product Image</div>
										<input
											type='file'
											className='form-control form-control-sm'
											placeholder='Add an Image'
											onChange={(e) => handleImage(e)}
											accept='image/*'
										/>
									</div>

									<div className='form-group'>
										<div className='label'>Product Name</div>
										<div className='input'>
											<input
												required
												type='text'
												maxLength='30'
												className='form-control'
												placeholder='Product Name'
												name='name'
												onChange={handleChange}
												value={product.name}
											/>
											{errors.name && (
												<p className='text-danger'>{errors.name}</p>
											)}
										</div>
									</div>
									<div className='form-group'>
										<div className='label'>Product Price</div>
										<div className='input'>
											<input
												required
												type='text'
												maxLength='30'
												className='form-control'
												placeholder='Product price'
												name='price'
												onChange={handleChange}
												value={product.price}
											/>
											{errors.price && (
												<p className='text-danger'>{errors.price}</p>
											)}
										</div>
									</div>
									<div className='form-group'>
										<div className='label'>Product Quantity</div>
										<div className='input'>
											<input
												required
												type='text'
												maxLength='30'
												className='form-control'
												placeholder='Product Quantity'
												name='quantity'
												onChange={handleChange}
												value={product.quantity}
											/>
											{errors.quantity && (
												<p className='text-danger'>{errors.quantity}</p>
											)}
										</div>
									</div>

									<button
										type='button'
										className='btn my-3 btn-custom btn-block text-uppercase'
										onClick={() => onSaveInfo()}
									>
										{loading ? <div className='loader'></div> : 'Submit'}
									</button>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Product;
