import { React, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { LayoutOutlined } from "@ant-design/icons";
import { Switch } from 'antd';

function NavbarTwo() {
	const { user, logOut } = UserAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const onChange = () => {
		if (location.pathname === '/account') {
			navigate('/listview')
		} else if (location.pathname === '/listview') {
			navigate('account')
		}
	  };

	return (
		<div className='NavbarTwo'>
			<div className='navbar bg-base-100'>
				
				<div className='navbar-start pl-[138px] w-[376px] h-[48px]'>
					<div className="all-notes">
						{location.pathname === '/listview' && <p>All notes</p>}
					</div>
				</div>
				<div className='navbar-center ml-[367px]'>
          <Link to='/'><span className="text-xl font-bold">Notat</span></Link>
				</div>
				<div className='navbar-end mr-5'>
					<Switch onClick={onChange} className='mr-10 mt-2 border-solid border-2 bg-stone-200'/>
					{user && <DropdownMenu />}
					{!user && <div className='sign-in-link pr-10 cursor-pointer'>
						<Link to='/signin'>Log in</Link>
					</div>}
					{!user && <div className='register-link border-2 border-stone-800 p-1 hover:shadow-lg cursor-pointer'>
						<Link to='/signup'>Register</Link>
					</div>}
					
				</div>
				
			</div>
			
		</div>
	);
}

export default NavbarTwo;
