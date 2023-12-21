var arr = [
  { Id: 1, Name: "Ganesh", Sal: 25000 },
  { Id: 2, Name: "Loki", Sal: 45000 },
  { Id: 3, Name: "Krishna", Sal: 35000 },
];

const display = () => {
  var str = `<table border="2px solid black"><tr><td>ID</td><td>Name</td><td>Salary</td></tr> `;

  for (var item of arr) {
    str += `<tr><td>${item.Id}</td><td>${item.Name}</td><td>${item.Sal}</td></tr>`;
  }

  str += "</table>";

  document.getElementById("data").innerHTML = str;
};

display();
const addEmp = () => {
  let Id = parseInt(document.getElementById("Id").value);
  let Name = document.getElementById("Name").value;
  let Sal = parseInt(document.getElementById("Sal").value);
  arr.push({ Id, Name, Sal });

  display();
};

const deleteEmp = () => {
  let Id = parseInt(document.getElementById("Id").value);

  let pos = arr.findIndex((obj) => obj.Id === Id);
  if (pos != -1) {
    arr.splice(pos, 1);
    display();
  } else {
    alert("Employee with id " + Id + " not found");
  }
};

var updateEmp = () => {
  let Id = parseInt(document.getElementById("Id").value);
  let Name = document.getElementById("Name").value;
  let Sal = parseInt(document.getElementById("Sal").value);
  let pos = arr.findIndex((obj) => obj.Id === Id);
  if (pos != -1) {
    arr[pos].Name = Name;
    arr[pos].Sal = Sal;
    display();
  } else {
    alert("Employee with id " + Id + " not found");
  }
};
