$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/register.feature");
formatter.feature({
  "name": "Login Register Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sucessfully user Register",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.RegisterSteps.user_is_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate signin register page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.RegisterSteps.user_Navigate_signin_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to email address",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.RegisterSteps.user_need_to_email_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to give Personal details \u0026 address for Register",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.RegisterSteps.user_need_to_give_Personal_details_address_for_Register()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #id_gender1\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027HP-LAPTOP\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 72.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200103162918, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 20580, moz:profile: C:\\Users\\Owner\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5412fd84-afa8-486f-b4d9-be1b40959fef\n*** Element info: {Using\u003did, value\u003did_gender1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinations.RegisterSteps.user_need_to_give_Personal_details_address_for_Register(RegisterSteps.java:48)\r\n\tat ✽.User need to give Personal details \u0026 address for Register(file:///C:/Users/Owner/eclipse-workspace/OnlineMyStore/src/test/resources/Features/register.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "message displayed register sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.RegisterSteps.message_displayed_register_sucessfully()"
});
formatter.result({
  "status": "skipped"
});
});