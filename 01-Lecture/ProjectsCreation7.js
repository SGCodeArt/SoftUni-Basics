function ProjectCreation(input) {
    let architectName = input[0];
    let timeToFinishProject = 3;
    let numberOfProjects = Number(input [1]);
    let result = numberOfProjects * timeToFinishProject;

console.log(`The architect ${architectName} will need ${result} hours to complete ${numberOfProjects} project/s.`);


}

ProjectCreation (["Sanya", "9" ]);