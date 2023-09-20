import { HttpException, Injectable } from "@nestjs/common";

import { UserInterface } from "../interface/user.interface";
import moment = require("moment");

import { User } from "../enities/user.entity";
import { Neo4jService } from "nest-neo4j/dist";

@Injectable()
export class UserRepository implements UserInterface {
  /**
   * Inject Neo4jService
   */
  constructor(private readonly neo4jService: Neo4jService) {}
  async createUser(createUserDto: any) {
    try {
      console.log("createUser");
    } catch (error) {
      throw new Error(error);
    }
  }
}
