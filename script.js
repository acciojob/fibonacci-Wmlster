function fibonacci(n) {
// your code here

	let v=[0,1];

	if(n==0)
		return 0;
	if(n==1)
		return 1;

	for(let i=2;i<=n;i++)
		{
			let sum=v[i-1]+v[i-2];
			v.push(sum);
		}

	return v[n];
}

module.exports = fibonacci;
