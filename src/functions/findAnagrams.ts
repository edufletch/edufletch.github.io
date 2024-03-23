function findAnagrams({
  string,
  arr,
  dict,
}: {
  string: string;
  arr: string[];
  dict: string[];
}): void {
  console.log("in findAnagrams");
  console.log(string); /*  */
  arr.splice(0, arr.length);
  if (dict.includes(string)) {
    arr.push(string);
  }
  // const word = input.value;
  // const o = [];

  // for (let word2 of dict || []) {
  //   // sort each word for comparison
  //   const sortedWord = word.split("").sort().join("");
  //   const sortedWord2 = word2.split("").sort().join("");
  //   if (sortedWord == sortedWord2) {
  //     o.push(word2);
  //   }
  // }

  // document.getElementById("output").innerHTML = JSON.stringify(o, null, 2);
}

export default findAnagrams;
