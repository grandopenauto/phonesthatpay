# HDP Mode Worker · Direct beta release channel

This directory hosts an experimental, explicitly user-approved Android app update feed for the **HDP Mode Worker** testing phone. It is not a Google Play distribution channel, a production release, or a promise of work or earnings.

- Current release: v0.3.0 (version code 3).
- Release metadata: [latest.json](./latest.json).
- APK: [mode-worker-v0.3.0.apk](./v0.3.0/mode-worker-v0.3.0.apk).
- Builds are signed for local beta testing; the Android installation screen remains the user's decision.
- Updates must have a matching installed package signature and a SHA-256 digest matching the HTTPS metadata.
- The direct-beta Android manifest requests REQUEST_INSTALL_PACKAGES; **do not ship this build into the Google Play channel**. For Play, create a separately verified build without the sideload install permission and use Play-managed updates.
- Avoid retaining obsolete private-key materials in public code repositories. The APK contains no private signing key.

For production deployment, implement release review and immutable version policy, security monitoring, proper app signing key management, and rollback planning.
