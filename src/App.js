import "./App.css";
import InfoCard from "./components/InfoCard";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import JSConfetti from "js-confetti";
import FinishCard from "./components/FinishCard";
const jsConfetti = new JSConfetti();
function App() {
  const [input, setInput] = useState("");
  const [question, setQuestion] = useState({
    answer: "март",
    level: 1,
    description: "В каком месяце родился Мико? (все ответы маленькими буквами)",
  });
  const [isDescVisible, setIsDescVisible] = useState(true);
  const questions = [
    {
      answer: "март",
      level: 1,
      description:
        "В каком месяце родился Мико? (все ответы маленькими буквами)",
    },
    {
      answer: "зелёный",
      level: 2,
      description: `Любимый цвет Мико?`,
    },
    {
      answer: "март 28",
      level: 3,
      description: "Дата когда нам стукнуло 2 недели? (например: март 10) ?",
    },
    {
      answer: "342",
      level: 4,
      description: "Сумма наших ростов?",
    },
    {
      answer: "337",
      level: 5,
      description: `Сколько фоток мы отправили в нашем чате телеграм?`,
    },
    {
      answer: "рыбы и близнецы",
      level: 6,
      description: "Наши зз? (`мой` и `твой`)",
    },
    {
      answer: "3",
      level: 7,
      description:
        "Сумма, сколько раз Мико пробывал еду в Hardees, macDonalds, Starbucks, Pizza Hut и Domino's Pizza?",
    },
    {
      answer: "да",
      level: 8,
      description: `У трех родственных трактористов есть брат Сергей, у Сергея братьев нет. Может ли такое быть? (да или нет, и обьяснить Мико почему :) )`,
    },
    {
      answer: "11 часов, 13 минут",
      level: 9,
      description:
        "Разница часов и минут когда мы начали встречаться (было вечером), и когда ты мне написала впервые (было утром)? (например: 2 часа, 5 минут)",
    },
    {
      answer: "цезарь",
      level: 10,
      description:
        "Наш любимый салат ?",
    },
  ];
  const getRandomSkandal = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };
  const alertSuccess = () => {
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Умничка, правильно !",
      showConfirmButton: false,
      timer: 1500,
    });
    jsConfetti.addConfetti({
      confettiRadius: 6,
      confettiNumber: 600,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };
  const [level, setLevel] = useState("1");
  const getLevelFromSessionStorage = () => {
    return window.sessionStorage.getItem("level");
  };

  useEffect(() => {
    if (!window.sessionStorage.getItem("level")) {
      window.sessionStorage.setItem("level", "1");
      window.sessionStorage.setItem("questions", JSON.stringify(questions));
    } else if (parseInt(window.sessionStorage.getItem("level")) < 11) {
      setLevel(getLevelFromSessionStorage());
      let arr = JSON.parse(window.sessionStorage.getItem("questions"));
      setQuestion(
        getRandomSkandal(arr.filter((ska) => ska.level === parseInt(level)))
      );
    } else {
      setLevel(getLevelFromSessionStorage());
    }
    // eslint-disable-next-line
  }, [level]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleCheck = (e) => {
    e.preventDefault();
    if (input === question.answer) {
      let l = sessionStorage.getItem("level");
      sessionStorage.setItem("level", parseInt(l) + 1);
      alertSuccess();
    } else {
      Swal.fire({
        icon: "error",
        title: "Упсс... ответ не верный",
        confirmButtonText: "Попробовать еще раз",
      });
    }
  };
  const handleRemoveText = (e) => {
    e.preventDefault();
    setIsDescVisible(!isDescVisible);
  };

  return (
    <div className="App">
      {isDescVisible ? (
        <div className="description">
          Сайт был сделан специально для{" "}
          <span className="description-meru">Меруерт (менің ботам)</span>. Это
          легкий тест на знания о нас (вопросы о нас, о тебе и о мне). Вопросы
          идут по сложности (10 уровней), и где-то придеться включать логику :)
        </div>
      ) : null}

      <a
        href="//"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          marginTop: 10,
          fontSize: 15,
        }}
        onClick={(e) => handleRemoveText(e)}
      >
        {isDescVisible
          ? "УБРАТЬ ТЕКСТ ЧТОБЫ ТВОИМ ГЛАЗАМ НЕ МЕШАЛО"
          : "ВЕРНУТЬ ОБРАТНО"}
      </a>
      {level < 11 ? (
        <>
          <InfoCard text={question.description} level={level}></InfoCard>
          <div className="input-check">
            <TextField
              id="filled-basic"
              variant="filled"
              sx={{
                "& > :not(style)": {
                  mt: 3,
                  mb: 3,
                  width: "15em",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "white",
                },
              }}
              onChange={(e) => handleChange(e)}
            />
            <Button
              variant="contained"
              onClick={(e) => handleCheck(e)}
              sx={{ fontFamily: "Montserrat", fontWeight: "bold", height: 50 }}
            >
              Проверить
            </Button>
          </div>
        </>
      ) : (
        <FinishCard />
      )}
    </div>
  );
}
export default App;
