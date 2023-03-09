var a = [1, 'one', 2, 'two', 3, 'three', {4: 'four'}];

/*console.log(a);

console.log(a[3])

console.log(a[a.length]);
	
console.log(a[a.length-1]);

for (var i = 0; i < a.length; i++)
	{
		console.log(a[i])
	}
	
	a.push({5: 'five'});
	console.log(a);
	
	a.pop();
	console.log(a);

	
	a.shift();
	console.log(a);
	
	a.unshift(1);
	console.log(a);
	
	console.log(a.indexOf(3));
	
	a.slice(2, 3);
	console.log(a);
	
	for (var i = 0; i < a.length - 1; i++)
		{
			console.log(a[i]);
		}
		
	// While loop
	
	var i = 0;
	while (i <= a.length - 1)
		{
			console.log(a[i]);
			i ++;
		}
		
	// do - while
	
	var i = 0;
	do {
		console.log(a[i]);
		i ++;
		}
		
		while (i <= a.length-1)
		
	// for - of loop
	
	var n = [1, 2, 3, 4]
	
	for ( number of n)
		{
			console.log(n)
		}
		
	n.splice(2,2);
	console.log(n);
	
	
	// Array elements in reverse order
	function array_reverse(a)
		{
			console.log('Reverse Order of Array elements');
			
			for (var i = a.length - 1; i >= 0; i--)
				{
					console.log(a[i]);
				}
		}
		
		array_reverse( [98,97,94,95,96,91,92,93]);
		
		//  maximum  value of the given array
		function max_a()
			{
				var max = a[0];
				
				for (var q = 1; q <= a.length - 1; q++)
					{
						if (a[q] >= max)
							{
								max = a[q];
							}
					}
				return max;
			}
			
			result = max_a([2,1,4,5,6,7,9]);
			console.log(result);
			
		// sum of elements in the array
		
		function sum_aw(arr)
			{
				var sum = 0;
				
				for (num of arr)
					{
						sum += num;
					}
				return sum;
			}
			
			re = sum_aw([1,2,3,4]);
			console.log(re);*/
			
	// check weather the elements of a given array are identical or not
	
	function iden_arr(as)
		{
			var ft = as[0];
			
			for (var i = 1; i <= as.length - 1; i++)
				{
					if (as[i] != ft)
						{
							return false;
						}
				}
			return true;
		}
		
		re = iden_arr ([1, 1]);
		console.log(re);