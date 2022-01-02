// Login api to make the login api call

export default function CredHandler(req, res) {
  if (req.method == "POST") {
    () => console.log("yy");
		res.status(200).json(req.data)
  } else if (req.method == "GET") {
    () => console.log("dd");
		res.status(200).json("You have hit the login url with the get request")
  }
}
