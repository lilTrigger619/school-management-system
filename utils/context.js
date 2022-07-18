import Axios from "axios";
import cookie from 'cookie';

class ContextRequest {
  constructor(url, body) {
    this.url = url;
    this.body = body;
    this.Response = { status: "", data: "", error: false };
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
    let resp = Axios.post(this.url, this.body)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return resp;
  };

  //post formData objject but we won't use it anymore
  postFormData = () => {
    let Auth = Axios.get("/api/auth")
      .then((res) => {
        return res;
      })
      .catch((res) => {
        return res;
      });
    return Auth;
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

const Ppost = (url, body) => {
  let Response = {};
  Axios.post(url, body)
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};
export default ContextRequest;
export { Ppost };
