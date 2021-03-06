async function uploadPassword() {
  const arweave = Arweave.init({
    host: "arweave.net", // Hostname or IP address for a Arweave host
    port: 443, // Port
    protocol: "https", // Network protocol http or https
    timeout: 20000,
    logging: false
  });
  let key = await JSON.parse(document.getElementById("output").value);
  var password = document.getElementById("password").innerHTML;
  var encryption = document.getElementById("encryption").value;
  var password_tag = document.getElementById("tag").value;
  var encrypted = JSON.stringify(
    sjcl.encrypt(encryption, password)
  ).replace(/\\/g, "");
  let transaction = await arweave.createTransaction(
    {
      data: encrypted
    },
    key
  );
  transaction.addTag('App-Name', 'AR-pass');
  transaction.addTag('Password-Tag', password_tag)
  await arweave.transactions.sign(transaction, key);
  console.log(transaction);
  var txid = transaction.id;
  const response = await arweave.transactions.post(transaction);
  alert("Password uploaded with TXID: " + txid)
}
