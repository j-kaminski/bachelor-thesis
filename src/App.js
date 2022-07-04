import React from 'react';
import './App.css';
import { Statistics } from './Statistics';
import { Activities } from './Activities';

const tabs = [
	{
		title: 'Activities',
		component: <Activities />,
	},
	{
		title: 'Statistics',
		component: <Statistics />,
	},
];

export const App = () => {
	const [activeTab, setActiveTab] = React.useState(0);

	return (
		<div class='flex flex-col gap-4'>
			<div class='flex self-center gap-8 mt-4 text-3xl'>
				{tabs.map((tab, index) => (
					<button
						class='hover:underline hover:underline-offset-4'
						onClick={() => setActiveTab(index)}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div class='border' />
			<div class=''>
				{tabs.filter((tab, index) => index === activeTab)[0].component}
			</div>
		</div>
	);
};
