import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.input';

@Resolver(() => CreateUserDTO)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [CreateUserDTO], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

}
