import Axios from "axios";

class ContextRequest {
  constructor(url, body) {
    this.url = url;
    this.body = body;
  }
  //get items
  get = async () => {
    let Response = { status: "", data: "", error: false };
    try {
      Response = await Axios.get(this.url);
    } catch (err) {
      Response.error = true;
      Response.data = await err;
    }

    return Response;
  };

  //post items
  post = () => {
    const Response = { status: "", data: "", error: false };
    try {
      Axios.post(this.url, this.body)
        .then((res) => {
          Response.status = res.status;
          Response.data = res.data;
        })
        .catch((err) => {
          Reponse.status = err.status;
          Response.data = err.data;
        });
    } catch (error) {
      Response.err = true;
      Response.data = err;
    }

    return Response;
  };

  //put api request
  put = () => {
    const Response = { status: "", data: "", error: false };
    try {
      Axios.put(this.url, this.body)
        .then((res) => {
          Response.status = res.status;
          Response.data = res.data;
        })
        .catch((err) => {
          Reponse.status = err.status;
          Response.data = err.data;
        });
    } catch (error) {
      Response.err = true;
      Response.data = err;
    }

    return Response;
  };

  //delete api request
  delete = () => {
    const Response = { status: "", data: "", error: false };
    try {
      Axios.delete(this.url)
        .then((res) => {
          Response.status = res.status;
          Response.data = res.data;
        })
        .catch((err) => {
          Reponse.status = err.status;
          Response.data = err.data;
        });
    } catch (error) {
      Response.err = true;
      Response.data = err;
    }

    return Response;
  };
}

export default ContextRequest;
