let countEl = document.getElementById("count-el")
let prevEntry = document.getElementById("prev-entry")
let count = 0
let savedCount = 0
let realTimeCount = 0
	
function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
	let resetCount = countEl.innerText
	realTimeCount = +realTimeCount + +resetCount
	
	

	if(savedCount === 0) {
		savedCount = realTimeCount
		prevEntry.innerText = savedCount
	} else {
		savedCount = savedCount + '-' + realTimeCount
		prevEntry.innerText = savedCount
	}
	console.log(savedCount)
	countEl.innerText = 0
	count = 0
	
}

// 1. Create a function, save(), which logs out the count when it's called


