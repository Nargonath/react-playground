export async function getTasks() {
  return new Promise(resolve => {
    setTimeout(() => resolve(['task 1', 'task 2']), 1000);
  });
}
