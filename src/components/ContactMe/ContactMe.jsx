import Swal from 'sweetalert2';
import './ContactMe.css';

const Resume = '/public/cv/MariaFlorenciaRibaResume.pdf';
const Cv= "/public/cv/MariaFlorenciaRibaCV.pdf";

const ContactMe = () => {
	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append('access_key', 'a92b28d5-8190-40e2-a408-bd3ab73027f0');

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: json,
		}).then((res) => res.json());

		if (res.success) {
			console.log('Success', res);
            Swal.fire({
                icon: "success",
                title:"Email sent",
                text:"Thank you for Contact Me !!!",
                timer: 3000,
            });

		}
        event.target.reset();
	};

	return (
		<>
			<div id="contactMe" className="contact">
				<div className="container">
					<div className="row">
						<div className="contact-left">
							<h1 className="sub-title">Contact Me</h1>
							<p>
								<i className="fa-solid fa-paper-plane"></i>
								floripina209@gmail.com
							</p>
							<p>
								<i className="fa-solid fa-square-phone"></i>{' '}
								+54-341-3098401
							</p>
							<div className="social-icons">
								<a href="https://github.com/FLORRIBA" target="_blank">
									<i className="fa-brands fa-github"></i>
								</a>
								<a href="https://www.linkedin.com/in/maria-florencia-riba-/" target="_blank">
									<i className="fa-brands fa-linkedin"></i>
								</a>
							</div>
							<a href={Cv} download="MariaFlorenciaRibaCv.pdf" className="btn btn2">
								Download CV (ES)
							</a>
							<a href={Resume} download="MariaFlorenciaRibaResume.pdf" className="btn btn2">
								Download Resume (EN)
							</a>
						</div>
						<div className="contact-right">
							<form name="" onSubmit={onSubmit}>
								<input type="text" name="Name" placeholder="Your Name" required />
								<input type="email" name="Email" placeholder="Your Email" required />
								<textarea name="Message" cols="30" rows="6" placeholder="Your Message" required></textarea>
								<button type="submit" className="btn btn2">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactMe;
