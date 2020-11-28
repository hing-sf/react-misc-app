import React, { useState, useEffect } from 'react';

const initProfile = {
	name: null,
	publicRepos: null
};

function FetchData() {
	const [profile, setProfile] = useState(initProfile);

	async function getProfile() {
		const resp = await fetch('https://api.github.com/users/hing-sf');
		const json = await resp.json();

		setProfile({
			name: json.name,
			publicRepos: json.public_repos
		});
	}

	useEffect(() => {
		getProfile();
	}, []);
	return (
		<div className='component-border'>
			<h2>Fetch Data</h2>
			<h3>{`Name: ${profile.name}`}</h3>
			<h3>{`Public Repos: ${profile.publicRepos}`}</h3>
		</div>
	);
}

export default FetchData;
