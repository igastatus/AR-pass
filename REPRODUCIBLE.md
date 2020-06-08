# Reproducible Build
Since this App could be storing password, there are steps to reproduce the build and verify the deployed version matches this GitHub repoistory.

These steps are performed on Debian, however you can probably follow these steps on any device with `sha256sum`, `wget` and `git`.

```
git clone https://github.com/igastatus/ar-pass.git
cd ar-pass
arweave deploy-dir src --key-file wallet.json 

```

After deploying the AR-pass, you can use `wget` to fetch web pages and verify the result from `arweave deploy-dir` by matching checksums.
