import { WorkshopDTO } from "../WorkshopTypes.ts";
import { Card } from "primereact/card";
import styles from "./WorkshopCard.module.scss";
import { useNavigate } from "react-router-dom";

interface WorkshopCardProps {
    workshop: WorkshopDTO;
}

export const WorkshopCard = (props: WorkshopCardProps) => {
    const navigate = useNavigate();

    return (
        <Card
            className={styles.workshopCard}
            onClick={() => {
                navigate(`../Workshop/${props.workshop.id}`);
            }}
        >
            <div className={styles.cardContent}>
                <span>Id: {props.workshop.id}</span>
                <span>ownerId: {props.workshop.ownerId}</span>
                <span>Name: {props.workshop.name}</span>
            </div>
        </Card>
    );
};
