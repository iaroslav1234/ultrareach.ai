export default function LeadQualification() {
  return (
    <article className="space-y-8">
      <div>
        <h1>Lead Qualification</h1>
        <p className="text-lg text-gray-400">
          Our AI-powered Lead Qualification system analyzes multiple data points to score and prioritize leads,
          helping you focus on the most promising opportunities while ensuring no potential client falls through the cracks.
        </p>
      </div>

      <div className="space-y-6">
        <h2>Qualification Process</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">1. Data Collection</h3>
            <p className="text-gray-400 mb-4">
              The system collects data from multiple touchpoints to build a comprehensive lead profile.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Initial inquiry details
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Website behavior patterns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Communication history
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Property viewing requests
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Social media interactions
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">2. AI Analysis</h3>
            <p className="text-gray-400 mb-4">
              Our AI evaluates leads using sophisticated algorithms and machine learning models.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Budget alignment with property prices
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Timeline urgency
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Communication engagement levels
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Property preference clarity
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Financial pre-qualification indicators
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2>Scoring System</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Score Components</h3>
            <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
              <pre className="text-gray-300">
{`{
  "lead_score": {
    "financial_readiness": 0-25,
    "engagement_level": 0-25,
    "property_match": 0-25,
    "timeline": 0-25,
    "total_score": 0-100
  }
}`}
              </pre>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800">
            <h3 className="text-xl font-semibold mb-4">Score Categories</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div>
                  <span className="font-semibold text-green-400">Hot Lead (80-100):</span>
                  <span className="text-gray-400 ml-2">Ready to transact</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div>
                  <span className="font-semibold text-yellow-400">Warm Lead (60-79):</span>
                  <span className="text-gray-400 ml-2">Active interest</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <div>
                  <span className="font-semibold text-orange-400">Nurture Lead (40-59):</span>
                  <span className="text-gray-400 ml-2">Needs development</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div>
                  <span className="font-semibold text-red-400">Cold Lead (0-39):</span>
                  <span className="text-gray-400 ml-2">Long-term prospect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2>Automated Actions</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Based on Score</h3>
            <div className="space-y-3">
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="text-green-400 font-semibold">Hot:</span>
                <span className="text-gray-400 ml-2">Immediate agent notification</span>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="text-yellow-400 font-semibold">Warm:</span>
                <span className="text-gray-400 ml-2">Enhanced property recommendations</span>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="text-orange-400 font-semibold">Nurture:</span>
                <span className="text-gray-400 ml-2">Educational content series</span>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="text-red-400 font-semibold">Cold:</span>
                <span className="text-gray-400 ml-2">Periodic market updates</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Custom Workflows</h3>
            <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
              <pre className="text-gray-300">
{`{
  "workflow": {
    "trigger": "score_change",
    "conditions": {
      "new_score": ">= 80",
      "score_increase": ">= 20"
    },
    "actions": [
      "notify_agent",
      "schedule_followup",
      "send_property_matches"
    ]
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2>Machine Learning Models</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800">
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Likelihood to purchase
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Optimal price range
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Preferred property types
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Best contact times
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800">
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Conversion tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Agent feedback
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Market performance data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Behavioral pattern analysis
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2>Integration Features</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">CRM Integration</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Automatic lead scoring updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Task creation and assignment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Activity logging
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Performance reporting
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">API Access</h3>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <pre className="text-gray-300">
{`GET /api/v1/leads/{lead_id}/score
POST /api/v1/leads/{lead_id}/update`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800">
        <h3 className="text-xl font-semibold mb-4">Success Metrics</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-black/30 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400">40%</div>
            <div className="text-gray-400">Increase in conversion rate</div>
          </div>
          <div className="p-4 bg-black/30 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400">60%</div>
            <div className="text-gray-400">Reduction in response time</div>
          </div>
          <div className="p-4 bg-black/30 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400">85%</div>
            <div className="text-gray-400">Accuracy in lead scoring</div>
          </div>
          <div className="p-4 bg-black/30 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400">30%</div>
            <div className="text-gray-400">Improvement in productivity</div>
          </div>
        </div>
      </div>
    </article>
  );
}
