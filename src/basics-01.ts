function greet(firstName: string, lastName?: string): string {
  let myName: string = firstName + lastName;
  return myName;
}

greet("Mohan");
greet("Mohan", "Dere");

interface IAddress {
  pin: number;
}
interface IStudent {
  id: number;
  name: string;
  age?: number;
  address: IAddress;
}

interface IStudents {
  students: IStudent[];
}

interface IStudent2 {
  [K: string]: IStudent[];
}

const students: IStudent[] = [
  {
    id: 1,
    name: "John",
    address: {
      pin: 34324234,
    },
  },
  {
    id: 1,
    name: "Doe",
    age: 22,
    address: {
      pin: 32,
    },
  },
];

const getStudents = (): IStudent2 => {
  return {
    students: students,
    a: students,
  };
};

const u = getStudents();

enum STEPS {
  STEP_ONE = "steps_01",
  STEP_TWO = "steps_01",
}
STEPS.STEP_ONE;
