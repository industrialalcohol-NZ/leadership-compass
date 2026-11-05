# Leadwell — Leadership in Practice

A private, offline-capable Progressive Web App for iPhone, designed for an engineering manager and a fire-service officer. There is **no App Store submission or developer account required**.

## Get it onto your iPhone

A PWA needs to be opened from a web address served over **HTTPS** before it can work as an installable, offline-capable Home Screen app. The downloaded ZIP itself is not an iPhone installer.

1. Unzip this download on a computer.
2. Publish **the contents** of the `leadership-compass` folder to a static HTTPS host. One easy route is [Netlify Drop](https://app.netlify.com/drop) (drag the folder onto its page); GitHub Pages or Cloudflare Pages also work. **No backend or database is needed.**
3. On the iPhone, open your HTTPS address in **Safari**.
4. Select Share → **Add to Home Screen** → keep **Open as Web App** enabled → Add.
5. Open **Leadwell** from your Home Screen. Visit it once online so the files can be cached; after that it is designed to work offline.

## Daily alerts

This release has an **in-app reminder** after your chosen time, but it **does not send push notifications when closed**. Reliable background reminders on iPhone require a native Reminder or a web-push server. Create a repeating Apple Reminders alert named “Leadwell: 3-minute leadership reset” at the time you select in Settings. Settings also includes an experimental recurring `.ics` calendar export (import support varies by device/version).

## Features

- Separate Engineering, Fire Service and All-context views.
- Daily two-minute reset: win, missed opportunity, learning, next action.
- Detailed event journal using situation/action/outcome/learning/next-time experiment.
- A configurable checklist of leadership behaviours with a maximum of three active focus behaviours.
- Daily deliberate practice checkmarks.
- Follow-up experiments: log evidence of what happened when you tried a change.
- Weekly debrief with evidence, patterns and a cross-context transfer prompt.
- Seven-day activity chart and themes by skill.
- Local-only entries with JSON export/import backup.
- Offline use via service worker once installed and cached.

## Data and safety

Entries are held in the web app's `localStorage`, on that device and in that web app's origin. They are **not uploaded to the hosting provider by the app**. No third-party code, fonts, analytics or network calls are included. Browsers can delete local data (especially if site data is cleared); use Export Backup frequently. There is **no cloud sync, login, device-to-device transfer or built-in encryption**. Avoid recording confidential engineering, personnel, fire incident, medical or operational data; anonymise details.

## Notes

- This is a working personal-use MVP, not a formally audited security product.
- The web address depends on where you host it; this package does not create a publicly accessible URL by itself.
- For future true push notifications, add an opt-in Web Push backend (iOS Home Screen web apps support web push) and secure subscription handling.
