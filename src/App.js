import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useUser from './hooks/useUser.js';
import Header from './components/Header.js';
import SectionType from './components/SectionType.js';
// import './styles.css';
import Mutual from './components/mutual.js';
import Details from './components/details.js';
import { useState } from "react";
import "./index.css";
import TaxCalcSection from './components/TaxCalcSection'

function App() {
	const user = useUser();
    
		// const [totalIncome, setTotalIncome] = useState(0);
		// const [totalExpense, setTotalExpense] = useState(0);
		// const total = totalIncome - totalExpense; // Calculate total by subtracting expense from income
	  
	return (
		<BrowserRouter>
			<Header />

			{user === null ?
				<div className="taxt-center">
				
					<h1>Finance Management</h1>
					
					<p>Sign in with Google to use the app.</p>
				</div>
				
				:
				<>
				<h2 className="text1">MONEY</h2>
					<h1 className="txt-center">Finance Management
					
					</h1>
				
					
					
					<Routes>
						<Route path='/' element={<> <SectionType type='Income' /> <SectionType type='Expence' /> 
						{/* <SectionType type='Income' setTotal={setTotalIncome} />
      <SectionType type='Expense' setTotal={setTotalExpense} />
      <div>Total: {total}</div> */}
						</>} />
						<Route path='/investments' element={<SectionType type='investments' />} />
						<Route path='/earnings' element={<SectionType type='earnings' />} />
						{/* <Route path='/bank' element={<SectionType type='bank' />} /> */}
						<Route path='/mutual' element={<Mutual/>}/>
						<Route path='/tax' element={<TaxCalcSection/>}/>
					</Routes>
				</>
			}

			<div className="copyright">
				<small>&copy; developed by</small>
				<a href="https://travolgi.com" target="_blank" rel="noopener noreferrer">
					<img src="https://sled.travolgi.com/assets/travolgi-logo.png" alt="Travolgi logo" />
				</a>
			</div>
		</BrowserRouter>
	);
}

export default App;