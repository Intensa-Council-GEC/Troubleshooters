import React from "react";
// import Card from './Card';
// import pic from '../imgs/mon.jpg'
// import Funds from './Funds.json'
import { useState, useEffect } from 'react';
import { ref, onValue, remove, update } from 'firebase/database';
import { db, auth } from '../firebase';
// import SectionType from './SectionType';  

function CurrentInvestment(type="investment",yearActive=2023, monthActive=3){
    const [data, setData] = useState([]),
			[totExpense, setTotExpense] = useState(null);
     var totalAmount=0;
	useEffect(() => {
		// const 
		const query =`/users/${auth.currentUser.uid}/investment/2023/${monthActive}/`;
		// console.log(query)
		onValue(
			ref(db, query),
			snapshot => {
				setData([]);
				const snapval = snapshot.val();
				if(snapval !== null) {
					let dbData = [];

					// monthActive === 'all' ?
						// Object.values(snapval).map(dbMonth => Object.values(dbMonth).map(dbVal => dbData = [ ...dbData, dbVal ])):
						Object.values(snapval).map(dbVal => dbData = [ ...dbData, dbVal ]);
						setData(dbData);
						console.log(dbData);
					
					let total = dbData.reduce((tot, current) => tot + parseInt(current.Amount), 0);
					setTotExpense(total.toLocaleString());
					//let grandTotal=dbData.reduce((tot,current)=>tot+ 2000(current.price),0)
					setTotExpense(total.toLocaleString());


				}
			}
		);
	}, [type, yearActive, monthActive]);

	const handleUpdate = e => {
		update(ref(db, `/users/${auth.currentUser.uid}/${type}/${yearActive}/${monthActive}/${e.target.id}`),
				{ /* update obj */ }
			)
			.then(() => console.log('Successfully updated!'))
			.catch(err => console.log(err));
	}

	const handleDelete = e => {
		const expenseId = e.target.id,
				expenseMonth = parseInt(e.target.value),
				queryMonth = monthActive === 'all' ? expenseMonth : monthActive;
		
		if(window.confirm('You want to delete this expense?')) {
			remove(ref(db, `/users/${auth.currentUser.uid}/${type}/${yearActive}/${queryMonth}/${expenseId}`))
				.then(() => console.log('Successfully deleted!'))
				.catch(err => console.log(err));
		} else {
			return;
		}
	};
	

	return (
		<ul className="expense-list">
			{data.length !== 0 ?
				<>
					{data.map(expense => 
						<li key={expense.id}>
							<span>{expense.name}</span>
							<strong>Rs {parseInt(expense.Amount).toLocaleString()}</strong>
							<time>{expense.intrest}%
                            <br />
                            {expense.year} Years
                            </time>
                            {/* <time>{expense.year} Years</time> */}
							<button
								className="delete"
								id={expense.id}
								value={expense.date.slice(5,7)}
								onClick={handleDelete}
							/>
							{/*
							<button
								className="edit"
								id={expense.id}
								onClick={handleUpdate}
							/>
							*/}
						</li>
					)}

					<li className={type !== 'earnings' ? 'tot-expense' : 'tot-earn'}>
						<span>TOTAL INVESTMENT AMOUNT:</span>
						<strong>Rs {totExpense}</strong>
					</li>
					
				</>
			:
				<li className="no-expense">
					<span>No Expenses</span>
					<strong>Rs -</strong>
					<time>gg/mm/aaaa</time>
				</li>
			}
		</ul>
    );
}
export default CurrentInvestment;