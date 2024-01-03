import React, { useState, useEffect } from "react";
import { useParams, useNavigate as navigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
    let noteId = useParams().id;
    let [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, []);

    let getNote = async () => {
        if (noteId === "new") return;

        let response = await fetch(`/api/notes/${noteId}`);
        let data = await response.json();
        setNote(data);
    };

    let createNote = async () => {
        fetch(`/api/notes/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        });
    };

    let updateNote = async () => {
        fetch(`/api/notes/${noteId}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        });
    };

    let deleteNote = async () => {
        fetch(`/api/notes/${noteId}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        navigate("/");
    };

    let handleSubmit = () => {
        if (noteId !== "new" && (note.body === null || note.body === "")) {
            deleteNote();
        } else if (noteId !== "new") {
            updateNote();
        } else if (noteId === "new" && note !== null && note.body !== null) {
            createNote();
        }
        navigate("/");
    };

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {noteId !== "new" ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea
                value={note?.body}
                onChange={(e) => {
                    setNote({ ...note, body: e.target.value });
                }}
            ></textarea>
        </div>
    );
};

export default NotePage;
