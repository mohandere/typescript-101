interface User {
  id: string;
  name: string;
  age?: number;
}
const mapById = (users: User[]): Record<string, User> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    };
  }, {});
};

const users = [
  {
    id: "mohan",
    name: "Mohan Dere",
    age: 22,
  },
  {
    id: "sagar",
    name: "Sagar Dere",
    age: 21,
  },
];

console.log(mapById(users));
