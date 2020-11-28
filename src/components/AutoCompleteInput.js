import React, { useState } from 'react';

export default function TagsInput() {
	const [inputValue, setInputValue] = useState('');
	const [tags, setTags] = useState([]);

	function handleInput(e) {
		setInputValue(e.target.value);
	}

	function press(e) {
		console.log('e.key', e.key);
	}

	function removeElement(i) {
		tags.splice(i, 1);
		setTags([...tags]);
	}

	function onSubmit(e) {
		e.preventDefault();
		const normlizedInput = inputValue.toLowerCase();
		const isNotUnique = tags.indexOf(normlizedInput) > -1;
		if (!isNotUnique) {
			let arr = [...tags, normlizedInput];
			setTags(arr);
			setInputValue('');
		} else {
			console.log('is duplicate');
		}
	}

	function renderTags() {
		return tags.map((el, i) => {
			return (
				<div key={el} onClick={() => removeElement(i)}>
					{el}
				</div>
			);
		});
	}

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className='TagInputContainer'>
					<div>Tags input component here</div>
					<input
						type='text'
						value={inputValue}
						onKeyPress={e => press(e)}
						onChange={e => handleInput(e)}
					/>
					<div className='tags'>{renderTags(tags)}</div>
				</div>
			</form>
		</>
	);
}
