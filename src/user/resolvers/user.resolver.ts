import {
  Resolver,
  Mutation,
  Args,
  Context,

} from '@nestjs/graphql';
import { UserService } from '../services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

 
  @Mutation('createUser')
  async createUser(
    @Args('createUserInput')
    createUserInput: any,
    @Context() context,
  ) {
    const headers = context.req.headers;
    return await this.userService.createUser(createUserInput);
  }


}
