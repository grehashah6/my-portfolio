import React from "react";
import {
	ScrollContainer,
	ScrollPage,
	Animator,
	Sticky,
	StickyIn,
	ZoomIn,
	batch,
	Fade,
	FadeIn,
	Move,
	MoveIn,
	MoveOut,
} from "react-scroll-motion";
import "./Home.css";
import headerImg from "../../../src/img/grehaimg0.jpeg";
import headerImg2 from "../../../src/img/greimg2.jpeg";
import htmlImg from "../../../src/img/html.jpeg";
import cssImg from "../../../src/img/css.jpeg";
import jsImg from "../../../src/img/js.jpeg";
import reactImg from "../../../src/img/react.jpeg";
import excelImg from "../../../src/img/excel.jpeg";
import ppImg from "../../../src/img/pp.jpeg";
import { FiMail } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

const Home = () => {
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const handleContactClick = (url) => {
		const win = window.open(url, "_blank");
		win.focus();
	};
	const work = [
		{
			// name: "Project 1",
			link: "#",
			imageSrc: htmlImg,
		},
		{
			// name: "Project 2",
			link: "#",
			imageSrc: cssImg,
		},
		{
			// name: "Project 3",
			link: "#",
			imageSrc: jsImg,
		},
		{
			// name: "Project 4",
			link: "#",
			imageSrc: reactImg,
		},
		{
			// name: "Project 5",
			link: "#",
			imageSrc: excelImg,
		},
		{
			// name: "Project 6",
			link: "#",
			imageSrc: ppImg,
		},
	];
	return (
		<div>
			<ScrollContainer>
				<ScrollPage page={0}>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
						<div className="image_container">
							<img src={headerImg} alt="header image" />
							<div className="black_background"></div>
						</div>
					</Animator>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
						<div className="name">
							<h2
								className="first"
								// style={{ background: "linear-gradient(#e66465, #9198e5)" }}
							>
								Greha
							</h2>
						</div>
					</Animator>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
						<div className="name">
							<h2 className="last">Shah</h2>
						</div>
					</Animator>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
						<div className="position">
							<div></div>
							<h2 className="first">Front-End Developer</h2>
						</div>
					</Animator>
				</ScrollPage>
				<ScrollPage page={1}>
					<Animator animation={ZoomInScrollOut}>
						<div className="section_title">MY PORTFOLIO</div>
					</Animator>
				</ScrollPage>
				<ScrollPage page={2}>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
						<div className="portfolio_content">
							{work?.map((work, index) => {
								return (
									<a href={work?.link} target="_blank" key={work?.name}>
										<div className="portfolio_card">
											<div className="project_image">
												<img src={work?.imageSrc} alt={work?.name} />
											</div>
											<div className="portfolio_title">
												<h3>{work?.name}</h3>
											</div>
											<div className="count">{index}</div>
										</div>
									</a>
								);
							})}
						</div>
					</Animator>
				</ScrollPage>
				<ScrollPage page={3}>
					<Animator animation={ZoomInScrollOut}>
						<div className="section_title about_me">About Me </div>
					</Animator>
				</ScrollPage>
				<ScrollPage page={4}>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
						<div className="background_img_container">
							<img src={headerImg2} alt="my picture" />
							<div className="black_background"></div>
						</div>
					</Animator>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
						<div className="details">
							<h2 className="greeting"></h2>
							<p className="bio">
							Hello
							</p>
							<p className="bio">
							I am Greha Shah, a second year student of Computer Engineering in D. J. College of Engineering.
								I am enthusiastic about learning new things and when it comes to technology, I am more than excited.
							</p>
							<p className="bio">
								I like to play keyboard in my past-time. Also I am quite keen to learn things about space.
								I am a part of various committees in D. J. Sanghvi and I believe I can make quite a good leader.
							</p>
						</div>
					</Animator>
				</ScrollPage>
				<ScrollPage page={5}>
					<Animator animation={ZoomInScrollOut}>
						<div className="section_title contact_me">Contact Me </div>
					</Animator>
				</ScrollPage>
				<ScrollPage page={6}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "200px",
						}}
					>
						<span
							style={{
								fontSize: "40px",
							}}
						>
							{/* insta link */}
							<Animator animation={MoveIn(-1000, 0)}>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
									onClick={() =>
										handleContactClick("https://www.instagram.com/greha_shah_/")
									}
								>
									<SiInstagram
										color="white"
										className="contact_list_icon"
									></SiInstagram>
									<p>greha_shah_</p>
								</div>
							</Animator>
							{/* gmail link */}
							<Animator animation={MoveIn(1000, 0)}>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
									onClick={() =>
										handleContactClick(
											"https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSMVWLSVlNrhlldZPqhQGljjrkBZdKVnWGQwPSFSTGMhlJVwpjkwSwwPFzjghzvBVjlnWnGd"
										)
									}
								>
									<FiMail color="white" className="contact_list_icon"></FiMail>
									<p>grehashah6@gmail.com</p>
								</div>
							</Animator>
							{/* linkedin */}
							<Animator animation={MoveOut(1000, 0)}>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
									onClick={() =>
										handleContactClick(
											"http://linkedin.com/in/greha-shah-23786315b"
										)
									}
								>
									<TiSocialLinkedin
										color="white"
										className="contact_list_icon"
									></TiSocialLinkedin>
									<p>grehashah6</p>
								</div>
							</Animator>
							{/* github */}
							<Animator animation={MoveOut(-1000, 0)}>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
									onClick={() =>
										handleContactClick("https://github.com/grehashah6")
									}
								>
									<FiGithub
										color="white"
										className="contact_list_icon"
									></FiGithub>
									<p>grehashah6</p>
								</div>
							</Animator>
						</span>
					</div>
				</ScrollPage>
				<ScrollPage page={7}>
					<div style={{fontSize:100}}>Thankyou</div>
				</ScrollPage>
			</ScrollContainer>
		</div>
	);
};

export default Home;
