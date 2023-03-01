import {
	addDoc,
	onSnapshot,
	query,
	getDoc,
	where,
	updateDoc,
	doc,
	deleteDoc,
	getDocs,
	setDoc,
} from "firebase/firestore";
import { React, useState, useEffect, useRef } from "react";
import { db } from "../../firebase-config";
import { collection } from "firebase/firestore";
import { Button, Input } from "antd";
import ListviewNotes from "../components/ListviewNotes";

function Account() {
	const { TextArea } = Input;
	const [notes, setNotes] = useState([]);
	const [activeNote, setActiveNote] = useState(false);
	const [mappedNoteId, setMappedNoteId] = useState("");
	const [listEditInputTitle, setListEditInputTitle] = useState("");
	const [listEditInputBody, setListEditInputBody] = useState("");

	const deleteNote = async (id) => {
		await deleteDoc(doc(db, "notes", id));
	};

	const getMappedNoteId = (id) => {
		notes.map((note) => {
			if (note.id === id) {
				setMappedNoteId(note.id);
			}
		});
	};

	{
		/* const handleEnter = (e) => {
		if (e.keyCode === 13) {
			const form = e.target.form;
			const index = Array.prototype.indexOf.call(form, e.target);
			form.elements[index + 1].focus();
			e.preventDefault();
		}
	}; */
	}

	const editNote = async (id) => {
		await updateDoc(doc(db, "notes", id), {
			title: listEditInputTitle,
			body: listEditInputBody,
		});
	};

	const createNote = async (e) => {
		e.preventDefault();
		await addDoc(collection(db, "notes"), {
			title: "Untitled note",
			body: "Type something...",
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
		<div className='Account flex'>
			<div className='left h-full w-4/12 border-r border-t overflow-scroll relative'>
				<ul>
					{notes.map((note) => {
						return (
							<ListviewNotes
								activeNote={activeNote}
								setActiveNote={setActiveNote}
								id={note}
								title={note}
								body={note}
								deleteNote={deleteNote}
								getMappedNoteId={getMappedNoteId}
							/>
						);
					})}
				</ul>
				<Button
					style={{
						width: "358px",
						background: "gray",
						borderRadius: "0%",
						height: "40px",
						fontSize: "16px",
						position: "fixed",
						bottom: "0%",
						left: "0%",
					}}
					type='primary'
					onClick={createNote}
				>
					New note
				</Button>
			</div>

			<div className='right h-screen w-screen border-t'>
				{notes.map((note) => {
					if (note.id === mappedNoteId) {
						return (
							<>
								<Input
									style={{
										fontWeight: "bold",
										border: "none",
										paddingLeft: "45px",
										paddingTop: "45px",
										fontSize: "16px",
									}}
									defaultValue={note.title}
									onChange={(e) => setListEditInputTitle(e.target.value)}
								/>
								<TextArea
									rows={10}
									style={{
										height: "100vh",
										border: "none",
										paddingLeft: "45px",
									}}
									defaultValue={note.body}
									onChange={(e) => setListEditInputBody(e.target.value)}
								/>
								<button
									type='submit'
									className='border p-1 bg-stone-200 rounded-md w-20 fixed bottom-10 right-20'
									onClick={() => editNote(note.id)}
								>
									Save
								</button>
							</>
						);
					}
				})}
			</div>
		</div>
	);
}

export default Account;
