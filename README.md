# 📝 JavaScript Todo List App

A responsive and interactive Todo List web app powered by **Vanilla JavaScript**, **HTML**, and **CSS**, designed to help users plan their day effectively. All tasks are saved using `localStorage`, ensuring persistence even after refreshing or closing the browser.
> 🔗 **Live Demo**: [todo-list-eight-nu-35.vercel.app](https://todo-list-eight-nu-35.vercel.app/)

---

## 🚀 Features

- ✅ Add tasks via button or `Enter` key
- ✅ Mark tasks as done with a checkbox
- ✅ Visual strikethrough for completed tasks
- ✅ Remove tasks with a trash icon
- ✅ Tasks saved using `localStorage` (no backend required)
- ✅ Auto-load saved tasks on page refresh
- ✅ Responsive layout (desktop & mobile friendly)
- ✅ Smooth UI interactions and styling

---

## 💻 Technologies Used

| Tech      | Purpose                            |
|-----------|------------------------------------|
| `HTML5`   | Structure of the Todo App          |
| `CSS3`    | Responsive styling and animations  |
| `JavaScript` | Core logic and interactivity  |
| `Font Awesome` | Icons for delete buttons     |
| `localStorage` | Save and load todos locally |

---

## 🧠 JavaScript Highlights

> This app is primarily powered by JavaScript. Key JS features include:

### ✅ DOM Manipulation
```js
document.createElement()
element.classList.add()
element.appendChild()
````

### ✅ Event Handling

```js
input.addEventListener("keydown", handleEnter);
btnInput.addEventListener("click", addItem);
checkbox.onchange = () => done(index);
```

### ✅ Data Persistence (localStorage)

```js
localStorage.setItem("todos", JSON.stringify(list));
const saved = JSON.parse(localStorage.getItem("todos"));
```

### ✅ Interactive Behavior

* Dynamically adds/removes elements from the DOM.
* Syncs task status with a checkbox.
* Applies `.strike` class to show completed tasks.

---

## 📁 File Structure

```
todo-list-app/
├── index.html          # Main HTML layout
├── style.css           # App styling (flexbox, colors, UI)
├── script.js           # JavaScript logic (add, remove, save)
├── README.md           # Project overview (this file)
├── .gitattributes      # Helps GitHub detect JS as main language
```

---

## 🖼️ Screenshots (Optional)

> Add screenshots here to demonstrate desktop/mobile UI.

---

## 🛠️ Setup & Run

1. Clone the repo:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```
2. Open `index.html` in your browser.

---

## 🧪 Possible Extensions

* Add filtering: All / Completed / Pending
* Add due dates or tags
* Dark/light mode toggle
* Sync with cloud storage or a backend

---

## 📜 License

This project is free to use, learn from, and build upon. Attribution appreciated.

---

## 🙌 Acknowledgments

Thanks to **localStorage** and **Vanilla JS** for making things simple yet powerful. Inspired by minimal, functional productivity tools.

```

