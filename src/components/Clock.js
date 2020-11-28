import React, { useState, useEffect } from 'react';

export default function Clock() {
	const [time, setTime] = useState(Date);

	useEffect(() => {
		let handle = setInterval(() => {
			setTime(Date);
		}, 1000);

		return () => {
			clearInterval(handle);
		};
	}, []);

	return (
		<div className='component-border'>
			<h3>Date & Time: {time}</h3>
		</div>
	);
}
