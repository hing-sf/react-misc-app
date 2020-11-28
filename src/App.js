import './App.css';
import TagsInput from './components/AutoCompleteInput';
import Clock from './components/Clock';
import MouseCoordinates from './components/MouseCoordinates';

function App() {
	return (
		<div className='App'>
			<Clock />
			<MouseCoordinates />
			<TagsInput />
		</div>
	);
}

export default App;
