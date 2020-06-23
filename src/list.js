function arqlPassword() {
    (async () => {
        const arweave = Arweave.init({
            host: "arweave.net", // Hostname or IP address for a Arweave host
            port: 443, // Port
            protocol: "https", // Network protocol http or https
            timeout: 20000,
            logging: false
        });
        var address = document.getElementById("walletAddress").innerHTML;

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
            for (var i = 0; i < array.length; i++) {
                arweave.transactions.get(array[i]).then(transaction => {
                    transaction.get('tags').forEach(tag => {
                        let key = tag.get('name', {
                            decode: true,
                            string: true
                        });
                        let value = tag.get('value', {
                            decode: true,
                            string: true
                        });
                        if (key == "Password-Tag") {
                            arweave.transactions
                                .getData(transaction.id, {
                                    decode: true,
                                    string: true
                                })
                                .then(data => {
                                    var pass = document.getElementById("pass").value;
                                    var decrypted = sjcl.decrypt(pass, data.substring(1, data.length - 1));
                                    var append_list_password = document.getElementById("passwordListing")
                                    append_list_password.innerHTML += `<li><span class="badge badge-primary">${value}</span> ${decrypted}</li>`
                                })
                        }
                    });

                });
            }
        }

        makeUL(txids)

    })()
}
