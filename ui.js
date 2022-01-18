class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.students = document.getElementById("students");
  }

  async showProfile(user) {
    this.clearProfile();
    console.log(user);
    this.profile.innerHTML = `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9" >                
                    <span class="badge badge-primary" style="color:black">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-primary"style="color:black">Public Gits: ${user.public_gists}</span>
                    <span class="badge badge-primary"style="color:black">Folowers: ${user.followers}</span>
                    <span class="badge badge-primary"style="color:black">Following: ${user.following}</span>
                      <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item"> <a href="#" id="location">Location: ${user.location} </a></li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
`;
  }
  showStudent(data) {
    let output = `<h2>Students</h2><div class="row justify-content-start" >`;
    data.students.forEach((student) => {
      output += `
    <div class="col-sm-3">
    <div class="card" style="width: 20rem;">
    <img src="./img/${student.image}" class="card-img-top" alt="text">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">About me: ${student.description}</p>
      <p class="card-text">Age: ${student.age}</p>
 
    </div>
    <div class="card-header">
    Grades
  </div>
  <ul class="list-group list-group-flush">
  ${student.marks
    .map((item) => {
      return `<li class="list-group-item">${item.subject}: ${item.marks}</li>`;
    })
    .join("")}
    
  </ul>
  
    <div class="card-body">
     Git: <a id="gitHub" onClick="addGitHub(this)" data="${
       student.gitHub
     }" class="card-link" style="cursor:pointer">${student.gitHub}</a>
      
    </div>
  </div>
  </div>
`;
    });
    output += `</div>`;
    this.students.innerHTML = output;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `      
            <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
                <span class="badge badge-primary"style="color:black">Stars: ${
                  repo.stargazers_count
                }</span>
                <span class="badge badge-secondary"style="color:black">Watchers: ${
                  repo.watchers_count
                }</span>
                <span class="badge badge-success"style="color:black">Forks: ${
                  repo.forms_count || 0
                }</span>
              </div>
            </div>
          </div>    
        `;
    });

    document.getElementById("repos").innerHTML = output;
  }

  showActivity(data) {
    this.clearProfile();
    this.students.innerHTML = `<div class="jumbotron">
    <h3 class="display-4">Activity Sugestion!</h3>
    <p class="lead">${data.activity}</p>
    <hr class="my-4">
    <p>Type: ${data.type}</p>
    <p>Participants: ${data.participants}</p>
    <p>Price: ${data.price}</p>
    <p>Link: ${data.link}</p>
  
  </div>`;
  }
  showJoke(data) {
    console.log(data);
    this.clearProfile();
    this.students.innerHTML = `<div class="jumbotron">
    <h3 class="display-4">Joke!</h3>
   
    ${
      (data.type === "single" && ` <p class="lead">${data.joke}</p>`) ||
      ` <div>
          <p class="lead">${data.setup}</p>
          <p>Delivery: ${data.delivery}</p>
        </div>`
    }

    <hr class="my-4">
    <p>Type: ${data.type}</p>
    <p>Category: ${data.category}</p>
    
  
  </div>`;
  }

  showAlert(message, className) {
    this.clearAlert();
    //Create Div
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showMe(data) {
    this.clearProfile();
    this.students.innerHTML = `<div class="jumbotron">
    <h3 class="display-4">Hello ${data.name}!</h3>
    <hr class="my-4">
    <img src="./img/me.jpg" class="img-fluid" alt="text" width="200"heigth="200">
    <p>Bio: ${data.bio}</p>
    <p>Email: ${data.email}</p>
    <p> ${data.langs}</p>

    <p><img align="left" src="${data.mostUsed}" alt="phobopt" /></p>
<p>&nbsp;<img align="center" src="${data.stats}" alt="phobopt" /></p>
<p><img align="center" src="${data.streaks}" alt="phobopt" /></p>
    <p>`;
  }
}
