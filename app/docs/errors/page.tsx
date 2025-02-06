export default function ApiErrors() {
  return (
    <article className="space-y-8">
      <div>
        <h1>API Errors</h1>
        <p className="text-lg text-gray-400">
          Comprehensive guide to handling errors in the UltraReach.ai API, including error codes,
          troubleshooting steps, and best practices for error handling.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800">
          <h2 className="text-2xl font-bold mb-4">Error Response Format</h2>
          <div className="bg-black/30 rounded-lg p-4">
            <pre className="text-sm text-gray-300">
{`{
  "error": {
    "type": "validation_error",
    "code": "INVALID_PARAMETER",
    "message": "The provided parameter is invalid",
    "details": {
      "field": "email",
      "reason": "invalid_format"
    },
    "request_id": "req_123456789"
  }
}`}
            </pre>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800">
          <h2 className="text-2xl font-bold mb-4">Common Error Types</h2>
          <div className="space-y-3">
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-red-400">Authentication Errors</span>
              <p className="text-gray-400 mt-1">Issues with API keys or access tokens</p>
            </div>
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-orange-400">Validation Errors</span>
              <p className="text-gray-400 mt-1">Invalid input parameters or formats</p>
            </div>
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-yellow-400">Rate Limit Errors</span>
              <p className="text-gray-400 mt-1">Too many requests in a time period</p>
            </div>
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-purple-400">Server Errors</span>
              <p className="text-gray-400 mt-1">Internal system issues or downtime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">HTTP Status Codes</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">4xx Client Errors</h3>
              <div className="space-y-3">
                <div className="p-3 bg-black/30 rounded-lg">
                  <span className="font-semibold text-red-400">400</span>
                  <span className="text-gray-400 ml-2">Bad Request</span>
                  <p className="text-gray-400 text-sm mt-1">The request was malformed or invalid</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <span className="font-semibold text-red-400">401</span>
                  <span className="text-gray-400 ml-2">Unauthorized</span>
                  <p className="text-gray-400 text-sm mt-1">Missing or invalid authentication</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <span className="font-semibold text-red-400">403</span>
                  <span className="text-gray-400 ml-2">Forbidden</span>
                  <p className="text-gray-400 text-sm mt-1">Valid auth but insufficient permissions</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <span className="font-semibold text-red-400">404</span>
                  <span className="text-gray-400 ml-2">Not Found</span>
                  <p className="text-gray-400 text-sm mt-1">The requested resource doesn't exist</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <span className="font-semibold text-red-400">429</span>
                  <span className="text-gray-400 ml-2">Too Many Requests</span>
                  <p className="text-gray-400 text-sm mt-1">Rate limit has been exceeded</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">5xx Server Errors</h3>
              <div className="space-y-3">
                <div className="p-3 bg-black/30 rounded-lg">
                  <span className="font-semibold text-red-400">500</span>
                  <span className="text-gray-400 ml-2">Internal Server Error</span>
                  <p className="text-gray-400 text-sm mt-1">Unexpected server error occurred</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <span className="font-semibold text-red-400">502</span>
                  <span className="text-gray-400 ml-2">Bad Gateway</span>
                  <p className="text-gray-400 text-sm mt-1">Invalid response from upstream server</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <span className="font-semibold text-red-400">503</span>
                  <span className="text-gray-400 ml-2">Service Unavailable</span>
                  <p className="text-gray-400 text-sm mt-1">Server is temporarily unavailable</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <span className="font-semibold text-red-400">504</span>
                  <span className="text-gray-400 ml-2">Gateway Timeout</span>
                  <p className="text-gray-400 text-sm mt-1">Upstream server request timeout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Error Handling Best Practices</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Always check error responses
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Implement retry logic with backoff
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Log errors with request IDs
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Handle rate limits gracefully
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Retry Strategy</h3>
          <div className="bg-black/30 rounded-lg p-4">
            <pre className="text-sm text-gray-300">
{`const retry = async (fn, maxAttempts = 3) => {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (!isRetryable(error) || 
          i === maxAttempts - 1) {
        throw error;
      }
      await wait(Math.pow(2, i) * 1000);
    }
  }
};`}
            </pre>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Rate Limiting Headers</h3>
          <div className="space-y-2">
            <div className="p-2 bg-black/30 rounded-lg">
              <span className="text-blue-400">X-RateLimit-Limit</span>
              <p className="text-gray-400 text-sm">Total requests allowed</p>
            </div>
            <div className="p-2 bg-black/30 rounded-lg">
              <span className="text-blue-400">X-RateLimit-Remaining</span>
              <p className="text-gray-400 text-sm">Requests remaining</p>
            </div>
            <div className="p-2 bg-black/30 rounded-lg">
              <span className="text-blue-400">X-RateLimit-Reset</span>
              <p className="text-gray-400 text-sm">Time until limit resets</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800">
        <h2 className="text-2xl font-bold mb-6">Error Resolution Guide</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Authentication</h3>
            <p className="text-gray-400">
              Check API keys and token validity
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Validation</h3>
            <p className="text-gray-400">
              Verify request parameters and formats
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Rate Limits</h3>
            <p className="text-gray-400">
              Implement request throttling
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Server Issues</h3>
            <p className="text-gray-400">
              Check system status and retry later
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
