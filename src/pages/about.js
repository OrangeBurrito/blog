import React from "react"
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

import '../styles/style.css'
import { copyToClipboard } from "../js/util"

const AboutPage = () => {
	const hexCode = '#72a0c1'
	const serverIP = 'mc.radrealms.com'


	const copyHexcode = () => {
		copyToClipboard(hexCode)
	}

	const copyServerIP = () => {
		copyToClipboard(serverIP)
	}

	return (
		<Layout title="About">
			<Helmet>
				<title>About Me</title>
			</Helmet>

			<div className="about-wrap">
				<div className="text-description">
					<div className="text-blurb box">
						<h1>OrangeBurrito</h1>
						<p>The human in question -></p>
					</div>
					<div class="pfp-wrap">
						<div class="pfp-image"></div>
						<p>OrangeBurrito circa 2020</p>
  			  </div>

					<div className="main-description">
						<div className="contact box">
							<h1>Contact</h1>
							<ul>
								<a href="https://www.github.com/OrangeBurrito" target="_blank" class="contact-item">
								<h2>Github</h2>
								<svg width="100%" height="100%" viewBox="0 0 480 512">
    							<path d="M186.1,328.7C186.1,349.6 175.2,383.8 149.4,383.8C123.6,383.8 112.7,349.6 112.7,328.7C112.7,307.8 123.6,273.6 149.4,273.6C175.2,273.6 186.1,307.8 186.1,328.7ZM480,278.2C480,310.1 476.8,343.9 462.5,373.2C424.6,449.8 320.4,448 245.8,448C170,448 59.6,450.7 20.2,373.2C5.6,344.2 0,310.1 0,278.2C0,236.3 13.9,196.7 41.5,164.6C36.3,148.8 33.8,132.2 33.8,115.8C33.8,94.3 38.7,83.5 48.4,64C93.7,64 122.7,73 157.2,100C186.2,93.1 216,90 245.9,90C272.9,90 300.1,92.9 326.3,99.2C360.3,72.5 389.3,64 434.1,64C443.9,83.5 448.7,94.3 448.7,115.8C448.7,132.2 446.1,148.5 441,164C468.5,196.4 480,236.3 480,278.2ZM415.7,328.7C415.7,284.8 389,246.1 342.2,246.1C323.3,246.1 305.2,249.5 286.2,252.1C271.3,254.4 256.4,255.3 241.1,255.3C225.9,255.3 211,254.4 196,252.1C177.3,249.5 159,246.1 140,246.1C93.2,246.1 66.5,284.8 66.5,328.7C66.5,416.5 146.9,430 216.9,430L265.1,430C335.4,430 415.7,416.6 415.7,328.7ZM333.1,273.6C307.3,273.6 296.4,307.8 296.4,328.7C296.4,349.6 307.3,383.8 333.1,383.8C358.9,383.8 369.8,349.6 369.8,328.7C369.8,307.8 358.9,273.6 333.1,273.6Z"/>
								</svg>
								</a>
								<a href="https://www.twitter.com/OrangeBurrito_" target="_blank" class="contact-item">
									<h2>Twitter</h2>
									<svg width="100%" height="100%" viewBox="0 0 512 512">
    <path d="M464.736,71.733C482.024,64.537 497.704,55.879 497.704,55.879C497.704,55.879 493.547,110.553 467.963,142.623C465.982,145.848 463.146,148.959 459.37,151.716C459.695,156.264 459.695,160.813 459.695,165.361C459.695,304.081 354.112,463.919 161.137,463.919C101.685,463.919 46.457,446.7 0,416.813C8.447,417.787 16.568,418.112 25.34,418.112C74.395,418.112 119.553,401.544 155.614,373.28L154.948,372.769C98.447,329.295 64.165,286.35 44.11,247.007C15.402,190.691 15.846,141.758 22,109.222C23.567,93.972 28.375,79.866 35.735,67.249C87.39,130.924 165.035,172.507 252.1,177.056C250.476,169.259 249.501,161.138 249.501,153.016C249.501,95.188 296.283,48.082 354.435,48.082C384.648,48.082 411.937,60.752 431.105,81.219C442.607,79.013 453.879,75.814 464.736,71.733Z"/>
</svg>
								</a> 
								<div class="contact-item contact-mail">
									<h2>Email</h2>
									<svg width="100%" height="100%" viewBox="0 0 355 355"  style={{'fill-rule': 'evenodd'}}><path d="M35.49,48.66c3.14,-0.66 6.36,-0.68 9.55,-0.67c89.33,0.05 178.66,-0.05 267.98,0.06c17.39,0.12 32.79,15.55 32.94,32.93c0.1,63.34 0.01,126.68 0.04,190.02c0.19,7.58 -2.21,15.16 -6.75,21.22c-6.27,8.52 -16.69,13.85 -27.29,13.76c-88.63,0.04 -177.26,0 -265.9,0.03c-5.36,0.14 -10.83,-0.21 -15.87,-2.17c-13.02,-4.7 -22.34,-17.95 -22.17,-31.82c-0.03,-63.34 -0.02,-126.68 -0.01,-190.02c-0.21,-15.8 11.92,-30.53 27.48,-33.34Zm18.77,179.84c1.53,-0.55 3.18,-0.49 4.78,-0.51c46,0.05 92.01,-0.04 138.01,0.04c4.8,-0.12 9.1,4.2 8.92,9.01c0.13,4.77 -4.14,9.05 -8.91,8.92c-46.36,0.09 -92.73,0.01 -139.09,0.04c-4.22,0.36 -8.54,-2.35 -9.6,-6.53c-1.42,-4.49 1.53,-9.52 5.89,-10.97Zm-0.03,-39.99c1.54,-0.55 3.2,-0.5 4.81,-0.52c46.02,0.06 92.05,-0.05 138.07,0.05c4.76,-0.1 9,4.17 8.86,8.93c0.16,4.76 -4.05,9.07 -8.82,8.99c-46.4,0.09 -92.81,0.01 -139.21,0.04c-4.19,0.35 -8.47,-2.33 -9.56,-6.46c-1.45,-4.5 1.49,-9.56 5.85,-11.03Zm183.17,-99.97c2.12,-0.61 4.36,-0.53 6.55,-0.56c16.37,0.07 32.75,-0.04 49.12,0.06c6.89,-0.16 12.97,5.98 12.89,12.85c0.06,17.4 0.06,34.8 -0,52.2c0.06,6.88 -6,12.94 -12.88,12.87c-17.39,0.06 -34.79,0.06 -52.18,0c-6.88,0.09 -13.03,-6 -12.86,-12.9c-0.07,-17.36 -0.06,-34.73 -0.01,-52.09c-0.05,-5.62 3.96,-10.91 9.37,-12.43Z"/></svg>
								</div>
							</ul>
						</div>
						<div className="main-description-text box">
							<p>Welclam to my personal blog, where I upload my latest keysmash for all to see, preserved in my very own Mobile Memoir Museum™ until the sun winks out or Github's datacenters cease to be maintained.</p>
							<p>To potential employers, are you in pursuit of a hiring candidate that has more than a piece of paper and/or a degree? Peruse the blog, and if you're still interested, contact me!</p>
						</div>
					</div>
				</div>

					
				<div className="about-sidebar">
				<div className="server-section">
						<a href="https://www.technicpack.net/modpack/radrealms-server-pack.1774316" target="_blank">
							<img src="https://i.imgur.com/rbPeRqT.png" className="server-banner"></img>
						</a>
						<h3 onClick={copyServerIP}>mc.radrealms.com</h3>
						{/* <img src="../images/radrealms.png"></img> */}
						{/* <h2>RadRealms</h2> */}
					</div>
					<div className="color-picker box">
						<h1>Air Superiority Blue</h1>
						<div className="colors-show">
							<div className="color-picker-thing"></div>
							<h2>{hexCode}</h2>
							<button className="copy-button" onClick={copyHexcode}>
								<img class="icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgogICAgPHBhdGggZD0iTTE2LDFMNCwxQzIuOSwxIDIsMS45IDIsM0wyLDE3TDQsMTdMNCwzTDE2LDNMMTYsMVpNMTksNUw4LDVDNi45LDUgNiw1LjkgNiw3TDYsMjFDNiwyMi4xIDYuOSwyMyA4LDIzTDE5LDIzQzIwLjEsMjMgMjEsMjIuMSAyMSwyMUwyMSw3QzIxLDUuOSAyMC4xLDUgMTksNVpNMTksMjFMOCwyMUw4LDdMMTksN0wxOSwyMVoiIHN0eWxlPSJmaWxsOnJnYigxODYsMTg2LDE4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+Cjwvc3ZnPgo="></img>
							</button>
						</div>
					</div>
				</div>		
			</div>
		</Layout>


	)
}

export default AboutPage
