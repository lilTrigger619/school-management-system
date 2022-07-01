import axios from "axios";
import Cookie from "cookie";

export default async (req, res) => {
  if (req.method == "POST") {
    const {
      firstName,
      lastName,
      email,
      password,
      username,
      gender,
      location,
      illness,
      disability,
      position,
      phone,
      date_of_birth,
    } = req.body;

    //res.status(200).json(JSON.stringify(req.body));
    const Body = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
      },
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
      location: location,
      illness: illness,
      disability: disability,
      position: position,
      phone: phone,
      date_of_birth: date_of_birth,
    };

    try {
      const url = process.env.Backend + "/staff/register/";
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      //making the request to the backend
      axios
        .post(url, Body)
        .then((response) => {
          console.log("resonse", response);
          res.status(200).json(response.data);
        })
        .catch(({ response }) => {
          console.log("error in response", response);
          res.status(response.status).json(response.data);
        });
    } catch (err) {
      console.log("backend request failed", err);
      res.status(500).json("faild to make request");
    }
  }
};
