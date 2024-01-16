import { useEffect } from "react";

const useDocumenTitle = (title) => {
    useEffect(() => {
        document.title = title? `Qualitier Shop - ${title}`: `Qualitier Shop`;
    }, [title]);
};

export default useDocumenTitle;