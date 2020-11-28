import React, { useState, useEffect } from 'react';

const initXY = {
	x: null,
	y: null
};

export default function MouseCoordinates() {
	const [time, setTime] = useState(Date);
	const [xy, setXY] = useState(initXY);

	function mouseMoveHandle(e) {
		setXY({
			x: e.clientX,
			y: e.clientY
		});
	}

	useEffect(() => {
		window.addEventListener('mousemove', mouseMoveHandle);
	}, []);

	return (
		<div className='component-border'>
			<h3>{`x:${xy.x}, y:${xy.y}`}</h3>
		</div>
	);
}
