/*let a = ['Monday', 'Tuesday',1,2,4,5,6,8];

console.log(a);

console.log(a.length);

a.push(9);
console.log(a);

a.pop();
console.log(a);

a.unshift(8);
console.log(a);

a.shift();
console.log(a);*/

/*let today = {
				Name : 'Tuesday',
				Date : 28-02-2023,
				Time : 17.05
			};
			
	//console.log(today.Name);
	//console.log(today.Time);
	//console.log(today["Date"]);
	console.log(typeof today);
	
	/*let toda = new Object({
		name : 'Bhas',
		age : 24,
		Salary : 35000,
		});
		console.log(typeof toda);
		
		console.log(toda.Salary);
		
		let emp = new Object();
		console.log(typeof emp);*/
		
		let emp = {
				name : 'Bhaskar',
				salary : 75000,
				emp_id : 100,
				greet : function() {
								console.log("Welcome");
							},
			};
			
			/*let no_of_props = 0;
			for (props in emp){
					++no_of_props; 
				}
			console.log(no_of_props);
			
			let no_of_keys = 0;
			for (keys in emp){
					++no_of_keys;
				}
			console.log(no_of_keys);
			*/
			
			/*console.log(typeof emp); //object
			console.log(emp.name); // Bhaskar
			console.log(emp.salary); // 75000
			console.log(emp.emp_id); // 100
			console.log(emp['name']); // Bhaskar
			emp.greet(); // Welcome
			
			//delete emp.emp_id;
			
			console.log(emp);
			*/
			
			//console.log(Object.keys(emp));
			//console.log(Object.values(emp));
			
			
			/*let newemp = Object.assign({},emp);
			console.log(newemp);
			//console.log(emp);
			newemp.salary = 85000;
			console.log(newemp);
			*/
			
			/*let newemp = {...emp};
			console.log(newemp);
			
			newemp.salary = 90000;
			console.log(newemp);
			*/
			
			//let hasKey = 'n1ame' in emp;
			
			let hasKey = emp.hasOwnProperty('salary');
				if (hasKey)
					{
						console.log("Y");
					}
					
				else 
					{
						console.log("N");
					}