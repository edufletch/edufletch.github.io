async function getDictionary() {
  const response = await fetch(
    "https://gist.githubusercontent.com/dlants/d3b25b0f6c0bf8d023f65e86498bf9e6/raw/b310b5aff00f62f5073b3b8d366f5a639aa88ee3/3000-words.txt"
  );

  const list = await response.text();

  return list.split("\n");
}

export default getDictionary;
