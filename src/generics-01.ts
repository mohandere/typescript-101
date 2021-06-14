// type stateType = boolean | number;
// type setterType = (val: T) => void;
// type getterType = () => T;

function useState<T>(initState: T): [() => T, (val: T) => void] {
  let state = initState;

  const setter = (val: T) => {
    state = val;
  };
  const getter = () => {
    return state;
  };

  return [getter, setter];
}

const [isLoadingGetter, isLoadingSetter] = useState<boolean>(false);

console.log("isLoading =>", isLoadingGetter());
isLoadingSetter(true);
console.log("isLoading =>", isLoadingGetter());

const count = 12;
const [countGetter, countSetter] = useState<number>(count);

console.log("count =>", countGetter());
countSetter(14);
console.log("count =>", countGetter());

/* function useState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [st1getter, st1setter] = useState(10);
console.log(st1getter());
st1setter(62);
console.log(st1getter());

const [st2getter, st2setter] = useState<string | null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());
 */
