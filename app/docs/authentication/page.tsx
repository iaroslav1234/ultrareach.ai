export default function Authentication() {
  return (
    <article className="space-y-8">
      <div>
        <h1>Authentication</h1>
        <p className="text-lg text-gray-400">
          Learn how to authenticate with UltraReach.ai's API and implement secure access control
          for your integration.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800">
          <h2 className="text-2xl font-bold mb-4">Authentication Methods</h2>
          <div className="space-y-3">
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-blue-400">API Keys</span>
              <p className="text-gray-400 mt-1">For server-to-server communication</p>
            </div>
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-blue-400">OAuth 2.0</span>
              <p className="text-gray-400 mt-1">For user-based authentication</p>
            </div>
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-blue-400">JWT Tokens</span>
              <p className="text-gray-400 mt-1">For session management</p>
            </div>
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-blue-400">SSO</span>
              <p className="text-gray-400 mt-1">For enterprise customers</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800">
          <h2 className="text-2xl font-bold mb-4">API Key Authentication</h2>
          <div className="bg-black/30 rounded-lg p-4">
            <pre className="text-sm text-gray-300">
{`# HTTP Request
GET /api/v1/leads
Authorization: Bearer YOUR_API_KEY

# cURL Example
curl -X GET \\
  https://api.ultrareach.ai/v1/leads \\
  -H 'Authorization: Bearer YOUR_API_KEY'`}
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">OAuth 2.0 Implementation</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">1. Authorization Request</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`GET https://auth.ultrareach.ai/oauth/authorize
  ?client_id=YOUR_CLIENT_ID
  &response_type=code
  &redirect_uri=https://your-app.com/callback
  &scope=leads.read properties.write
  &state=random_state_string`}
                </pre>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">2. Token Exchange</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`POST https://auth.ultrareach.ai/oauth/token
{
  "grant_type": "authorization_code",
  "code": "AUTH_CODE",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "redirect_uri": "https://your-app.com/callback"
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">3. Access Token Response</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`{
  "access_token": "ACCESS_TOKEN",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "REFRESH_TOKEN",
  "scope": "leads.read properties.write"
}`}
                </pre>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">4. Token Refresh</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`POST https://auth.ultrareach.ai/oauth/token
{
  "grant_type": "refresh_token",
  "refresh_token": "REFRESH_TOKEN",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Available Scopes</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              leads.read
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              leads.write
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              properties.read
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              properties.write
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              analytics.read
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Security Measures</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              HTTPS only
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Rate limiting
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              IP whitelisting
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Audit logging
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Error Handling</h3>
          <div className="space-y-2">
            <div className="p-2 bg-black/30 rounded-lg">
              <span className="text-red-400">401</span>
              <span className="text-gray-400 ml-2">Invalid credentials</span>
            </div>
            <div className="p-2 bg-black/30 rounded-lg">
              <span className="text-red-400">403</span>
              <span className="text-gray-400 ml-2">Insufficient scope</span>
            </div>
            <div className="p-2 bg-black/30 rounded-lg">
              <span className="text-red-400">429</span>
              <span className="text-gray-400 ml-2">Rate limit exceeded</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800">
        <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Key Management</h3>
            <p className="text-gray-400">
              Rotate keys regularly and use environment variables
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Token Storage</h3>
            <p className="text-gray-400">
              Store tokens securely and never expose in client-side code
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Scope Usage</h3>
            <p className="text-gray-400">
              Request minimum required scopes for your application
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Error Handling</h3>
            <p className="text-gray-400">
              Implement proper error handling and token refresh logic
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
