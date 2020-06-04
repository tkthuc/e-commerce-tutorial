export enum FieldType {
    TEXT,
    DROPDOWN,
    CHECKBOX,
    TEXT_AREA,
    EMAIL,
    PASSWORD
}

export interface UserSection {
    header: string,
    data: {
      
            label: string,
            value: string,
            name: string,
            type: FieldType        
    }[];
}

export interface UserProfile {
    email: string,
    settings: {
        header: string;
        data: UserSection[]
    }
}