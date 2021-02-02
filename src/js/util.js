

export function copyToClipboard(text) {
	
	const listener = function (e) {
		e.preventDefault()
		e.clipboardData.setData('text/plain', text)
	}

	document.addEventListener('copy', listener)
	document.execCommand('copy')
	document.removeEventListener('copy', listener)
}

// const button = document.getElementById('copy-button')
// const copyResult = document.getElementById('copied')
// const copyTriangle = document.getElementById('triangle')

// button.addEventListener('click', showHide)

// function showHide() {
// 	copyToClipboard()
// 	copyResult.classList.add('show')
// 	copyTriangle.classList.add('show')
// 	setTimeout(() => {
// 		console.log('timeout!')
// 		copyResult.classList.remove('show')
// 		copyTriangle.classList.remove('show')
// 	}, 1000)
// }