import { useState } from "react";

const NoteForm = ({ addNote }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState(null);

    const handleCapture = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result); // saves image in base64 format.
            };
            reader.readAsDataURL(file);
        };
    };

    const getLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            }, (error) => {
                console.error("Error getting location:", error);
            });
        } else {
            console.error("Geolocation is not available.");
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        addNote(title, content, image, location);
        setTitle("");
        setContent("");
        setImage(null);
        setLocation(null);
    };

    return (
    <div className="container my-4">
        <form onSubmit={handleSubmit} className="p-3 bg-secondary rounded">
        <div className="mb-2">
            <input
                type="text"
                className="form-control"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-2">
            <textarea
                className="form-control"
                placeholder="Contenido de la nota..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </div>
        <div className="mb-2">
            <label htmlFor="" className="form-label text-white">📷 Adjuntar Foto:</label>
            <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleCapture}
                capture="environment"
            />
        </div>
        <div className="mb-2">
            <button
                type="button"
                className="btn btn-light w-100"
                onClick={getLocation}
            >
                📍 Obtener Ubicación
            </button>
            {location && (
                <p className="text-white">
                    Latitud: {location.latitude}, Longitud: {location.longitude}
                </p>
            )}
        </div>
        <button type="submit" className="btn btn-light w-100">Agregar Nota</button>
        </form>
    </div>
    );
};

export default NoteForm;
