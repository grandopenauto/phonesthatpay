# HDP Mode Worker — Android Direct Beta Releases

Latest published version **v0.9.0** (versionCode 9), distributed as an owner-approved direct beta APK. This is **not** a Google Play production release.

- [Latest release manifest](./latest.json): schema `hdp.mobile.release.v1`.
- [v0.9.0 signed APK](./v0.9.0/mode-worker-v0.9.0.apk): 54,163 bytes; SHA-256 `0a9b5ec5caa500d160ca5a299d1c6114c0e26034b6dab5323b4c3c8db8000900`.
- [Immutable v0.9.0 manifest](./v0.9.0/release.json) includes the exact checksum and pinned signing certificate.
- Android package `com.highestdegreepriorities.modeworker`, versionCode 9, versionName 0.9.0.
- HDP beta signing certificate SHA-256: `05b08f3b35ee583b25b4cb842db1d9bedb4d91d06bd8bca4f444f3a2c55f7293` (unchanged from v0.8.0).
- BuildOS job `MW09-CASH-ICON-RETRY-002` completed BUILT/exit 0. All ten private Sheets artifact chunks were independently assembled and SHA-256 checked before publishing.
- v0.9.0 adds the black-and-white front-facing smartphone with dollar bills flying outward as the adaptive Android launcher icon. No enrollment, earning, or worker operation changes were required for this icon-only release.
- The existing v0.8 enrollment/status capability remains intact. Backend operator-authenticated invitations, approval, and consented heartbeat are separately controlled.
- **Physical device v0.9.0 installation has not been performed by this release process.** Check for updates within the app, download, and explicitly approve Android installation. Do not bypass device security prompts.
- No silent installation, guaranteed income, automatic workload enrollment, or Google Play general-user launch. The pilot uses the original pinned beta debug signing certificate; production signing and Play Store review are separate milestones.
