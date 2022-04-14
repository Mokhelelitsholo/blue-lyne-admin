import React, { useState } from 'react';
import '../../styles/ProductManage.css';
import Icon from '@mdi/react';
import { ProductData } from '../../content/data';
import { mdiDotsVertical, mdiMagnify } from '@mdi/js';
import { Link } from 'react-router-dom';

const ProductManage = () => {
	const [search, setSearch] = useState('');

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
			<div className='productcontainer'>
				<div className='nav-path'>Manage {'>'} Products</div>

				<section className='main'>
					<div className='card smcard'>
						<div className='header'>
							<h6>Product Management</h6>

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

							<div className='button'>Add New Prodcuts</div>
						</div>
						<div className='row rowheading mt-5'>
							<div className='col-1'>#</div>
							<div className='col-3'>Product Name</div>
							<div className='col'>Price</div>
							<div className='col'>Quantity</div>
							<div className='col'>Status</div>
							<div className='col'>Amount</div>
						</div>
						{ProductData.map((prod, index) => (
							<div className='row listdata' key={index}>
								<div className='col-1'>{index + 1}</div>
								<div className='col-3'>
									<Link
										to={{
											pathname: `/product`, ///profile/?learner=${item.id}
										}}
										className='link'
									>
										{prod.ProductName}
									</Link>
								</div>
								<div className='col'>R {prod.Price}</div>
								<div className='col'>{prod.Quantity}</div>
								<div className='col'>{statuscheck(prod.Quantity)}</div>
								<div className='col'>
									R {amountcal(prod.Price, prod.Quantity)}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default ProductManage;
