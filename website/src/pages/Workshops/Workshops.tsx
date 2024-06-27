import { ChangeEvent, ReactElement, useEffect, useRef, useState } from "react";
import { WorkshopDTO } from "./WorkshopTypes.ts";
import { WorkshopRestService } from "./WorkshopRestService.ts";
import { WorkshopCard } from "./WorkshopCard/WorkshopCard.tsx";
import styles from "./Workshops.module.scss";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { AddNewWorkshopModal } from "./Modal/AddNewWorkshopModal.tsx";

export const Workshops = () => {
    const [workshops, setWorkshops] = useState<WorkshopDTO[]>([]);
    const [filteredWorkshops, setFilteredWorkshops] = useState<WorkshopDTO[]>([]);
    const [searchKey, setSearchKey] = useState<string | undefined>(undefined);
    const [isAddNewButtonVisible, setIsAddNewButtonVisible] = useState<boolean>(false);

    const loadWorkshops = () => {
        WorkshopRestService.getAll().then((response: WorkshopDTO[]) => {
            setWorkshops(response);
            setFilteredWorkshops(response);
        });
    };

    useEffect(loadWorkshops, []);

    const mapWorkshopsToWorkshopCards = () =>
        filteredWorkshops.map((workshop: WorkshopDTO) => (
            <div key={workshop.id} className={styles.workshopItem}>
                <WorkshopCard workshop={workshop} />
            </div>
        ));

    const onSearchBarInputChange = (event: ChangeEvent<HTMLInputElement>) => setSearchKey(event.target.value?.toLocaleLowerCase());

    useEffect(() => {
        setFilteredWorkshops(workshops.filter((workshop: WorkshopDTO) => workshop.name.toLocaleLowerCase().includes(searchKey!)));
    }, [searchKey]);

    const getCreateNewWorkshopButton = (): ReactElement => <Button onClick={() => setIsAddNewButtonVisible(true)}>Add New</Button>;

    return (
        <div className={styles.workshops}>
            <InputText placeholder={"Search"} className={styles.searchBar} onChange={onSearchBarInputChange} />
            {getCreateNewWorkshopButton()}
            {isAddNewButtonVisible && <AddNewWorkshopModal onHide={() => setIsAddNewButtonVisible(false)} refreshWorkshops={loadWorkshops} />}
            <div className={styles.workshopsList}>{mapWorkshopsToWorkshopCards()}</div>
        </div>
    );
};
