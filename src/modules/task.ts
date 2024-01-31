const noteContainer: HTMLElement | null = document.querySelector('.Notes');
const addBtn: HTMLElement | null = document.querySelector('#addBtn');

function addTask(checkboxId: string, labelText: string): void {
  let uniqueID: string = generateUniqueId();
  console.log(uniqueID);
  if (noteContainer) {
    const newTask: HTMLDivElement = document.createElement('div');
    newTask.className = 'task';
    newTask.id = uniqueID;

    newTask.innerHTML = `
    <div class="checkbox-wrapper-52" draggable="true">
    <div class="item">
        <input type="checkbox" id="${checkboxId}">
        <div class="cbx">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        </div>
        <label for="${checkboxId}" class="cbx-lbl" maxlength="10" contentEditable>${labelText}</label>
        <button type="button" class="remove"><i class="fa-solid fa-trash"></i></button>
    </div>`;

    // Append the new task to the noteContainer
    noteContainer.appendChild(newTask);

    const label = newTask.querySelector(`label[for="${checkboxId}"]`);
    if (label) {
    label.addEventListener('input', () => {
        label.classList.add('edited');
    });

    label.addEventListener('keydown', (event) => {
        if ((event as KeyboardEvent).key === 'Enter' || (event as KeyboardEvent).key === 'Tab') {
            event.preventDefault();
            (event.target as HTMLElement).blur();
        }
    });

    label.addEventListener('blur', () => {
        label.removeAttribute('contentEditable');
        label.classList.remove('edited');
    });

    if (label) {
        (label as HTMLInputElement).focus();
    }
        (label as HTMLInputElement).focus();
    }
    if (label) {
        if (label) {
            if (label) {
                (label as HTMLLabelElement).contentEditable = 'true';
                (label as HTMLLabelElement).focus();
            }
        }
    }
    }
  }

function generateUniqueId(): string {
  return Date.now().toString();
}

if (addBtn) {
  addBtn.addEventListener('click', () => {
    addTask('checkbox' + Date.now(), '');
  });
}

if (noteContainer) {
  noteContainer.addEventListener("click", (event) => {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.type === "checkbox") {
      const task = checkbox.closest(".task");
      if (task) {
        task.classList.toggle("checked");
      }
    }
  });
}
if (noteContainer) {
    noteContainer.addEventListener("click", (event) => {
      const deleteBtn = event.target as HTMLElement;
      if (deleteBtn.classList.contains("remove")) {
        const task = deleteBtn.closest(".task");
        if (task) {
          task.remove();
        }
      }
    });
  }