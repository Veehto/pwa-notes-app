import { useEffect } from "react";
import { useRef } from "react";

const CamInput = () => {
    // Access the camera and display the video stream
    // navigator.mediaDevices
    //   .getUserMedia({ video: true })
    //   .then((stream) => {
    //      document.getElementById("video").srcObject = stream;
    //   })
    //   .catch((error) => console.log("Error al acceder a la cámara:", error));

    const videoRef = useRef(null);

    useEffect(() => {
        // Access the camera
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((error) => console.log("Error accessing the camera:", error));

        return () => {
            // Stop the camera when unmounting the component
            if (videoRef.current && videoRef.current.srcObject) {
                let tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <div>
            <h1>CamInput</h1>
            <p>Accessing the camera and displaying the video stream</p>
            <video ref={videoRef} autoPlay style={{ width: "100%" }}></video>
        </div>
    );
};

export default CamInput;