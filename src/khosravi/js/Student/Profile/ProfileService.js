

import { Post , Put} from '../../core/axiosHelper';


const api = {
    getProfileApi: "Student/GetAll",
    updateProfileApi: "Student/Update",
    changePasswordApi: "Users/ChangePassword"
}


const ProfileService = {
    getProfile: (command, then) => {
        Post(api.getProfileApi, command, then)
    },
    updateProfile: (command, then) => {
        Put(api.updateProfileApi, command, then);
    },
    changePassword :(command ,then) => {
        let url  = `${api.changePasswordApi}?${command}`;
        Post(url,null, then);
    }
}
export default ProfileService;