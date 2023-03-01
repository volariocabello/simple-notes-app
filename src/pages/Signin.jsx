import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "/src/context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signin() {
	const { googleSignIn, user } = UserAuth();
	const navigate = useNavigate();

	const handleGoogleSignIn = async () => {
		await googleSignIn();
	};

	useEffect(() => {
		if (user != null) {
			navigate("/account");
		}
	}, [user]);

	return (
		<div className='Signin'>
			<div className='button-container flex flex-col justify-center items-center pt-20'>
				<h1 className='pb-5 text-xl'>Get started noting around...</h1>
				<GoogleButton onClick={handleGoogleSignIn} />
			</div>
		</div>
	);
}

export default Signin;
