export function uid(): string {
  return `${Math.floor(Math.random() * 10000000000)}`;
}

export function idFunction(): string {
  return `${Date.now()}`;
}
