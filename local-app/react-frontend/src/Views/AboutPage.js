import React from "react";
import useDocumenTitle from "../hooks/useDocumentTitle";

const AboutPage = () => {
    useDocumenTitle("About");

    return (
        <div>
            <h1>Explanation about</h1>
        </div>
    );
};

export default AboutPage;