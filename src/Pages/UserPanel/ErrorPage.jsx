import React from 'react'
import '../../Assets/Styles/Layout/Error.css'

function ErrorPage() {
  return (
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
			</div>
			<h2>404 - Səhifə Tapılmadı!</h2>
			<p>Axtardığınız səhifə ya mövcud deyil, ya da sizin girişiniz üçün icazəsi yoxdur.</p>
			<a href="/">Əsas səhifəyə qayıdın</a>
		</div>
	</div>

  )
}

export default ErrorPage