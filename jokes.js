class Joke {
  async getJoke() {
    try {
      const data = await fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`);
      const dataJson = await data.json();

      return dataJson;
    } catch (error) {
      console.log(error);
    }
  }
}
