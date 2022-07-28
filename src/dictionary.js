export default class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    this.words[word] ?? (this.words[word] = {
      word: word,
      description: description
    })
  }

  remove(word) {
    delete this.words[word];
  }

  get(word) {
    return this.words[word];
  }

  showAllWords() {
    Object.values(this.words).forEach(obj => {
      console.log(`${obj?.word} - ${obj?.description}`);
    })
  }
}