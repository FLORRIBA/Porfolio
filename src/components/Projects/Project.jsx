import './Project.css';

const TabuOdin = '../../../public/images/Logo-Nav.png'; // Ruta desde el directorio public


const Project = () => {
	return (
		<>
			<div id="projects" className="porfolio">
				<h1 className="section-title">My work</h1>
				<div className="container">
					<div className="work-list">

						<div className="work">
							<img src={TabuOdin} alt="Tabu&Odin" />
							<div className="layer">
								<h3>
									VIDA CONSCIENTE 'gracias' <br /> 
								</h3>
								<p>
								Final Project of the Bootcamp fullstack Engineer 2023: ecommerce application using the MERN stack (MongoDB, Express, React, Node.js.) <br /> This project allowed me to experience the full software development cycle, from conceptualization to implementation and deployment.
								</p>
								<a href="https://gregarious-strudel-a8a201.netlify.app/" target='blank'>
									<i 
									// className="fa-solid fa-arrow-up-right-from-square"
									>proyect</i>{' '}
								</a>
								<a href="https://github.com/FLORRIBA" target='blank'>
									<i 
									// className="fa-solid fa-arrow-up-right-from-square"
									>github</i>{' '}
								</a>
							</div>
						</div>

					
						
					</div>
					<a href="" className="btn">
						See more
					</a>
				</div>
			</div>
		</>
	);
};

export default Project;
