import { User } from "firebase/auth";

interface UserType extends User {
    isAdmin?: boolean,
    phoneNo: string;
}

export default UserType