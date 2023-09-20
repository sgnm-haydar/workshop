import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserInterface } from '../interface/user.interface';


@Injectable()
export class UserService {
  constructor(
    @Inject('User')
    private readonly userRepository: UserInterface,
  ) {}

  async createUser(createUserDto) {
    return await this.userRepository.createUser(createUserDto);
  }
}
