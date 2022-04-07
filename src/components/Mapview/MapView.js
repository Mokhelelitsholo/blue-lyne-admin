import React, { useEffect, useRef, useCallback } from 'react';
import '../../styles/MapView.css';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

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

function MapView() {
	let isMounted = useMountedState();

	const containerStyle = {
		width: '100%',
		height: '100%',
	};

	const center = {
		lat: -26.188312711016362,
		lng: 28.015390797937744,
	};

	return (
		<LoadScript googleMapsApiKey='AIzaSyCvhc43mZtP1_3EZ87hst2Hf1XsDRCpjd0'>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
				<Marker
					position={{
						lat: -26.188312711016362,
						lng: 28.015390797937744,
					}}
					title='Employee Name'
				></Marker>
			</GoogleMap>
		</LoadScript>
	);
}

export default MapView;
