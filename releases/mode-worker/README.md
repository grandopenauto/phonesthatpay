# HDP Mode Worker — direct-beta update channel

Latest published build: **v0.5.0** (versionCode 5).

This is a signed, debug-key Android beta release for HDP's Mode Worker testing device. It is **not** a Play Store release, a job-placement service, or a guarantee of earning income.

The v0.5 update manager addresses a known Android 9/10 behavior: `getPackageArchiveInfo()` may return package details but omit archive `signingInfo`. The app checks that the downloaded APK matches the expected package and increasing version, exact public release manifest SHA-256 and byte length, a pinned signing certificate identity, and the installed app's signing identity. When Android 10 does not provide the archive's signing metadata, the user-visible message distinguishes download verification from APK signing verification. The operating system's package installer independently verifies APK signing and compatibility before accepting any update; **the user must approve installation**.

- Current [latest manifest](./latest.json).
- Immutable [v0.5.0 APK](./v0.5.0/mode-worker-v0.5.0.apk).
- Previous [v0.4.0 APK](./v0.4.0/mode-worker-v0.4.0.apk) remains available.
- The in-app update flow is still under real-device testing. The public build and the HTTPS checksum/signing verification are not evidence that an Android user completed installation from inside the app.
- No ADB, silent installation, general remote device control, or automatic telemetry is implemented.
- A future Google Play build should remove the direct-beta `REQUEST_INSTALL_PACKAGES` permission and use Play-managed distribution.

Release publication requires explicit approval, increasing version code, pinned signing identity and verified on-device behavior before rollout to additional users.
