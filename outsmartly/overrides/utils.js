import sha1 from 'sha1';

export function uniformIndex(fullSalt, numItems) {
  const hash = BigInt(`0x${sha1(fullSalt).substr(0, 15)}`);
  return Number(hash % BigInt(numItems));
}

export function chooseN(fullSalt, items, n) {
  items = [...items];
  const sample = [];
  while (n > 0 && items.length > 0) {
    const index = uniformIndex(fullSalt, items.length);
    const item = items.splice(index, 1)[0];
    sample.push(item);
    n--;
  }
  return sample;
}
