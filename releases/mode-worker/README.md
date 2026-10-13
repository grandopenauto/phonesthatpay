# HDP Mode Worker — Android Direct Beta Releases

Latest published version **v0.7.0** (versionCode 7).

This release is a small on-device update canary for testing the first fully scheduled BuildOS v0.2.1 build, artifact transfer through private Google Sheets, and Android user-approved update from v0.6.0. This is not a production Play Store build, earnings guarantee or general-user release.

- [Latest manifest](./latest.json): hdp.mobile.release.v1.
- [Signed v0.7.0 APK](./v0.7.0/mode-worker-v0.7.0.apk): 25140 bytes, SHA-256 ed611f2140037dce431dda5bbed9180023f5dc7cc8fb6420e17178288acb22f8.
- Android package: com.highestdegreepriorities.modeworker; versionCode: 7; versionName: 0.7.0.
- Signing cert pinned from prior working Mode Worker releases: 05b08f3b35ee583b25b4cb842db1d9bedb4d91d06bd8bca4f444f3a2c55f7293.
- BuildOS queue job MW07-MODEWORKER-POLICYRETRY-002 returned BUILT, exit code 0, signed artifact size 25140, 5/5 Google Sheets chunks. SHA-256 independently reconstructed and checked before GitHub publication.
- Phone update v0.6.0→v0.7.0 is NOT yet proven until the user tests and confirms. Android controls installation approval, and Google Play Protect may present additional security prompts.
- No silent installs, remote phone control or background enrollment. First-party Play-managed release signing and store distribution remain future work.
