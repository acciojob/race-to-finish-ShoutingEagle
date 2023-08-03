window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`


let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Promise 1 resolved');
	},2000)
})
let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('Promise 2 reject');
	},3000)
})
let promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Promise 3 resolved');
	},1000)
})
let promise4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Promise 4 resolved');
	},5000)
})
let promise5 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('Promise 5 rejected');
	},4000)
})

window.promises.push(promise1,promise2,promise3,promise4,promise5);

Promise.any(window.promises).then((result) => {
	document.getElementById("output").textContent = result;
}).catch((error) => {
	document.getElementById("output").textContent = "All promises were rejected" + result;
})











