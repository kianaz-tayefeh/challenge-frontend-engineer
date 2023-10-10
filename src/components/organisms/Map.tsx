import { useEffect, useState } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { Loading } from '~/components/organisms/Loading'

export const Map = () => {
	const [center, setCenter] = useState({ lat: 48.8566, lng: 2.3522 })
	const { VITE_GOOGLE_MAP_API_KEY } = import.meta.env

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: VITE_GOOGLE_MAP_API_KEY,
	})

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				const { latitude, longitude } = position.coords
				setCenter({ lat: latitude, lng: longitude })
			})
		}
	}, [])

	if (!isLoaded) {
		return <Loading />
	}

	return (
		<GoogleMap
			id='example-map'
			mapContainerStyle={{
				width: '100%',
				height: '400px',
			}}
			center={center}
			zoom={14}
		>
			<Marker position={center}>
				<div>text</div>
			</Marker>
		</GoogleMap>
	)
}

Map.displayName = 'Map'
