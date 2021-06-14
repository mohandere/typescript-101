function get() {
  const failingResponse: [string, number] = ["error msg", 404];
  const passingResponse: [string, number] = ["{}", 200];
  // axios.get
  return passingResponse;
}

const resp: string = get()[0];
