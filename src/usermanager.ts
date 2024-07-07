// src/user-manager.ts
import { User } from './user';

export class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(id: number, name: string, email: string): void {
    const user = this.getUserById(id);
    if (user) {
      user.name = name;
      user.email = email;
    } else {
      throw new Error(`User with ID ${id} not found.`);
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}

