const blockChain = (data, prev = { index: 0, hash: '0' }) => {
  const index = prev.index + 1;
  const strData = JSON.stringify(data);
  const hash = hashCode(`${index}${prev.hash}${strData}`);

  const block = {
    index,
    data,
    prev,
    hash,
    chain(nextData) {
      return blockChain(nextData, block);
    }
  };

  return block;
};
