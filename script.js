let start = document.querySelector("#start"),
		plus = document.getElementsByTagName("button")[0],
		expensesPlus = document.getElementsByTagName("button")[1],
		checkbox = document.querySelector("#deposit-check"),
		income = document.querySelectorAll(".additional_income-item"),
		rightSide = document.querySelectorAll(".result-total"),
		salaryAmount = document.querySelector(".salary-amount"),
		incomeTitle = document.querySelector(".income-items"),
		additionalExpenses = document.querySelector(".additional_expenses-item"),
		target = document.querySelector(".target-amount"),
		period = document.querySelector(".period-select"),
		expensesItems = document.querySelectorAll(".expenses-items");


let appData = {
		budget: 0,
		expenses: {},
		budgetDay: 0,
		budgetMonth: 0,
		expensesMonth: 0,
		income: "Фриланс",
		addExpenses: 0,
		deposit: true,
		mission: 333333,
		period,
		expensesAmount: 0,

start: function(){
	if(salaryAmount.value ===""){
			alert("Ошибка, поле 'Месячный доход' должно быть заполненно!");
			return;
		}
	appData.budget = salaryAmount.value;
	appData.getExpenses();
	appData.expensesMonth = appData.getExpensesMonth();
	appData.getBudget();
 },

addExpensesBlock: function(){
	let cloneExpensesItem = expensesItems[0].cloneNode(true);
	expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
	expensesItems = document.querySelectorAll(".expenses-items");
	if(expensesItems.length === 3 ){
		expensesPlus.style.display = 'none';
	}
},

getExpenses: function(){
	expensesItems.forEach(function(item) {
		let itemExpenses = item.querySelector(".expenses-title").value;
		let cashExpenses = +item.querySelector(".expenses-amount").value;
		if(itemExpenses !== "" && cashExpenses !== ""){
			appData.expenses[itemExpenses] = cashExpenses;
		}
	});
},


getExpensesMonth: function(){
	let sum;
	for(let key in appData.expenses){
		sum += appData.expenses[key];
	}
	return sum;
},

 getBudget: function(){
  	var accumulatedMonth = appData.budget;
  	appData.budgetMonth = appData.budget - appData.getExpensesMonth();
		appData.budgetDay = (Math.floor(appData.budgetMonth/30));
	return("Накопления за месяц: " + appData.budgetMonth + " Бюджет за день: " + appData.budgetDay);
},

	getTargetMonth: function(){
	if (appData.budgetMonth >= 0){
		//console.log("Цель будет достигнута");
	} else {
		console.log("Цель не будет достигнута");
	}
	return("За какой период будет достигнута цель: " + (Math.round(mission / appData.budgetMonth)) + " месяцев");

},

getStatusIncome: function(){
	if (appData.budgetDay >= 800) {
		return("Высокий уровень дохода");
	} else if (appData.budgetDay > 300 && appData.budgetDay < 800 ) {
		return("Средний уровень дохода");
	} else if (appData.budgetDay >= 0 && appData.budgetDay <= 300) {
		return("Низкий уровень дохода"); 
	} else if (appData.budgetDay < 0){
		return("Что-то пошло не так")
	}
}
}

start.addEventListener("click", appData.start);
expensesPlus.addEventListener("click", appData.addExpensesBlock);
//appData.budget = +money;


//for (let key in appData){
	//console.log("Наша программа включает в себя:  " + key + " " + appData);
//}
