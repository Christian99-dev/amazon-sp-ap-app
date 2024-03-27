export function reduceString(input: string, lenght: number): string {
  if (input.length <= lenght) {
    return input;
  } else {
    return input.substring(0, lenght) + "...";
  }
}
