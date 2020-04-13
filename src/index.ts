import axios from "axios";
import "dotenv/config";
import request from "request";

function login() {
    const URL = "https://tistory.com/auth/login";
    const headers = {
      "Referer": "https://tistory.com",
    };
    const form = {
      "fp":"88a3558c554c29d9fed06889b7ce45b4",
      "loginId": process.env.ID,
      "password": process.env.PASS,
      "redirectUrl": "https://tistory.com"
    };

    axios
      .post(URL, { form, headers })
      .then((res) => {
        console.log(res);
      }).catch(err=> {
          console.log(err);
      })
}
// login();

function login2() {
    let options = {
        method: 'post',
        url: 'https://tistory.com/auth/login',
        form: {
            "fp":"88a3558c554c29d9fed06889b7ce45b4",
            "loginId": process.env.ID,
            "password": process.env.PASS,
            "redirectUrl": "https://tistory.com"
        },
        followRedirect: false,
        headers: {
            'cache-control': 'no-cache'
        }
    };

    request(options, function(err, res: any) {
        
        if (err) {
            //console.log(err);
        } else {
            console.log(res);
        }
       
    });
}
login();