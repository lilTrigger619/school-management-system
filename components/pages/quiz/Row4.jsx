import {
  Card,
  CardContent,
  Typography,
  Grid,
  InputBase,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appendQuestion } from "./quizSlice";
import Styles from "./Row4.module.css";

export default function Row4() {
  const [ShowMultiple, setShowMultiple] = useState(false);
  const [SelectValue, setSelectValue] = useState("multiple");
  const [Question, setQuestion] = useState("");
  const [Answer_A, setAnswer_A] = useState("");
  const [Answer_B, setAnswer_B] = useState("");
  const [Answer_C, setAnswer_C] = useState("");
  const [Answer_D, setAnswer_D] = useState("");
  const [CorrectAnswer, setCorrectAnswer] = useState("");

  //for the checkboxes {to select the correct answer}
  const [CheckedAnswer_A, setCheckedAnswer_A] = useState(false);
  const [CheckedAnswer_B, setCheckedAnswer_B] = useState(false);
  const [CheckedAnswer_C, setCheckedAnswer_C] = useState(false);
  const [CheckedAnswer_D, setCheckedAnswer_D] = useState(false);

  const ClickCheckBox = (checkBoxLabel) => {
    switch (checkBoxLabel) {
      case "A":
        setCheckedAnswer_B(false);
        setCheckedAnswer_C(false);
        setCheckedAnswer_D(false);
        return setCorrectAnswer(Answer_A);
        break;
      case "B":
        setCheckedAnswer_A(false);
        setCheckedAnswer_C(false);
        setCheckedAnswer_D(false);
        return setCorrectAnswer(Answer_B);
        break;
      case "C":
        setCheckedAnswer_A(false);
        setCheckedAnswer_B(false);
        setCheckedAnswer_D(false);
        break;
      case "D":
        setCheckedAnswer_A(false);
        setCheckedAnswer_B(false);
        setCheckedAnswer_C(false);
        break;
      default:
        return setCorrectAnswer();
    }
  };

  const Dispatch = useDispatch();

  const QuestionFormSubmit = () => {
    if (SelectValue == "multiple") {
      console.log({
        Type: SelectValue,
        Question: Question,
        Answers: [
          `A. ${Answer_A}`,
          `B. ${Answer_B}`,
          `C. ${Answer_C}`,
          `D. ${Answer_D}`,
        ],
        CorrectAnswer: CheckedAnswer_A
          ? Answer_A
          : CheckedAnswer_B
          ? Answer_B
          : CheckedAnswer_C
          ? Answer_C
          : CheckedAnswer_D
          ? Answer_D
          : "",
      });

      Dispatch(
        appendQuestion({
          type: SelectValue,
          question: Question,
          options: [Answer_A, Answer_B, Answer_C, Answer_D],
          answer: CorrectAnswer,
        })
      );

      setCheckedAnswer_A(false);
      setCheckedAnswer_B(false);
      setCheckedAnswer_C(false);
      setCheckedAnswer_D(false);
    } else {
      console.log({
        Type: SelectValue,
        Question: Question,
        CorrectAnswer: CorrectAnswer,
      });

      Dispatch(
        appendQuestion({
          question: Question,
          answer: CorrectAnswer,
          type: SelectValue,
        })
      );
    }

    setQuestion("");
    setAnswer_A("");
    setAnswer_B("");
    setAnswer_C("");
    setAnswer_D("");
    setCorrectAnswer("");
  };

  return (
    <>
      <div>
        <Card>
          <CardContent>
            <Typography variant="body2">Type: </Typography>
            <select
              value={SelectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="multiple">Multiple Choice</option>
              <option value="written">Written</option>
            </select>

            {/**Multiple Choice**/}
            <div
              className={`p-5 ${SelectValue == "multiple" ? "flex" : "hidden"}`}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} className="flex p-0">
                  <Typography variant="h5" className="text-center w-full">
                    Multiple Choice
                  </Typography>
                </Grid>

                <Grid item xs={12} className="flex flex-col">
                  <Typography variant="body1">Question </Typography>
                  <textarea
                    cols="11"
                    rows="3"
										className="sm:w-full md:w-2/3 ml-4 p-4 border-2 border-gray-400 rounded-md"
                    value={Question}
                    onChange={(e) => setQuestion(e.target.value)}
                  ></textarea>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    className="w-1/2 mx-auto"
                  >
                    Options
                  </Typography>
									<div className="w-full md:w-2/3 md:bg-red-500">
                    {/**obj A**/}
                    <div
                      className={`${
                        CheckedAnswer_A ? "bg-blue-400" : ""
                      } flex justify-between w-full items-center p-2 m-3`}
                    >
                      <input
                        type="checkbox"
                        checked={CheckedAnswer_A}
                        name="answer"
                        onClick={() => ClickCheckBox("A")}
                        onChange={() => {
                          setCheckedAnswer_A((prevState) =>
                            prevState == true ? false : true
                          );
                        }}
                      />
                      <Typography variant="body1">(A)</Typography>
                      <InputBase
                        placeholder="option"
                        value={Answer_A}
                        onChange={(e) => setAnswer_A(e.target.value)}
                      />
                      <Typography
                        variant="body1"
                        className={`${
                          CheckedAnswer_A ? Styles.disp : Styles.hidden
                        }`}
                      >
                        Answer
                      </Typography>
                    </div>

                    {/**obj B**/}
                    <div
                      className={`${
                        CheckedAnswer_B ? "bg-blue-400" : ""
                      } flex justify-between items-center p-2 m-3`}
                    >
                      <input
                        type="checkbox"
                        checked={CheckedAnswer_B}
                        name="answer"
                        onClick={() => ClickCheckBox("B")}
                        onChange={() => {
                          setCheckedAnswer_B((prevState) =>
                            prevState == true ? false : true
                          );
                        }}
                      />
                      <Typography variant="body1">(B)</Typography>
                      <InputBase
                        placeholder="option"
                        value={Answer_B}
                        onChange={(e) => setAnswer_B(e.target.value)}
                      />
                      <Typography
                        variant="body1"
                        className={`${
                          CheckedAnswer_B ? Styles.disp : Styles.hidden
                        }`}
                      >
                        Answer
                      </Typography>
                    </div>

                    {/**obj C**/}
                    <div
                      className={`${
                        CheckedAnswer_C ? "bg-blue-400" : ""
                      } flex justify-between items-center p-2 m-3`}
                    >
                      <input
                        type="checkbox"
                        checked={CheckedAnswer_C}
                        name="answer"
                        onClick={() => ClickCheckBox("C")}
                        onChange={() => {
                          setCheckedAnswer_C((prevState) =>
                            prevState == true ? false : true
                          );
                        }}
                      />
                      <Typography variant="body1">(C)</Typography>
                      <InputBase
                        placeholder="option"
                        value={Answer_C}
                        onChange={(e) => setAnswer_C(e.target.value)}
                      />
                      <Typography
                        variant="body1"
                        className={`${
                          CheckedAnswer_C ? Styles.disp : Styles.hidden
                        }`}
                      >
                        Answer
                      </Typography>
                    </div>

                    {/**obj D**/}
                    <div
                      className={`${
                        CheckedAnswer_D ? "bg-blue-400" : ""
                      } flex justify-between items-center p-2 m-3`}
                    >
                      <input
                        type="checkbox"
                        checked={CheckedAnswer_D}
                        name="answer"
                        onClick={() => ClickCheckBox("D")}
                        onChange={() => {
                          setCheckedAnswer_D((prevState) =>
                            prevState == true ? false : true
                          );
                        }}
                      />
                      <Typography variant="body1">(D)</Typography>
                      <InputBase
                        placeholder="option"
                        value={Answer_D}
                        onChange={(e) => setAnswer_D(e.target.value)}
                      />
                      <Typography
                        variant="body1"
                        className={`${
                          CheckedAnswer_D ? Styles.disp : Styles.hidden
                        }`}
                      >
                        Answer
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>

            {/**Written**/}

            <div
              className={`p-5 ${SelectValue == "written" ? "flex" : "hidden"}`}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} className="flex ">
                  <Typography variant="h4" className="text-center w-full">
                    Written
                  </Typography>
                </Grid>
                <Grid item xs={12} className="flex flex-col">
                  <Typography variant="body1">Question </Typography>
                  <textarea
                    cols="11"
                    rows="3"
                    className="w-2/3 ml-4 p-4 border-2 border-gray-400 rounded-md"
                    value={Question}
                    onChange={(e) => setQuestion(e.target.value)}
                  ></textarea>
                </Grid>

                <Grid item xs={12} className="flex flex-col">
                  <Typography variant="body1">Answer : </Typography>
                  <textarea
                    cols="5"
                    rows="1"
                    className="w-2/3 ml-4 p-4 border-2 border-gray-400 rounded-md"
                    value={CorrectAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                  ></textarea>
                </Grid>
              </Grid>
            </div>

            <div className="w-1/2 m-auto">
              <Button
                onClick={QuestionFormSubmit}
                variant="contained"
                color="primary"
                className="w-full"
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
