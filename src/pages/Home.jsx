import React from "react";
import Typography from "antd/es/typography/Typography";
import { Button } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { Paragraph } = Typography;

function Home() {
	return (
		<div className='Home'>
			<header className='flex justify-center pt-20'>
				<div className='text-container flex flex-col w-3/6 text-center items-center justify-center'>
					<Title style={{ fontSize: "50px" }}>
						The simplest way to keep notes
					</Title>
					<Paragraph style={{ fontSize: "18px", marginBottom: "30px" }}>
						Polished simplicity. Keep track of your thoughts in a minimalistic
						way, without extra fuss.
					</Paragraph>
					{!user && (
						<Link to='/signin'>
							<Button
								style={{
									background: "gray",
									color: "white",
									border: "none",
									width: "150px",
									height: "40px",
									lineHeight: "0",
									fontSize: "15px",
								}}
							>
								Register now
							</Button>
						</Link>
					)}
				</div>
			</header>

			<div className='images flex justify-center mt-10'>
				<div className='mockup-window border border-base-300 w-9/12'>
					<div className='flex justify-center px-4 py-16 border-t border-base-300'>
						<img src='https://i.imgur.com/ziwlbs5.png' alt='dashboard' />
					</div>
				</div>
			</div>

			<div className='description-box-container flex justify-center'>
				<div className='description w-9/12 flex flex-wrap items-center justify-around mt-20'>
					<div className='box-1 w-64 text-center mr-20'>
						<h4 className='font-bold'>Go back in time</h4>
						<p>
							Notes are backed up with every change, so you can see what you
							noted last week or last month.
						</p>
					</div>

					<box className='box-3 w-64 text-center mr-20'>
						<h4 className='font-bold'>It's free</h4>
						<p>Apps, backups, syncing, sharing. It is all completely free.</p>
					</box>

					<box className='box-4 w-64 text-center'>
						<h4 className='font-bold'>Use it everywhere</h4>
						<p>
							Notes stay updated across all your devices, automatically and in
							real time. There’s no “sync” button: It just works.
						</p>
					</box>
				</div>
			</div>

			<div className='control-center flex justify-center mt-20'>
				<div className='get-started w-9/12 flex justify-center items-center'>
					<div className='info-button text-center'>
						<Title style={{ fontSize: "30px", paddingBottom: "20px" }}>
							Time to get started
						</Title>
						{!user && (
							<Link to='/signin'>
								<Button
									style={{
										background: "gray",
										color: "white",
										border: "none",
										padding: "15px",
										width: "150px",
										height: "40px",
										lineHeight: "0",
										fontSize: "15px",
									}}
								>
									Register now
								</Button>
							</Link>
						)}
					</div>
				</div>
			</div>
			<div className='footer-placeholder pt-20'></div>
		</div>
	);
}

export default Home;
