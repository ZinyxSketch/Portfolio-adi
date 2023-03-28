import React from 'react';
import OctoCat from '../images/Octocat.png';
import Gmail from '../images/gmail.svg';
import Twitter from '../images/Twitter.svg';
import Menu from './Menu';

const Home = () => {
	return(
		<>
		<Menu />
		<main>
		
		<section className="hero">
			<h1>Hi! I'm Aditi Pathak</h1>
			<p>I am frontend Developer, & Designer and like to work design simple, accessible and enjoyable products</p>
		</section>	
		
		<h3>My Recent Work</h3>
		
		<section className="projects">
				
				<div className="card">
					<div className="img"></div>
					<h2>Space Pic</h2>
					<p>A website to see the Astronomical Pic of the day.</p>
					<a href="https://astro-space-pic.netlify.app" target="_blank" > see here</a>
				</div>
				
		</section>
		
		
		<section className="collab-me">
		<section  className="about-me">
			<h2>About Me</h2>
			<p>I am Aditi Pathak, and especially interested in Front End development and design. I think that good design can save a lot of
			time.</p>
			
			<p>I really love the open source community. Started learning git and its been so much useful in keeping track of my projects</p>
			<p>I live on the planet Earth in the Milky Way Galaxy. Haven't got any chance to visit other galaxy
			or even a planet.</p>
			<p>And I also like to paint, play games and lastly anime</p>

		</section>
		
		<section className='collab'>
			<h1>Let's Collaborate</h1>
			<p>Would love if you Say Hi /Namaste /Konichiwa  ^^</p>
			<a href="https://twitter.com/InfiAditi"><img src={Twitter} alt='twitter'/></a>
			<a href="mailto:aditipathak513@gmail.com"><img src={Gmail} alt='gmail' /></a>
			<a href="https://github.com/Ziinyx"><img src={OctoCat} alt='github'/></a>
		</section>
		</section>
		
		</main>
		
		<div class="footer"> 
			<p>2021 - present By Aditi. All rights reserved</p>
		</div>
		</>
	);
};

export default Home;