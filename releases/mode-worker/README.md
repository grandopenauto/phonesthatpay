# HDP Mode Worker — Android direct-beta releases

**Latest published build: v0.6.0 (versionCode 6).**

This is a narrowly scoped, signed APK canary used to test an on-device update from Android 10 Mode Worker v0.5.0 to v0.6.0. It is not a Google Play production release, and there are no paid jobs or guaranteed earnings.

- [Latest HTTPS manifest](./latest.json) (schema `hdp.mobile.release.v1`).
- [v0.6.0 signed APK](./v0.6.0/mode-worker-v0.6.0.apk), size 25140 bytes, SHA-256 `95d81d01b6ea5f52f958fdf76d941b13dc3c783bffb8dda0ee18914b6e54b3e4`.
- APK `com.highestdegreepriorities.modeworker`, versionCode 6, versionName 0.6.0.
- Signing certificate SHA-256 `05b08f3b35ee583b25b4cb842db1d9bedb4d91d06bd8bca4f444f3a2c55f7293`, retained from v0.5.0 and previous versions.
- Independently verified Android APK v2 and v3 signature digests and RSA signatures before publication.

**Device-side test remains pending.** On a v0.5.0 phone the owner should tap Check HDP releases, Download verified update, and Open Android installer; Android approval remains mandatory. If any error appears, retain the existing version and capture the exact error before using a manual APK fallback.

Publishing an APK and manifest does not prove successful device installation, enrollment, silent updates, remote administration, or background work. REQUEST_INSTALL_PACKAGES is for this direct beta only; a Google Play release requires a separate compliant build and signing/distribution plan.
