//Init github
const github = new GitHub();
const activity = new Activity();
const ui = new UI();
const joke = new Joke();
const searchUser = document.getElementById("searchUser");
const input = document.getElementById("searchBox");
const gitHubLink = document.getElementById("gitHub");
fetch("./students.json", {
  method: "GET",
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    ui.showStudent(data);
  })
  .catch((error) => console.log(error));
//Init ui
//search input

//event listener
searchUser.addEventListener("click", () => {
  addGitHub();
});
const addActivity = () => {
  activity.getActivity().then((data) => {
    ui.clearProfile();
    ui.showActivity(data);
  });
};

const addJoke = () => {
  joke.getJoke().then((data) => {
    ui.clearProfile();
    ui.showJoke(data);
  });
};
const addGitHub = (value) => {
  //get input text

  let userText = input.value;
  if (value) {
    userText = value.attributes.data.value;
  }
  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message == "Not Found") {
        //show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //show profile
        adress = data.profile.location;
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear profile
    ui.clearProfile();
  }
};
