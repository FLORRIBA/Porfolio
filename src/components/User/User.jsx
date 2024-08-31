import './User.css';
import '../../../public/images/Florencia.jpg';
const UserImage =
	import.meta.env.VITE_PUBLIC_URL + '../../../public/images/Florencia.jpg';

const User = () => {
	return (
		<section id="home" className="user-container">
			<div className="user-content">
				<h1>Building digital futures: driving discovery and creativity</h1>
				<p>
                As a full-stack developer, I try to excel at creating new experiences. Join this journey where ideas evolve to different digital places.
				</p>
			</div>
			<div className="user-img">
				<div>
					<img srcSet={UserImage}
					alt="userImage" />
				</div>
			</div>
		</section>
	);
};

export default User;
