'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Example: Call the Ancient Healings Pro API
      // In a real application, you would initialize the client and make API calls here
      const response = await fetch('/api/example');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <main>
        <h1>Ancient Healings Pro - Next.js Example</h1>
        
        <section>
          <h2>Welcome to Vercel Web Analytics</h2>
          <p>
            This example application demonstrates how to integrate the Ancient Healings Pro API
            with a Next.js application and Vercel Web Analytics.
          </p>
          
          <h3>Features</h3>
          <ul>
            <li>✅ Next.js App Router integration</li>
            <li>✅ Vercel Web Analytics enabled</li>
            <li>✅ TypeScript support</li>
            <li>✅ Ancient Healings Pro SDK ready to use</li>
          </ul>
        </section>

        <section>
          <h3>Quick Start</h3>
          <ol>
            <li>Initialize the Ancient Healings Pro client with your API key</li>
            <li>Make API calls to the service</li>
            <li>Web Analytics automatically tracks your page views and interactions</li>
            <li>View your analytics in the Vercel Dashboard</li>
          </ol>
        </section>

        <section>
          <h3>Test API Integration</h3>
          <button onClick={fetchData} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Fetch Example Data'}
          </button>

          {error && (
            <div className="error" role="alert">
              <strong>Error:</strong> {error}
            </div>
          )}

          {data && (
            <div className="success">
              <strong>Success!</strong>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </section>

        <section>
          <h3>Analytics Integration</h3>
          <p>
            Vercel Web Analytics is automatically integrated via the Analytics component
            in the root layout. Track:
          </p>
          <ul>
            <li>Page views</li>
            <li>Web vitals</li>
            <li>User interactions</li>
            <li>Custom events (with Vercel Pro/Enterprise)</li>
          </ul>
          <p>
            Check your <strong>Vercel Dashboard → Analytics</strong> to view real-time metrics.
          </p>
        </section>
      </main>

      <footer>
        <p>
          Learn more about{' '}
          <a href="https://vercel.com/docs/analytics" target="_blank" rel="noopener noreferrer">
            Vercel Web Analytics
          </a>
          {' '}and{' '}
          <a href="https://github.com/stainless-sdks/ancient-healings-pro-typescript" target="_blank" rel="noopener noreferrer">
            Ancient Healings Pro SDK
          </a>
        </p>
      </footer>
    </div>
  );
}
