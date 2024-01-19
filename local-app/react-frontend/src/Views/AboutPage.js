import React from "react";
import useDocumenTitle from "../hooks/useDocumentTitle";

const AboutPage = () => {
    useDocumenTitle("About");

    return (
        <div>
            <h1>Use this website for your testing purposes! If you come accross any issues please contact me :)</h1>
        </div>
    );
};

export default AboutPage;