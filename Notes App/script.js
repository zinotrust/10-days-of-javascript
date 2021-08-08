let addBtn = document.getElementById("add-btn"),
  addTitle = document.getElementById("note-title"),
  addTxt = document.getElementById("note-text"),
  clear = document.querySelector(".clear");

function getNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (addTitle.value == "" || addTxt.value == "") {
    return alert("Please add note title and details");
  }
  getNotes();

  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  document.querySelector("form").reset();
  //   console.log(notesObj);
  showNotes();
});

function showNotes() {
  getNotes();
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="note">
            <p class="note-counter">Note ${index + 1}</p>
            <h3 class="note-title">${element.title}</h3>
            <p class="note-text">${element.text}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
            <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">Edit Note</button>
            </div>
        </div>
        `;
  });
  let noteElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "No Notes yet. Please add a note.";
  }
}

function deleteNote(index) {
  let confirmDel = confirm("Delete this note?");
  if (confirmDel == true) {
    getNotes();
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }
}

function editNote(index) {
  if (addTitle.value !== "" || addTxt.value !== "") {
    return alert("Please clear the form before editting a note.");
  }
  getNotes();
  notesObj.findIndex((element, index) => {
    addTitle.value = element.title;
    addTxt.value = element.text;
  });
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// Delete all notes
clear.addEventListener("click", () => {
  localStorage.clear();
  showNotes();
});

showNotes();
