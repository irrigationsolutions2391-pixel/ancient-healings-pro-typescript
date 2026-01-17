# Ancient Healings Pro - Next.js Example with Vercel Web Analytics

This is an example Next.js application that demonstrates how to integrate the [Ancient Healings Pro API](https://github.com/stainless-sdks/ancient-healings-pro-typescript) with [Vercel Web Analytics](https://vercel.com/docs/analytics).

## Prerequisites

- Node.js 18+ and pnpm
- A Vercel account (for viewing analytics in the dashboard)
- Ancient Healings Pro API key (if making actual API calls)

## Getting Started

### 1. Install Dependencies

From the root of the monorepo, install all dependencies:

```bash
pnpm install
```

### 2. Build the SDK

Build the main SDK package:

```bash
pnpm build
```

### 3. Run the Development Server

Navigate to the example directory and start the development server:

```bash
cd examples/next-app
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel Web Analytics Setup

This example includes Vercel Web Analytics out of the box. To see analytics data:

### Enable Analytics on Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** to enable Web Analytics

### View Analytics

Once enabled and deployed:

1. Visit your live deployment
2. Analytics data will start being collected automatically
3. View metrics in your Vercel Dashboard under the **Analytics** tab

### What Gets Tracked

Vercel Web Analytics automatically tracks:

- **Page Views**: All page navigations
- **Web Vitals**:
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)
  - First Input Delay (FID) / Interaction to Next Paint (INP)
- **Interaction Data**: User clicks and form submissions
- **Custom Events**: (Pro/Enterprise plans) Track custom user actions

## Project Structure

```
examples/next-app/
├── app/
│   ├── layout.tsx        # Root layout with Analytics component
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── api/
│       └── example/
│           └── route.ts  # Example API endpoint
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── README.md             # This file
```

## Implementing Ancient Healings Pro API

To use the Ancient Healings Pro API in your application:

### 1. Set Up Environment Variables

Create a `.env.local` file:

```bash
ANCIENT_HEALINGS_PRO_API_KEY=your_api_key_here
```

### 2. Initialize the Client

In `app/api/example/route.ts`:

```typescript
import AncientHealingsPro from 'ancient-healings-pro';

const client = new AncientHealingsPro({
  apiKey: process.env.ANCIENT_HEALINGS_PRO_API_KEY,
});

// Make API calls
const data = await client.store.listInventory();
```

### 3. Use the Client in Your Pages

```typescript
// app/page.tsx
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/example')
      .then(r => r.json())
      .then(setData);
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## Tracking Custom Events

With Vercel Pro or Enterprise, you can track custom events:

```typescript
import { trackEvent } from '@vercel/analytics';

trackEvent('button_clicked', {
  buttonName: 'subscribe',
  timestamp: new Date().toISOString(),
});
```

## Learn More

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [Next.js Documentation](https://nextjs.org/docs)
- [Ancient Healings Pro SDK](https://github.com/stainless-sdks/ancient-healings-pro-typescript)
- [@vercel/analytics Package](https://github.com/vercel/analytics)

## Building for Production

Build the application:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Deploying to Vercel

### Using Vercel CLI

```bash
pnpm add -g vercel
vercel
```

### Using Git

Connect your repository to Vercel through the [Vercel Dashboard](https://vercel.com/dashboard). Vercel will automatically build and deploy your application.

## Support

For issues with:

- **Ancient Healings Pro SDK**: See the [main repository](https://github.com/stainless-sdks/ancient-healings-pro-typescript)
- **Vercel Web Analytics**: Check the [Vercel Documentation](https://vercel.com/docs/analytics)
- **Next.js**: Visit [Next.js Documentation](https://nextjs.org/docs)
