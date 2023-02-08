import json from './parser.js';
import read from './reader.js';

class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      this.result = read().then((buffer) => {
        return json(buffer);
      })
      .then((strObj) => {
        return strObj;
      });
      resolve(this.result);
    });
  }
}

GameSavingLoader.load().then((saving) => {
  console.log('saving -', saving);
});
