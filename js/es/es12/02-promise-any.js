const promise1 = new Promise((resolve, reject) => reject("reject 1"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 2"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 3"));

Promise.any([promise1, promise2, promise3]).then((result) =>
	console.log(result)
);
