import { Column } from "primereact/column";
import { ReactElement } from "react";

interface GenericColumnProps<T> {
    field: keyof T;
    header: ReactElement | string;
}

export const GenericColumn = <T,>(props: GenericColumnProps<T>) => {
    // @ts-ignore
    //TODO?
    const fieldString: string = `${props.field}`;

    return <Column field={fieldString} header={props.header} />;
};
