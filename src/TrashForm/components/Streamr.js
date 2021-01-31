var SHARED_SECRET = "JEl0srjdTFmFdbbRCIGyIQYlU84nfaQhaxJDHWgQ6j-Q";
var CONTRACT_ADDRESS = "0x0c2f8e8a55ac66b2304ee7bd3a836f0242d625b6";
var STREAM = "0xe89e731d43f626400495ceb33f5c5ee6542642aa/NEW_DUMPIT_2";
const StreamrClient = require("streamr-client");
const ethers = require("ethers-utils");
var customer_wallet = StreamrClient.generateEthereumAccount();
// console.log("Wallet:", customer_wallet);
const client = new StreamrClient({
  auth: {
    privateKey: customer_wallet.privateKey
  },
  url: "wss://hack.streamr.network/api/v1/ws",
  restUrl: "https://hack.streamr.network/api/v1"
});

export function StreamR(msg) {
  console.log("Private Key", client);
  var element = document.getElementById("submitbtn");
  document.getElementById("wait").innerHTML = "Wait for transaction..";
  function Withdraw() {
    client.withdraw(CONTRACT_ADDRESS);
  }
  element.parentNode.removeChild(element);
  client
    .joinDataUnion(CONTRACT_ADDRESS, SHARED_SECRET)
    .then((memberDetails) => {
      console.log(memberDetails);
      client
        .getMemberStats(CONTRACT_ADDRESS, customer_wallet.address)
        .then((stats) => {
          console.log(stats);
          document.getElementById("member-earnings").innerHTML = `
          <div style ="
          -moz-border-radius: 6px;
          -webkit-border-radius: 6px;
          background-color: #E2F0EC ;
          border: solid 3px #49524F ;
          border-radius: 6px;
          line-height: 18px;
          mc-auto-number-format: '{b}Note: {/b}';
          overflow: hidden;
          padding: 20px;
          margin-left:450px;
          margin-right:450px;
          margin-bottom:10px;
                ">
          
          <p
                    style="
                      font-family:'Droid Serif,'Serif';
                      font-size: 18px;
                      text-align:center;
                    "
                  >
            Kindly be careful and do not share your wallet key with anyone.<br/>
            Wallet Address:<br/>${customer_wallet.address} <br/>
            Wallet Key:<br/>${customer_wallet.privateKey} <br/>
            Earnings : ${ethers.formatEther(stats.earnings)}

           </p>
            <br/>
           <button onClick="Withdraw()" style="
            width: 250px;
            height: 50px;
            font-color:#04271D ;
            background-color: #A8D4C6 ;
            border: solid 1px #6F8E85 ;
            border-radius: 5px;" >Withdraw Earnings</button>
          </div>
          `;
        });
    });
  try {
    var data = {
      Type_Trash: msg
    };

    client.publish(STREAM, data).then((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
}
