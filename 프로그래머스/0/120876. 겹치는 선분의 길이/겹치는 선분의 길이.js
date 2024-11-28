function solution(lines) {
  let line = new Map();
  for (let [start, end] of lines) {
    for (let i = start; i < end; ++i) {
      line.set(i, (line.get(i) ?? 0) + 1);
    }
  }

  return [...line.values()].filter((count) => count > 1).length;
}