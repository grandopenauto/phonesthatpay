# HDP Mode Worker — Android Direct Beta Releases

Latest published version **v0.8.0** (versionCode 8), distributed as an owner-approved direct beta APK. This is not a Google Play production release.

- [Latest release manifest](./latest.json): schema `hdp.mobile.release.v1`.
- [v0.8.0 APK](./v0.8.0/mode-worker-v0.8.0.apk): 37,428 bytes, SHA-256 `0d59dc98ce4e55b9c256c651426b7f6e1c4d9be74aed817c7445951d4ebb23da`.
- [Immutable v0.8.0 manifest](./v0.8.0/release.json) with the same checksum.
- Android package `com.highestdegreepriorities.modeworker`, versionCode 8, versionName 0.8.0.
- HDP beta signing certificate SHA-256: `05b08f3b35ee583b25b4cb842db1d9bedb4d91d06bd8bca4f444f3a2c55f7293`.
- The existing BuildOS job `MW08-ENROLLMENT-PILOT-001` finished BUILT/exit 0. Its 7 private Google Sheets artifact chunks were reassembled, and the exact APK SHA-256 and both embedded v2/v3 signer certificate fingerprints independently matched.
- v0.8 adds the opt-in HDP worker enrollment/status interface while preserving the existing worker ID, current app icon, and Android OS approval requirement.
- The enrollment backend passed a synthetic HTTPS pilot (invite, pending approval, consented heartbeat, receipt, rate limit, withdrawal and revocation). **Physical phone v0.7 to v0.8 update and real-device enrollment have not yet been confirmed.**
- No silent installs, guaranteed earnings, general-user release, or background enrollment. Device owner approval remains required; Google's Play Protect checks and Android installer controls must be respected. Production release signing and Google Play distribution remain separate future work.
