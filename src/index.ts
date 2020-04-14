import axios from "axios";
import "dotenv/config";
import request from "request";
import cheerio from "cheerio";

function login() {
  const URL = "https://tistory.com/auth/login";
  const headers = {
    Referer: "https://tistory.com",
  };
  const form = {
    fp: "88a3558c554c29d9fed06889b7ce45b4",
    loginId: process.env.ID,
    password: process.env.PASS,
    redirectUrl: "https://tistory.com",
  };

  axios
    .post(URL, { form, headers })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
// login();

function login2() {
  let options = {
    method: "post",
    url: "https://www.tistory.com/auth/login",
    form: {
      fp: "88a3558c554c29d9fed06889b7ce45b4",
      loginId: process.env.ID,
      password: process.env.PASS,
      rememberLoginId: "1",
      redirectUrl: "https://www.tistory.com/",
    },
    // followRedirect: false,
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      Origin: "https://www.tistory.com",
      Referer: "https://www.tistory.com/auth/login",
      "Cache-Control": "max-age=0",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36",
    },
  };

  request(options, function (err, res: any) {
    if (err) {
      //console.log(err);
    } else {
      console.log(res);
      console.log(res.caseless.dict);
      // console.dir(res.body);
      // const $ = cheerio.load(res.body);
      // console.log($);
    }
  });
}
login2();
