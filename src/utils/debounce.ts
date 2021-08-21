// eslint-disable-next-line @typescript-eslint/ban-types
const debounce = <T extends Function>(cb: T, wait: number): T => {
  let h = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const callable = (...args: any) => {
    clearTimeout(h);
    h = window.setTimeout(() => cb(...args), wait);
  };
  return callable as unknown as T;
};

export default debounce;
