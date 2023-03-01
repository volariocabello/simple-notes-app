import {
	addDoc,
	onSnapshot,
	query,
	updateDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";
import { React, useState, useEffect } from "react";
import Notes from "../components/Notes";
import { db } from "../../firebase-config";
import { collection } from "firebase/firestore";
import { Input } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

function Account() {
	const [notes, setNotes] = useState([]);
	const [inputTitle, setInputTitle] = useState("");
	const [inputBody, setInputBody] = useState("");
	const [activeNote, setActiveNote] = useState(false);

	const deleteNote = async (id) => {
		await deleteDoc(doc(db, "notes", id));
	};

	const handleEnter = (e) => {
		if (e.keyCode === 13) {
			const form = e.target.form;
			const index = Array.prototype.indexOf.call(form, e.target);
			form.elements[index + 1].focus();
			e.preventDefault();
		}
	};

	const editNote = async (editInput, editNoteBody, id) => {
		await updateDoc(doc(db, "notes", id), {
			title: editInput,
			body: editNoteBody,
		});
	};

	const createNote = async (e) => {
		e.preventDefault();
		await addDoc(collection(db, "notes"), {
			title: inputTitle,
			body: inputBody,
		});
		setInputTitle("");
		setInputBody("");
		return;
	};

	// read note from firebase
	useEffect(() => {
		const q = query(collection(db, "notes"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let notesArray = [];
			querySnapshot.forEach((doc) => {
				notesArray.push({ ...doc.data(), id: doc.id });
			});
			setNotes(notesArray);
		});
		return () => unsubscribe();
	}, []);

	return (
		<div className='Account'>
			<div className='account-page flex flex-col justify-center items-center'>
				<div className='form-container-w-button'>
					<div className='form-container shadow-xl mt-10 border-solid border-2 rounded-md'>
						<form className='flex'>
							<div className='inside-form-left'>
								<Input
									placeholder='Title'
									bordered={false}
									onKeyDown={handleEnter}
									value={inputTitle}
									onChange={(e) => setInputTitle(e.target.value)}
								/>
								<Input
									placeholder='Create a note...'
									bordered={false}
									value={inputBody}
									onChange={(e) => setInputBody(e.target.value)}
								/>
							</div>
							<div className='inside-form-right flex'>
								<button
									type='submit'
									onClick={createNote}
									disabled={!inputTitle && !inputBody}
								>
									<PlusSquareOutlined className='text-xs opacity-0' />
								</button>
							</div>
						</form>
					</div>
				</div>

				<div className='notes-display w-screen h-screen'>
					<ul className='mt-6 flex flex-wrap justify-center h-screen'>
						{notes.map((note) => {
							return (
								<Notes
									activeNote={activeNote}
									setActiveNote={setActiveNote}
									id={note}
									title={note}
									body={note}
									deleteNote={deleteNote}
									editNote={editNote}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Account;
