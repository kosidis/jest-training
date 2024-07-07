// test/user-manager.test.ts
import { UserManager } from '../src/usermanager';
import { User } from '../src/user';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  it('should add a user', () => {
    const user = new User(1, 'Alice', 'alice@example.com');
    userManager.addUser(user);
    expect(userManager.getAllUsers()).toContain(user);
  });

  it('should get a user by id', () => {
    const user1 = new User(1, 'Alice', 'alice@example.com');
    const user2 = new User(2, 'Bob', 'bob@example.com');
    userManager.addUser(user1);
    userManager.addUser(user2);

    const retrievedUser = userManager.getUserById(1);
    expect(retrievedUser).toEqual(user1);
  });

  it('should update a user', () => {
    const user = new User(1, 'Alice', 'alice@example.com');
    userManager.addUser(user);

    userManager.updateUser(1, 'Alice Smith', 'alice.smith@example.com');
    const updatedUser = userManager.getUserById(1);

    expect(updatedUser?.name).toBe('Alice Smith');
    expect(updatedUser?.email).toBe('alice.smith@example.com');
  });

  it('should delete a user', () => {
    const user = new User(1, 'Alice', 'alice@example.com');
    userManager.addUser(user);

    userManager.deleteUser(1);
    expect(userManager.getAllUsers()).not.toContain(user);
  });
});

