interface Cat {
  name: string;
  breed: string;
}

const makeCat = (name: string, breed: string): Readonly<Cat> => {
  return {
    name,
    breed,
  };
};

const joee = makeCat("Joee", "puu");
joee.name = "Psia";

// -----------------------------------------

const reallyConst = [1, 2, 3] as const;
reallyConst[1] = 4;

// -----------------------------------------

const myTuple: readonly [number, number, number] = [1, 2, 3];

myTuple[1] = "sdd";

myTuple[1] = 4;
