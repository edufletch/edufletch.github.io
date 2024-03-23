// import getDictionary from "../functions/getDictionary";
import getTestDictionary from "../functions/getTestDictionary";
import findAnagrams from "../functions/findAnagrams";

console.clear();

const anagramArr: string[] = [];

// const dict = await getDictionary();
const dict = getTestDictionary();
console.log(dict);

document.addEventListener("keyup", () => {
  if (Array.isArray(dict)) {
    const typedString = (
      document.getElementById("anagramInput") as HTMLInputElement
    ).value;
    findAnagrams({ string: typedString, arr: anagramArr, dict });
  }
});

function Anagram() {
  return (
    <>
      <h1>Anagram</h1>
      <div>
        Type a word to see a list of common anagrams:&nbsp;
        <input placeholder="Type something here!" id="anagramInput" />
      </div>
      {/* <div>Type a word to see a list of common anagrams:&nbsp;
        <input placeholder="Type something here!" onkeypress="anagram()"/>
        <div id="output" /> */}
    </>
  );
}

export default Anagram;
