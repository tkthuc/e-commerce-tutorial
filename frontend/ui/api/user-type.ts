export enum FieldType {
    TEXT = 'text',
    DROPDOWN = 'select',
    CHECKBOX = 'checkbox',
    TEXT_AREA = 'text-area',
    EMAIL='email',
    PASSWORD='password'
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