const users = [
  { username: 'habu', message: 'hello habu' },
  { username: 'habibulla', message: 'hello habibulla' },
  { username: 'habib', message: 'hello habib' },
  { username: 'refat', message: 'hello refat' },
  { username: 'tamim', message: 'hello tamim' },
  { username: 'sahed', message: 'hello sahrd sir' },
];


export function isUserFoundInMessage(userName: string, message: string): boolean {
  const foundUser = users.find(
    (user) =>
      user.username.toLowerCase() === userName.toLowerCase() &&
      user.message === message
  );
  return Boolean(foundUser); 
}


export function addUser(userName: string, message: string): void {
  const obj = { username: userName, message };
  users.push(obj);
}
