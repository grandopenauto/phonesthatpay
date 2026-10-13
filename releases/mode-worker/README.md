# HDP Mode Worker — Direct beta release channel

Latest beta: **v0.4.0** (Android version code 4).

This GitHub Pages release feed supports consent-first Android updates for the HDP Mode Worker app on a test phone. It is **not Google Play**, an open jobs network, or an earnings program.

The in-app **Check HDP releases** control reads [latest.json](./latest.json). For this v0.4 trial, users running v0.3 can check for build 4, download the signed APK, and explicitly hand installation to Android, which may ask for permission to install from this source.

- Versioned APK: [v0.4.0/mode-worker-v0.4.0.apk](./v0.4.0/mode-worker-v0.4.0.apk).
- Manifest: [latest.json](./latest.json).
- The downloaded file must match its manifest byte length and SHA-256 digest, app package, increased version code, and installed signing certificate before the updater offers installation.
- The app contains no arbitrary remote command executor and no background installation mechanism.
- The direct sideload beta uses REQUEST_INSTALL_PACKAGES; a **separate Google Play build must remove this permission** and use Play-managed updates.

The new-version download/install process is an experiment and must be verified on a physical Android device before being described as fully functional. Any new release needs explicit promotion, verified signing keys and hashes, security review, and a regression test. Public beta APKs should not be marketed as production app-store releases.
