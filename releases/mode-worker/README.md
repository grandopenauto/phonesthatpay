# HDP Mode Worker — Android Direct Beta Releases

Latest published version **v0.10.0** (versionCode 10), distributed as an owner-approved direct-beta APK. This is **not** a Google Play production release.

- [Latest release manifest](./latest.json): schema `hdp.mobile.release.v1`.
- [v0.10.0 signed APK](./v0.10.0/mode-worker-v0.10.0.apk): 54,163 bytes; SHA-256 `c91d2600d1255cd48129e6c23bc031af116b90746ccc0ec9e1b2eb464708fab3`.
- [Immutable v0.10.0 manifest](./v0.10.0/release.json) includes the exact checksum and pinned signing certificate.
- [Previous v0.9.0 release](./v0.9.0/release.json) and its original signed APK remain unchanged, including the black-and-white cash-flying phone launcher icon.
- Android package `com.highestdegreepriorities.modeworker`, versionCode 10, versionName `0.10.0`.
- HDP direct-beta signing certificate SHA-256: `05b08f3b35ee583b25b4cb842db1d9bedb4d91d06bd8bca4f444f3a2c55f7293` (same pinned signer as v0.9.0).
- BuildOS job `MW10-TASK-INBOX-PRIVATE-RETRY-002` completed `BUILT`/exit 0. All ten private artifact chunks were independently reassembled and SHA-256 checked before publication.
- v0.10.0 adds the **Worker TaskOS** task inbox and the manually consented, bounded HTTPS health-check pilot. It also corrects the separate enrollment-screen/heartbeat version field so it can report v0.10.0.
- A task is only claimed after an explicit user action. The backend approves and assigns tasks separately, limits endpoint and method, records receipts, and requires operator review. **No automated earnings or payouts**.
- The existing device enrollment ID, Android Keystore token storage, installed app identity, updater, and v0.9.0 launcher icon are preserved. **Physical v0.10.0 installation and full device-side task execution have not yet been verified.**
- To upgrade, use the current app's release checker, download this APK and approve Android's installer prompts. There is no remote or silent installation.
- This remains a consent-first direct beta with the pinned beta/debug signing certificate, not production Play signing, general distribution, guaranteed earnings, or autonomous phone workload execution.
