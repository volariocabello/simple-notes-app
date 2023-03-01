import { React, useState } from "react";
import { Card, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Notes({ title, body, id, deleteNote, editNote }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const [editInput, setEditInput] = useState("");
	const [editNoteBody, setEditNoteBody] = useState("");

	return (
		<>
			<li className='p-5'>
				<Card
					title={title.title}
					bordered={false}
					actions={[
						<DeleteOutlined key='delete' onClick={() => deleteNote(id.id)} />,
						<EditOutlined key='edit' />,
						<p key='expand' onClick={showModal}>
							Expand
						</p>,
					]}
					style={{
						width: 300,
						borderWidth: "1px",
					}}
					hoverable={true}
				>
					<p>{body.body.substring(0, 250)}</p>
				</Card>
			</li>
			<Modal
				title={
					<Input
						defaultValue={title.title}
						onChange={(e) => setEditInput(e.target.value)}
					/>
				}
				open={isModalOpen}
				onOk={(e) => {
					e.stopPropagation();
					setIsModalOpen(false);
				}}
			>
				<p>{body.body}</p>
				<Input
					defaultValue={body.body}
					onChange={(e) => setEditNoteBody(e.target.value)}
				/>

				<p>{editInput}</p>
				<button
					type='submit'
					onClick={() => editNote(editInput, editNoteBody, id.id)}
				>
					edit
				</button>
			</Modal>
		</>
	);
}

export default Notes;
