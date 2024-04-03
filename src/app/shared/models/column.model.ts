export class Column {
    fieldName: string = '';
    displayText: string = '';
    dataType?: DataType;
}

export enum DataType {
    TEXT_WITH_ICON,
}