function arqlPassword () {
    (async () => {
      const arweave = Arweave.init({
        host: "arweave.net", // Hostname or IP address for a Arweave host
        port: 443, // Port
        protocol: "https", // Network protocol http or https
        timeout: 20000,
        logging: false
      });
        var address = document.getElementById("address").value;

      const txids = await arweave.arql({
  op: "and",
  expr1: {
    op: "equals",
    expr1: "from",
    expr2: address
  },
  expr2: {
    op: "equals",
    expr1: 'App-Name',
    expr2: 'AR-pass'
  }
})
      function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('passwordListing').appendChild(makeUL(txids));

    })()
}
