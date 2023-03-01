import { React, useState } from "react";
import { Card, Modal, Input } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
	DeleteOutlined,
} from "@ant-design/icons";

function ListviewNotes({
	title,
	body,
	id,
	getMappedNoteId,
	activeNote,
	setActiveNote,
}) {
	return (
		<>
			<div
				onClick={() => setActiveNote(id.id)}
				className={`${activeNote === id.id && "bg-stone-200"}`}
			>
				<li
					onClick={() => getMappedNoteId(id.id)}
					className='h-20 pl-5 pt-3 cursor-pointer'
				>
					<p className='font-bold text-sm'>{title.title}</p>
					<p className='text-sm'>{body.body}</p>
				</li>
			</div>
		</>
	);
}

export default ListviewNotes;
