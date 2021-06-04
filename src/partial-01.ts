interface User {
  id: string;
  name: string;
  dob: string;
  email: string;
  phone?: number;
}
const update = (user: User, payload: Partial<User>): User => {
  return {
    ...user,
    ...payload,
  };
};

const user = {
  id: "mohan",
  name: "Mohan Dere",
  age: 22,
  dob: "12/1/91",
  email: "aaa@test.com",
};

console.log(
  update(user, {
    phone: 123456789,
  })
);
