let port = 8000;
if(process.env.REACT_APP_NODE_ENV === "test"){
    port = 8010;
}
export const apiURL = "http://localhost:" + port;
export const fbAppId = "310932736689445";