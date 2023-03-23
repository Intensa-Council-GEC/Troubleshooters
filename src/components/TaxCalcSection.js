import TaxCalcForm from './TaxCalcForm';

function SectionType({ type }) {
	return (
		<section>
			<nav>
				<h2>Income Details</h2>
			</nav>
			<TaxCalcForm type={type} />
		</section>
	);
}

export default SectionType;