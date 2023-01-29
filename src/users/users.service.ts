import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schemas/user.schema';

@Injectable()
export class UsersService {
  
    constructor(@InjectModel('User') private readonly userModel: Model<Users>) {}

    async findAll(): Promise<Users[]> {
        return await this.userModel.find();
    }

}
