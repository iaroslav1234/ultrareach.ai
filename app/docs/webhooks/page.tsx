export default function Webhooks() {
  return (
    <article className="space-y-8">
      <div>
        <h1>Webhooks</h1>
        <p className="text-lg text-gray-400">
          UltraReach.ai uses webhooks to notify your application when events happen in real-time.
          This guide explains how to implement, secure, and manage webhooks effectively.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800">
          <h2 className="text-2xl font-bold mb-4">Available Events</h2>
          <div className="space-y-3">
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-blue-400">lead.qualified</span>
              <p className="text-gray-400 mt-1">Triggered when a lead meets qualification criteria</p>
            </div>
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-blue-400">property.matched</span>
              <p className="text-gray-400 mt-1">Triggered when properties are matched to a lead</p>
            </div>
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-blue-400">message.received</span>
              <p className="text-gray-400 mt-1">Triggered when a new message is received</p>
            </div>
            <div className="p-3 bg-black/30 rounded-lg">
              <span className="font-semibold text-blue-400">analysis.completed</span>
              <p className="text-gray-400 mt-1">Triggered when market analysis is complete</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800">
          <h2 className="text-2xl font-bold mb-4">Event Payload</h2>
          <div className="bg-black/30 rounded-lg p-4">
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "id": "evt_123456789",
  "type": "lead.qualified",
  "created": "2025-02-07T02:55:00Z",
  "data": {
    "lead_id": "lead_987654321",
    "score": 85,
    "qualification_type": "hot",
    "triggers": ["budget_match", "high_engagement"]
  },
  "version": "2024-01-01"
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Implementation Guide</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">1. Register Endpoint</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`POST /api/v1/webhooks
{
  "url": "https://your-domain.com/webhook",
  "events": ["lead.qualified", "property.matched"],
  "description": "Production webhook handler"
}`}
                </pre>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">2. Verify Signatures</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`const signature = req.headers['x-ultrareach-signature'];
const timestamp = req.headers['x-ultrareach-timestamp'];
const payload = req.body;

const isValid = verifyWebhookSignature(
  payload,
  signature,
  timestamp,
  WEBHOOK_SECRET
);`}
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">3. Handle Events</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`app.post('/webhook', async (req, res) => {
  const event = req.body;
  
  switch(event.type) {
    case 'lead.qualified':
      await handleQualifiedLead(event.data);
      break;
    case 'property.matched':
      await handlePropertyMatch(event.data);
      break;
    default:
      console.log(\`Unhandled event: \${event.type}\`);
  }

  res.json({ received: true });
});`}
                </pre>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">4. Implement Retry Logic</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`// Exponential backoff
const retryWebhook = async (event, attempt = 1) => {
  try {
    await processWebhook(event);
  } catch (error) {
    if (attempt <= 5) {
      const delay = Math.pow(2, attempt) * 1000;
      await wait(delay);
      return retryWebhook(event, attempt + 1);
    }
    throw error;
  }
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Security Best Practices</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Always verify webhook signatures
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Use HTTPS endpoints only
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Implement request timeouts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Rotate webhook secrets regularly
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Monitoring</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Track delivery success rates
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Monitor response times
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Set up failure alerts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Log all webhook activities
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Troubleshooting</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Check webhook logs
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Verify endpoint availability
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Test with webhook simulator
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Review response codes
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800">
        <h2 className="text-2xl font-bold mb-6">Testing Tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Webhook Tester</h3>
            <p className="text-gray-400">
              Test your webhook endpoints with sample events
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Event Viewer</h3>
            <p className="text-gray-400">
              View and filter webhook delivery history
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Signature Validator</h3>
            <p className="text-gray-400">
              Verify webhook signature implementation
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Debug Console</h3>
            <p className="text-gray-400">
              Debug webhook delivery issues in real-time
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
