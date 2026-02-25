"use client";

import { useState } from "react";

export default function PracticeProject() {

  // Level 1
  const [name, setName] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [bgColor, setBgColor] = useState("red");
  const [likes, setLikes] = useState(0);

  // Level 2
  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("OFF");
  const [counter, setCounter] = useState(0);

  // Level 3
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [theme, setTheme] = useState("light");
  const [quizResult, setQuizResult] = useState("");
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#e4dbdb" : "#222222",
        color: theme === "light" ? "#160707" : "#ffffff",
      }}
    >
      <h1>React Practice Project</h1>

      <hr />
      <h2>1. Name Display</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>

      <hr />
      <h2>2. Click Counter</h2>
      <button onClick={() => setClickCount(clickCount + 1)}>
        Clicked {clickCount} times
      </button>

      <hr />
      <h2>3. Show / Hide Message</h2>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
      {showMessage && <p>Welcome Participants!</p>}

      <hr />
      <h2>4. Change Background Color</h2>
      <button
        onClick={() =>
          setBgColor(bgColor === "red" ? "yellow" : "green")
        }
      >
        Toggle Color
      </button>
      <div
        style={{
          backgroundColor: bgColor,
          height: "40px",
          marginTop: "10px",
        }}
      ></div>

      <hr />
      <h2>5. Like Button</h2>
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>

      <hr />
      <h2>6. Character Counter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Characters: {text.length}</p>

      <hr />
      <h2>7. Age Checker</h2>
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {age && <p>{age >= 18 ? "Adult" : "Minor"}</p>}

      <hr />
      <h2>8. Password Show/Hide</h2>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>

      <hr />
      <h2>9. ON / OFF Switch</h2>
      <button
        onClick={() =>
          setStatus(status === "ON" ? "OFF" : "ON")
        }
      >
        Status: {status}
      </button>

      <hr />
      <h2>10. Reset Counter</h2>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button
        onClick={() =>
          counter > 0 && setCounter(counter - 1)
        }
      >
        -
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>

      <hr />
      <h2>11. Simple To-Do List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <hr />
      <h2>12. Add to Cart Quantity</h2>
      <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>

      <hr />
      <h2>13. Theme Toggle</h2>
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>

      <hr />
      <h2>14. Simple Quiz</h2>
      <p>What is 4 + 3?</p>
      <button onClick={() => setQuizResult("Correct")}>0</button>
      <button onClick={() => setQuizResult("Wrong")}>7</button>
      <p>{quizResult}</p>

      <hr />
      <h2>15. Multiple Counters</h2>
      <p>Counter 1: {c1}</p>
      <button onClick={() => setC1(c1 + 1)}>+</button>

      <p>Counter 2: {c2}</p>
      <button onClick={() => setC2(c2 + 1)}>+</button>

      <p>Counter 3: {c3}</p>
      <button onClick={() => setC3(c3 + 1)}>+</button>

    </div>
  );
}