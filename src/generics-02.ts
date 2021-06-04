function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item: DataType) => item[key]);
}

const dogs = [
  {
    name: "jani",
    age: 20,
  },
  {
    name: "waso",
    age: 2,
  },
];
console.log(pluck(dogs, "name"));
