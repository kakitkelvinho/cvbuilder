export default function DateProcessing(date: string) {
  // Expects date in format YYYY-MM-DD
  const [year, month,] = date.split('-');
  return `${month}/${year}`;
}
