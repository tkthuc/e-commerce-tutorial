import { UserSection, UserProfile } from "api/user-type";

export const UPDATE = "UPDATE";
export const REPLACE_ALL = "REPLACE_ALL";

const reducer = (state: UserProfile , action : { type: string, payload: any}) : UserProfile => {
    switch (action.type) {
        case UPDATE :
            const { header, data }  = action.payload;
            const { settings } = state;
            const replacedSectionIndex = settings.data.findIndex(section => section.header === header);
            const replacedData = settings.data.slice(0, replacedSectionIndex)
                                              .concat([action.payload])
                                              .concat(settings.data.slice(replacedSectionIndex+1));
            return {
                email: state.email,
                settings: {
                    header: state.settings.header,
                    data: replacedData
                }
            }
        case REPLACE_ALL:
            return action.payload;
        default:
            return state;

    }
}

export default reducer;