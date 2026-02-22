# Sentinel Patient Monitoring Dashboard

## Overview

Sentinel is a real-time patient monitoring dashboard built with Next.js, React, Zustand, React Query, and Tailwind CSS. It features live polling for patient alerts, global modal notifications, and secure authentication.

## Tools & Libraries Used

- **Next.js**: App router, SSR/SSG, routing
- **React**: UI components
- **Zustand**: State management (auth, dashboard, patient)
- **React Query (@tanstack/react-query)**: Data fetching, polling, caching
- **Axios**: HTTP requests, API integration
- **Tailwind CSS**: Styling
- **Lucide React**: Icon set

## Key Features

- **Global Alert Polling**: Polls for CRITICAL alerts for patient PAT004 every 7 seconds, shows modal from anywhere in dashboard
- **Alert Modal**: Displays alert details and auto-dismisses after 30 seconds
- **Authentication**: Uses Zustand for auth state, attaches Bearer token to all API requests
- **Dashboard**: Stats, patient monitoring, recent alerts, navigation
- **Patient Detail**: Live vitals, AI analysis, risk level

## Project Structure

```
app/
  dashboard/
    DashboardContent.tsx
    patient/[patientId]/page.tsx
components/
  dashboard/
    AlertModal.tsx
hooks/
  useGlobalAlertPolling.ts
  usePatientVitals.ts
  useDashboard.ts
lib/
  api.ts
store/
  authStore.ts
  dashboardStore.ts
  patientStore.ts
types/
  Alert.ts
  Patient.ts
  LatestVitals.ts
```

## How It Works

1. **Global Polling**: `useGlobalAlertPolling` runs in the dashboard, polling for CRITICAL alerts for PAT004. If found, it shows `AlertModal`.
2. **Modal Display**: The modal appears anywhere in the dashboard, auto-dismisses after 30s, and pauses polling while open.
3. **API Integration**: All requests use Axios and React query.
4. **State Management**: Zustand stores manage auth, dashboard, and patient data.
5. **UI**: Components use Tailwind for styling and Lucide for icons.

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the dev server:
   ```bash
   pnpm dev
   ```
3. Log in, navigate to /dashboard, and watch for alert modals.

## Customization

- Styling and layout can be adjusted in Tailwind classes.

---