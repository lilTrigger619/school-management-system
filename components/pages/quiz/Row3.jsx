import { Grid, CardContent, Card, Typography, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Styles from "./Row3.module.css";
import { removeQuestion, removeAllQuestions } from "./quizSlice.js";
import {uuid} from 'uuidv4';

export default function Row3(props) {
  const Questions = useSelector((state) => state.questions);
  const [Quest, setQuestions] = useState([]);
  const Dispatch = useDispatch();

  const RemoveQuestionHandler = (id) => {
    console.log(id);
    Dispatch(removeQuestion({id}));
  };

  const RemoveAllQuestionsHandler = () => {
    Dispatch(removeAllQuestions());
  };

  useEffect(() => {
    let RenderQuestion = Questions.questions.map((question, key) => {
      if (question.type == "multiple") {
        return (
          <div
            key={key}
            className={`bg-yellow-100 p-3 m-3 ${Styles.singleQuestionContainer}`}
          >
            <div className={Styles.removeButton}>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => RemoveQuestionHandler(question.id)}
              >
                Remove
              </Button>
            </div>
            <Typography variant="body1">{`${key + 1}). ${
              question.question
            }`}</Typography>
            <div className="flex flex-wrap justify-around items-center">
              {question.options.map((item, key) => {
                return (
                  <div className="flex justify-between items-center">
                    <input
                      type="radio"
                      name="option"
                      value={item}
                      className="mx-2"
                    />
                    <Typography variant="body2">{`${
                      key + 1 == 1
                        ? "A."
                        : key + 1 == 2
                        ? "B."
                        : key + 1 == 3
                        ? "C."
                        : key + 1 == 4
                        ? "D."
                        : ""
                    } ${item}`}</Typography>
                  </div>
                );
              })}
            </div>
          </div>
        );
      } else {
        return (
          <div
            key={key}
            className={`bg-yellow-100 p-3 m-3 ${Styles.singleQuestionContainer}`}
          >
            <div className={Styles.removeButton}>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => RemoveQuestionHandler(question.id)}
              >
                Remove
              </Button>
            </div>
            <Typography variant="body1">{`${key + 1}). ${
              question.question
            }`}</Typography>
          </div>
        );
      }
    });

    setQuestions(RenderQuestion);
  }, [Questions]);

  return (
    <>
      <div className="my-5">
        <Card>
          <CardContent>
            {Quest.length == 0 ? (
              <Typography variant="body1" className="w-full text-center">
                {" "}
                No questions available
              </Typography>
            ) : (
              <div>
								<Typography variant="h5" className="w-full text-center">Questions</Typography>
                <div className={Styles.questionContainer}>{Quest}</div>
                <Button
                  variant="contained"
                  color="secondary"
                  className="w-full"
                  onClick={RemoveAllQuestionsHandler}
                >
                  Clear All
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
