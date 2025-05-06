function toggleMenu() {
    let menu = document.querySelector(".jcgg_nav");
    menu.classList.toggle("active");
}

//Task

const jcgg_taskInput = document.getElementById("jcgg_taskInput");
    const jcgg_taskList = document.getElementById("jcgg_taskList");

    jcgg_taskInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        jcgg_addTask();
      }
    });

    function jcgg_addTask() {
      const text = jcgg_taskInput.value.trim();
      if (text === "") return;

      const li = document.createElement("li");
      li.className = "jcgg_task";
      li.dataset.completed = "false";

      const left = document.createElement("div");
      left.className = "jcgg_task-left";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "jcgg_checkbox";
      checkbox.addEventListener("change", () => {
        li.dataset.completed = checkbox.checked;
        jcgg_updateList();
      });

      const span = document.createElement("span");
      span.textContent = text;

      const delBtn = document.createElement("button");
      delBtn.textContent = "🗑";
      delBtn.className = "jcgg_delete-btn";
      delBtn.onclick = () => {
        li.remove();
      };

      left.appendChild(checkbox);
      left.appendChild(span);
      li.appendChild(left);
      li.appendChild(delBtn);
      jcgg_taskList.appendChild(li);

      jcgg_taskInput.value = "";
      jcgg_updateList();
    }

    function jcgg_updateList() {
      const tasks = Array.from(jcgg_taskList.children);
      tasks.forEach(task => {
        const checkbox = task.querySelector("input[type=checkbox]");
        const text = task.querySelector("span");
        if (checkbox.checked) {
          text.classList.add("jcgg_completed");
        } else {
          text.classList.remove("jcgg_completed");
        }
      });

      tasks.sort((a, b) => {
        return a.dataset.completed === "true" ? 1 : -1;
      });

      tasks.forEach(task => jcgg_taskList.appendChild(task));
    }

function jcgg_ChangeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(2); // opacidad

  const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
  const header = document.getElementById('jcggHeader');

  header.style.backgroundColor = rgba;

  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  const textColor = luminance < 128 ? 'white' : 'black';

  header.style.color = textColor;

  const links = header.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = textColor;
  });

  const icons = header.querySelectorAll('button');
  icons.forEach(btn => {
    btn.style.color = textColor;
  });
}