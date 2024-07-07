// src/user.ts

export class User {
  constructor(public id: number, public name: string, public email: string) {}

  toString(): string {
    return `User(${this.id}): ${this.name} (${this.email})`;
  }
}

