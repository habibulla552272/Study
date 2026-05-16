// 20-line example: simple user factory with hashed password
import bcrypt from 'bcrypt';

/**
 * Create a user object with hashed password
 * @param {string} username
 * @param {string} password
 * @returns {Promise<object>}
 */
export async function createUser(username, password) {
  const hash = await bcrypt.hash(password, 10);
  return {
    id: Date.now().toString(36),
    username: username.trim().toLowerCase(),
    passwordHash: hash,
    createdAt: new Date().toISOString()
  };
}

export default createUser
