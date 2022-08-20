import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import FormCmpnt from "./components/FormCmpnt";

function App() {
	const [formData , setFormData] = useState({});
  return (
		<div className='flex flex-col md:flex-row w-screen h-screen'>
			<div
				className='min-h-[20rem] md:h-full md:min-w-[27rem] 
							bg-bg-main-mb md:bg-bg-main-dt bg-cover bg-no-repeat
							md:pl-0
							flex flex-col-reverse md:flex-col md:items-end md:justify-center md:gap-8
							'
			>
				<Card face='front' data={formData} />
				<Card face='back' data={formData} />
			</div>
			<div className='h-full w-full'>
				<FormCmpnt onFormSubmit={(data) => setFormData(data)} />
			</div>
		</div>
	);
}

export default App;
