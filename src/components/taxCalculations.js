
export const FIFTEEN_LAKH = 1500000;
export const TWELVE_HALF_LAKH = 1250000;
export const TEN_LAKH = 1000000;
export const SEVEN_HALF_LAKH = 750000;
export const FIVE_LAKH = 500000;
export const TWO_HALF_LAKH = 250000;
export const STANDARD_DEDUCTION = 50000;



//Old tax regime calculation


export function oldTaxRegimeCalculator(gross_income, tax_exemption) {

  let income_tax_old = 0;
  gross_income -= STANDARD_DEDUCTION + tax_exemption;

  if (gross_income > FIFTEEN_LAKH) {
    const remaining = gross_income - FIFTEEN_LAKH;
    const tax = (remaining * 30) / 100;
    income_tax_old += tax;
    gross_income -= remaining;
  }

  if (gross_income > TWELVE_HALF_LAKH) {
    const remaining = gross_income - TWELVE_HALF_LAKH;
    const tax = (remaining * 30) / 100;
    income_tax_old += tax;
    gross_income -= remaining;
  }

  if (gross_income > TEN_LAKH) {
    const remaining = gross_income - TEN_LAKH;
    const tax = (remaining * 30) / 100;
    income_tax_old += tax;
    gross_income -= remaining;
  }

  if (gross_income > SEVEN_HALF_LAKH) {
    const remaining = gross_income - SEVEN_HALF_LAKH;
    const tax = (remaining * 20) / 100;
    income_tax_old += tax;
    gross_income -= remaining;
  }

  if (gross_income > FIVE_LAKH) {
    const remaining = gross_income - FIVE_LAKH;
    const tax = (remaining * 20) / 100;
    income_tax_old += tax;
    gross_income -= remaining;
  }

  if (gross_income > TWO_HALF_LAKH) {
    const remaining = gross_income - TWO_HALF_LAKH;
    const tax = (remaining * 5) / 100;
    income_tax_old += tax;
    gross_income -= remaining;
  }

  return income_tax_old;
}

//
export function newTaxRegimeCalculator(gross_income, tax_exemption) {
  let income_tax_new = 0;
  gross_income -= tax_exemption;

  if (gross_income > FIFTEEN_LAKH) {
    const remaining = gross_income - FIFTEEN_LAKH;
    const tax = (remaining * 30) / 100;
    income_tax_new += tax;
    gross_income -= remaining;
  }

  if (gross_income > TWELVE_HALF_LAKH) {
    const remaining = gross_income - TWELVE_HALF_LAKH;
    const tax = (remaining * 25) / 100;
    income_tax_new += tax;
    gross_income -= remaining;
  }

  if (gross_income > TEN_LAKH) {
    const remaining = gross_income - TEN_LAKH;
    const tax = (remaining * 20) / 100;
    income_tax_new += tax;
    gross_income -= remaining;
  }

  if (gross_income > SEVEN_HALF_LAKH) {
    const remaining = gross_income - SEVEN_HALF_LAKH;
    const tax = (remaining * 15) / 100;
    income_tax_new += tax;
    gross_income -= remaining;
  }

  if (gross_income > FIVE_LAKH) {
    const remaining = gross_income - FIVE_LAKH;
    const tax = (remaining * 10) / 100;
    income_tax_new += tax;
    gross_income -= remaining;
  }

  if (gross_income > TWO_HALF_LAKH) {
    const remaining = gross_income - TWO_HALF_LAKH;
    const tax = (remaining * 5) / 100;
    income_tax_new += tax;
    gross_income -= remaining;
  }

  return income_tax_new;
}

export function findBetterTaxRegime(income_tax_old, income_tax_new) {

  if (income_tax_new == income_tax_old) {
    return (
      "The income tax difference between Old and New Tax Regime is 0 in this case. You can opt either based on your preference."
    );
  } else {
    const preferred_income_tax = Math.min(income_tax_new, income_tax_old);

    if (preferred_income_tax == income_tax_new) {
      const difference = income_tax_old - income_tax_new;
      return (
        `Please opt for New Tax Regime as you will have to pay Rs. ${difference} lesser`
      );
    } else {
      const difference = income_tax_new - income_tax_old;
      difference=difference.toFixed(0)
      return (
        `Please opt for Old Tax Regime as you will have to pay Rs. ${difference} lesser`
      );
    }
  }

  
}



// const gross_income = parseInt(prompt("Enter Gross income: "));
// const tax_exemption_old = parseInt(
// prompt("Enter exemptions for old tax regime excluding 50k of standard deduction: ")
// );
// const tax_exemption_new = parseInt(
// prompt("Enter exemption for new tax regime (Employer PF amount): ")
// );

// const income_tax_old = oldTaxRegimeCalculator(gross_income, tax_exemption_old);
// const income_tax_new = newTaxRegimeCalculator(gross_income, tax_exemption_new);

// console.log(`Income Tax for Old tax regime = ${income_tax_old}`);
// console.log(`Income Tax for New tax regime = ${income_tax_new}`);

// findBetterTaxRegime(income_tax_old, income_tax_new);