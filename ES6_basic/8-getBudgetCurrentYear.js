function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const dynamicIncome = income.getCurrentYear();
  const dynamicGdp = gdp.getCurrentYear();
  const dynamicCapita = capita.getCurrentYear();
  
  const budget = {
    [dynamicIncome]: income,
    [dynamicGdp]: gdp,
    [dynamicCapita]: capita,

  };
  
  return budget;
}
