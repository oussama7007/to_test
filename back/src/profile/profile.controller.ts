import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { GeneralInformationDto } from './dto/general-information.dto.js'
import { ProfileService } from './profile.service.js'
import { shape_up } from './dto/update-user.entity.dto.js';


@Controller('profile')
export class ProfileController {
    constructor ( private data : ProfileService) {}

    @Get()
    my_function()
    {
        return this.data.get_user();
    }

    @Put()
    my_second(@Body() info : shape_up)
    {
        this.data.update_user(info);
    }

    @Delete()
    my_delete()
    {
        
    }

}
