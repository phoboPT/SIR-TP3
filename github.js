class GitHub {
  constructor() {
    this.client_id = "d83181e28385ed231d07";
    this.client_secret = "fce8c03dffe1ad5ec2cbca80617a1f157e7138a3";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    try {
      const profileResponse = await fetch(
        `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      );
      const reposResponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
      );
      const profile = await profileResponse.json();
      const repos = await reposResponse.json();
      return {
        profile,
        repos,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
