const NoteCard = ({ note, deleteNote }) => {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-header d-flex justify-content-between">
                <span>{note.title}</span>
                <button className="btn btn-sm btn-danger" onClick={() => deleteNote(note.id)}>🗑</button>
            </div>
            <div className="card-body">
                <p className="card-text">{note.content}</p>
            </div>
            {note.image && (
                <img src={note.image} alt="Nota" className="img-fluid rounded mb-2" />
            )}
            {note.location && (
                <div className="card-footer">
                    <small className="text-muted">
                        Latitud: {note.location.latitude}, Longitud: {note.location.longitude}
                    </small>
                </div>
            )}
        </div>
    );
};

export default NoteCard;
