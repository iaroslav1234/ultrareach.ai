export default function ApiReference() {
  return (
    <article>
      <h1>API Reference</h1>
      
      <p>
        UltraReach.ai provides a comprehensive RESTful API that allows you to integrate our AI-powered features into your existing systems. This guide covers the basics of our API and provides examples for common use cases.
      </p>

      <h2>Authentication</h2>
      
      <p>
        All API requests require authentication using an API key. You can generate API keys in your dashboard under Settings → API Keys.
      </p>

      <div className="bg-gray-900 p-4 rounded-lg my-4">
        <code className="text-sm">
          curl -H "Authorization: Bearer YOUR_API_KEY" \<br/>
          &nbsp;&nbsp;https://api.ultrareach.ai/v1/properties
        </code>
      </div>

      <h2>Base URL</h2>
      <p>
        All API requests should be made to:
      </p>
      <div className="bg-gray-900 p-4 rounded-lg my-4">
        <code>https://api.ultrareach.ai/v1/</code>
      </div>

      <h2>Properties API</h2>

      <h3>List Properties</h3>
      <p>
        Retrieve a list of properties with optional filtering.
      </p>
      <div className="bg-gray-900 p-4 rounded-lg my-4">
        <code>
          GET /properties<br/>
          GET /properties?type=residential&min_price=500000
        </code>
      </div>

      <h3>Create Property</h3>
      <p>
        Add a new property to the system.
      </p>
      <div className="bg-gray-900 p-4 rounded-lg my-4">
        <code>
          POST /properties<br/>
          {`{
  "type": "residential",
  "price": 750000,
  "bedrooms": 3,
  "bathrooms": 2,
  "location": {
    "address": "123 Main St",
    "city": "San Francisco",
    "state": "CA"
  }
}`}
        </code>
      </div>

      <h2>Leads API</h2>

      <h3>Create Lead</h3>
      <p>
        Submit a new lead for AI qualification.
      </p>
      <div className="bg-gray-900 p-4 rounded-lg my-4">
        <code>
          POST /leads<br/>
          {`{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "preferences": {
    "property_type": "residential",
    "price_range": {
      "min": 500000,
      "max": 1000000
    }
  }
}`}
        </code>
      </div>

      <h3>Get Lead Score</h3>
      <p>
        Retrieve AI-generated lead qualification score.
      </p>
      <div className="bg-gray-900 p-4 rounded-lg my-4">
        <code>
          GET /leads/{`{lead_id}`}/score
        </code>
      </div>

      <h2>Analytics API</h2>

      <h3>Get Market Insights</h3>
      <p>
        Retrieve AI-powered market analysis for a specific area.
      </p>
      <div className="bg-gray-900 p-4 rounded-lg my-4">
        <code>
          GET /analytics/market<br/>
          GET /analytics/market?city=san_francisco&property_type=residential
        </code>
      </div>

      <h2>Rate Limits</h2>
      <p>
        API requests are limited based on your subscription plan:
      </p>
      <ul>
        <li>Basic: 1,000 requests per day</li>
        <li>Professional: 10,000 requests per day</li>
        <li>Enterprise: Custom limits</li>
      </ul>

      <h2>Error Handling</h2>
      <p>
        The API uses standard HTTP response codes:
      </p>
      <ul>
        <li>200: Success</li>
        <li>400: Bad Request</li>
        <li>401: Unauthorized</li>
        <li>403: Forbidden</li>
        <li>404: Not Found</li>
        <li>429: Too Many Requests</li>
        <li>500: Internal Server Error</li>
      </ul>

      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg border border-blue-800">
        <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
        <p>
          For additional support with API integration:
        </p>
        <ul className="mt-2">
          <li>Join our <a href="/community">Developer Community</a></li>
          <li>Check out our <a href="/docs/api/examples">Code Examples</a></li>
          <li>Contact our <a href="/help">Technical Support</a></li>
        </ul>
      </div>
    </article>
  );
}
