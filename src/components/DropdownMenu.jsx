import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";

function DropdownMenu() {
	const { user, logOut } = UserAuth();

	const handleSignOut = async () => {
		await logOut();
	};

	const items = [
		{
			key: "1",
			label: <Link to='/'>Home</Link>,
		},
		{
			key: "2",
			label: <Link to='/account'>Dashboard</Link>,
		},
		{
			key: "3",
			label: (
				<Link to='/' onClick={handleSignOut}>
					Sign out
				</Link>
			),
		},
	];

	return (
		<div className='DropdownMenu'>
			<Dropdown
				menu={{
					items,
				}}
				placement='bottomRight'
			>
				<MenuOutlined className='text-base border-none cursor-pointer' />
			</Dropdown>
		</div>
	);
}

export default DropdownMenu;
