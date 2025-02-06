export default function DataModels() {
  return (
    <article className="space-y-8">
      <div>
        <h1>Data Models</h1>
        <p className="text-lg text-gray-400">
          Comprehensive guide to UltraReach.ai's data models, their relationships,
          and how to work with them effectively in your applications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800">
          <h2 className="text-2xl font-bold mb-4">Lead Model</h2>
          <div className="bg-black/30 rounded-lg p-4">
            <pre className="text-sm text-gray-300">
{`{
  "id": "lead_123",
  "created_at": "2025-02-07T02:55:00Z",
  "updated_at": "2025-02-07T02:55:00Z",
  "status": "active",
  "score": 85,
  "contact": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  },
  "preferences": {
    "property_types": ["apartment", "house"],
    "price_range": {
      "min": 300000,
      "max": 500000
    },
    "locations": ["downtown", "suburbs"],
    "bedrooms": { "min": 2, "max": 3 },
    "bathrooms": { "min": 1, "max": 2 }
  },
  "engagement": {
    "last_contact": "2025-02-06T00:00:00Z",
    "total_interactions": 15,
    "preferred_contact_time": "evening"
  }
}`}
            </pre>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800">
          <h2 className="text-2xl font-bold mb-4">Property Model</h2>
          <div className="bg-black/30 rounded-lg p-4">
            <pre className="text-sm text-gray-300">
{`{
  "id": "prop_456",
  "created_at": "2025-02-07T02:55:00Z",
  "updated_at": "2025-02-07T02:55:00Z",
  "status": "active",
  "type": "apartment",
  "details": {
    "price": 450000,
    "bedrooms": 2,
    "bathrooms": 2,
    "square_feet": 1200,
    "year_built": 2020
  },
  "location": {
    "address": "123 Main St",
    "city": "Example City",
    "state": "EX",
    "zip": "12345",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  },
  "features": [
    "parking",
    "pool",
    "gym"
  ],
  "media": {
    "photos": ["url1", "url2"],
    "virtual_tour": "tour_url",
    "floor_plan": "plan_url"
  }
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Relationship Models</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Property Match</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`{
  "id": "match_789",
  "lead_id": "lead_123",
  "property_id": "prop_456",
  "created_at": "2025-02-07T02:55:00Z",
  "score": 92,
  "match_factors": [
    "price_range",
    "location",
    "bedrooms"
  ],
  "status": "presented",
  "lead_feedback": "interested"
}`}
                </pre>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Interaction</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`{
  "id": "int_101",
  "lead_id": "lead_123",
  "type": "message",
  "created_at": "2025-02-07T02:55:00Z",
  "channel": "email",
  "content": "Inquiry about property",
  "sentiment": "positive",
  "ai_analysis": {
    "intent": "information_request",
    "urgency": "medium"
  }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`{
  "id": "analysis_202",
  "property_id": "prop_456",
  "created_at": "2025-02-07T02:55:00Z",
  "market_data": {
    "median_price": 460000,
    "price_trend": "+5%",
    "days_on_market": 30,
    "comparable_properties": [
      "prop_457",
      "prop_458"
    ]
  },
  "predictions": {
    "estimated_value": 455000,
    "appreciation_rate": "3.5%",
    "sale_probability": 0.85
  }
}`}
                </pre>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Agent Assignment</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`{
  "id": "assignment_303",
  "lead_id": "lead_123",
  "agent_id": "agent_789",
  "created_at": "2025-02-07T02:55:00Z",
  "status": "active",
  "match_score": 88,
  "match_factors": [
    "expertise",
    "location",
    "language"
  ],
  "performance": {
    "response_time": "2h",
    "satisfaction_score": 4.8
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Model Relationships</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Lead → Properties (many-to-many)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Lead → Interactions (one-to-many)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Property → Analysis (one-to-many)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Lead → Agent (many-to-one)
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Data Validation</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Required fields validation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Data type checking
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Format validation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Relationship integrity
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Common Operations</h3>
          <div className="space-y-2">
            <div className="p-2 bg-black/30 rounded-lg">
              <span className="text-green-400">GET</span>
              <span className="text-gray-400 ml-2">/api/v1/leads/:id</span>
            </div>
            <div className="p-2 bg-black/30 rounded-lg">
              <span className="text-blue-400">POST</span>
              <span className="text-gray-400 ml-2">/api/v1/properties</span>
            </div>
            <div className="p-2 bg-black/30 rounded-lg">
              <span className="text-yellow-400">PUT</span>
              <span className="text-gray-400 ml-2">/api/v1/matches/:id</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800">
        <h2 className="text-2xl font-bold mb-6">Working with Models</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Create</h3>
            <p className="text-gray-400">
              Create new instances with proper validation
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Query</h3>
            <p className="text-gray-400">
              Fetch and filter data efficiently
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Update</h3>
            <p className="text-gray-400">
              Modify existing records safely
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Delete</h3>
            <p className="text-gray-400">
              Handle deletions with care
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
