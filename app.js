//Init github
const github = new GitHub();
const activity = new Activity();
const ui = new UI();
const joke = new Joke();
const searchUser = document.getElementById("searchUser");
const input = document.getElementById("searchBox");
const gitHubLink = document.getElementById("gitHub");
const search = document.getElementById("search");
const fetchStudents = async () => {
  try {
    search.style = "display:block";

    const data = await fetch("./students.json", {
      method: "GET",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
    const dataJson = await data.json();
    if (dataJson) ui.showStudent(dataJson);
  } catch (error) {
    console.log(error);
  }
};

fetchStudents();
const aboutMe = () => {
  search.style = "display:none";

  fetch("./me.json", {
    method: "GET",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      input.value = "";
      ui.showMe(data);
    })
    .catch((error) => console.log(error));
};

searchUser.addEventListener("click", () => {
  addGitHub();
});
const addActivity = () => {
  search.style = "display:none";
  input.value = "";
  activity.getActivity().then((data) => {
    ui.clearProfile();
    ui.showActivity(data);
  });
};

const addJoke = () => {
  search.style = "display:none";

  input.value = "";
  joke.getJoke().then((data) => {
    ui.clearProfile();
    ui.showJoke(data);
  });
};
const addGitHub = (value) => {
  let userText = input.value;
  if (value) {
    userText = value.attributes.data.value;
  }
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message == "Not Found") {
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        adress = data.profile.location;
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
};
