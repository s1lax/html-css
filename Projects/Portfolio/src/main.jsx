import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './CSS/index.css'

async function loadCSS() {
	const currentURL = window.location.pathname
	let cssPath = ''

	if (currentURL === '/') {
		cssPath = './CSS/root.css'
	} else if (currentURL === '/restaurant') {
		cssPath = './CSS/restaurant.css'
	}

	const css = await import(cssPath)

	const linkElement = document.createElement('link')
	linkElement.rel = 'stylesheet'
	linkElement.href = css/* .default */
	document.head.appendChild(linkElement)
}
loadCSS()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
