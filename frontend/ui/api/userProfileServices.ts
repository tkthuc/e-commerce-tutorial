
import { UserProfile, FieldType, UserSection } from "./user-type";

export interface UserProfileService {
    getUserProfile(email:string) : Promise<UserProfile>
}


export default class UserProfileServiceImpl implements UserProfileService {

    getUserProfile(email: string) : Promise<UserProfile>{
        return Promise.resolve({
            email,
            settings: {
                header: "Personal Settings",
                data: userProfileSections
            }
        });
    }

}


const userProfileSections : UserSection[] = [
    {
        header: "Personal Information",
        data: [
            {
                label: "Phone Number",
                value: "932424525",
                name: "phoneNumber",
                type: FieldType.TEXT
            },
            {
                label: "First Name",
                value: "Steven",
                name: "firstName",
                type: FieldType.TEXT
            },
            {
                label: "Last Name",
                value: "Brown",
                name: "lastName",
                type: FieldType.TEXT
            },
        ]   
    },
    {
        header: "Email",
        data: [
            {
                label: "Email",
                value: "admin@gmail.com",
                name: "email",
                type: FieldType.EMAIL
            },
            {
                label: "Password",
                value: "******",
                name: "password",
                type: FieldType.PASSWORD
            }              
        ]   
    },
    {
        header: "Address",
        data: [
            {
                label: "Address Line 1",
                value: "123 Queen St",
                name: "addressLine1",
                type: FieldType.TEXT
            },
            {
                label: "City",
                value: "Toronto",
                name: "city",
                type: FieldType.TEXT
            },
            {
                label: "Province",
                value: "Ontario",
                name: "province",
                type: FieldType.TEXT
            },
            {
                label: "Postal Code",
                value: "M3KL4T",
                name: "postalCode",
                type: FieldType.TEXT
            }                 
        ]  
    }

];