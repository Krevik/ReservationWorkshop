import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Workshop = () => {
    const { workshopId } = useParams();

    useEffect(() => {
        if (workshopId) {
        }
        //fetch workshop details
    }, [workshopId]);

    return <>{workshopId}</>;
};
