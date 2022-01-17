class Activity {
  async getActivity() {
    try {
      const data = await fetch(`https://www.boredapi.com/api/activity`);
      const dataJson = await data.json();

      return dataJson;
    } catch (error) {
      console.log(error);
    }
  }
}
