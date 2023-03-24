import { useState } from 'react';
import FilterBy from './FilterBy.js';
import Form from './Form.js';
import ExpenseList from './ExpenseList.js';
import Notis from './Notis.js'; 

function Notifications({ type }) {
	const currentDate = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1
	},
	[date, setDate] = useState(currentDate),
	handleChangeDate = e => {
		const { id, value } = e.target;
		setDate({ ...date, [id]: value });
	};

	return (
		<section>
			<nav>
				<h2>Notifications</h2>
			</nav>
			<Notis type={type} />
		</section>
	);
}

export default Notifications;