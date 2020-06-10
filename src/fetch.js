function fetchPass() {
  const arweave = Arweave.init({
    host: "arweave.net", // Hostname or IP address for a Arweave host
    port: 443, // Port
    protocol: "https", // Network protocol http or https
    timeout: 20000,
    logging: false
  });
  var txidValue = document.getElementById("tx").value;
  arweave.transactions
    .getData(txidValue, { decode: true, string: true })
    .then(data => {
      var pass = document.getElementById("pass").value;
      var decrypted = sjcl.decrypt(pass, data.substring(1, data.length-1));
      document.getElementById("getpass").innerHTML = decrypted;
      console.log(data);
    });
}
