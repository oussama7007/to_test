import { Injectable, NotFoundException } from "@nestjs/common";
import { shape_up } from './dto/update-user.entity.dto.js';
import { NotFoundError } from "rxjs";



@Injectable()
export class ProfileService {
    private user = {
        name : "oussama",
        age : 30,
        mail : "oussama@gmail.com"
    }
    get_user()
    {
        return this.user;
    }

    update_user(data : shape_up)
    {
        this.user = {
            name : data.name,
            age : data.age,
            mail : data.mail,
        };

        return {
            message: 'successfully\n' ,
            user: this.user,
        };
    }
    delete_user()
    {
        if(!this.user){
            throw new NotFoundException("the user is already deleted");
        }
        this.user = null;
        return "Delete"
    }
}
