export function debounce(func: Function, wait: number): Function {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
