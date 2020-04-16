import "chromedriver";
import axios from "axios";
import "dotenv/config";
import request from "request";
import cheerio from "cheerio";

import { Builder, By, Key, until, WebDriver } from "selenium-webdriver";
import { ServiceBuilder } from "selenium-webdriver/chrome";
import path from "path";

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
// login2();

async function sel() {
  const driver = await new Builder().forBrowser("chrome").build();

  // const chromedriver = path.join(__dirname, "chromedriver");
  // const serviceBuilder = new ServiceBuilder(chromedriver);
  // const driver = await new Builder()
  //   .forBrowser("chrome")
  //   .setFirefoxService(serviceBuilder)
  //   .build();
  try {
    await driver.get(
      "https://www.tistory.com/auth/login?redirectUrl=https://www.tistory.com/"
    );
    // await driver.findElement(By.name("password")).sendKeys("webdriver", Key.RETURN);
    // await driver.wait(until.titleIs("webdriver - Google Search"), 1000);

    await driver.findElement(By.name("loginId")).sendKeys(process.env.ID);
    await driver.sleep(500);
    await driver
      .findElement(By.name("password"))
      .sendKeys(process.env.PASS, Key.RETURN);
    await driver.wait(until.titleIs("TISTORY"), 1000);
    const title = await driver.getTitle();
    // console.log(title);
    await driver.sleep(1000);
    const menu = driver.findElement(
      By.xpath(`//*[@id="kakaoHead"]/div/div[3]/div/a[2]`)
    );

    (await menu).click();
    await driver.sleep(1000);

    const writeMenu = driver.findElement(
      By.xpath(
        `//*[@id="kakaoHead"]/div/div[3]/div/div/div/div[2]/div/div[1]/a[2]`
      )
    );
    (await writeMenu).click();
  } catch (e) {
    console.log(e);
  } finally {
    // await driver.quit();
  }
}

sel();

async function sleep(miliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), miliseconds);
  });
}
