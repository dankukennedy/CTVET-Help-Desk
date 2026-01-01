import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

      private users = [
        {id: 1, name: 'kennedy', username:'kennedy',email: 'alice@example.com', role: 'ADMIN',contact:2334567822},
        {id: 1, name: 'kennedy', username:'kennedy',email: 'alice@example.com', role: 'ADMIN',contact:2334567822},
        {id: 1, name: 'kennedy', username:'kennedy',email: 'alice@example.com', role: 'AGENT',contact:2334567822},
        
    ];

    
  create(createUserDto: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a,b) => b.id -a.id);
    const newUser = {
      id:userByHighestId[0].id + 1,
      ...createUserDto
    }
    return this.users.push(newUser);
    return newUser
  }

  findAll(role?: 'ADMIN' | 'USER' | 'CUSTOMER' | 'AGENT' | 'INFOSEEK') {
    if(role){
      const roleArray = this.users.filter(user => user.role === role);
       if(roleArray.length === 0){
        throw new NotFoundException(`No user found with this ${role}`);
       }
       return roleArray
    } 
    return `This action returns all users`;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if(!user){
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users =  this.users.map(user =>{
      if(user.id === id){
         return {...user, ...updateUserDto}
      }
      return user;
    })
    return this.findOne(id);
  }

  remove(id: number) {
    const userToDelete = this.findOne(id);
    this.users = this.users.filter(user => user.id !==id)
    return userToDelete;
  }
}
