function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  const newIncome = budget[income];
  budget.income = newIncome;

  const newGdp = budget[gdp];
  budget.income = newGdp;

  const newCapita = budget[capita];
  budget.income = newCapita;

  return budget;
}
