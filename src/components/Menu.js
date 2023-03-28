

const Menu = () => {
	
	const handleDownload = () => {
		
	}
	
	return(
		<nav>
			<div className="nav">
			<ul className ="left">
				<li>Aditi Pathak</li>
			</ul>
			<ul className="right">
				<li onclick={handleDownload} download="Aditi Pathak Resume" >Resume</li>
				<li>About Me</li>
			</ul>
			</div>
		</nav>
	)
}

export default Menu;
