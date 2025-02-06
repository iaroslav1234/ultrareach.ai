export default function CoreConcepts() {
  return (
    <article className="space-y-8">
      <div>
        <h1>Core Concepts</h1>
        <p className="text-lg text-gray-400">
          Understanding the fundamental concepts behind UltraReach.ai's AI-powered real estate platform
          will help you make the most of our features and capabilities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800">
          <h2 className="text-2xl font-bold mb-4">AI-First Approach</h2>
          <p className="text-gray-400 mb-4">
            Our platform is built from the ground up with AI at its core, not as an afterthought.
            This enables seamless integration of intelligent features throughout the entire system.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Natural Language Processing for communication
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Machine Learning for predictions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Computer Vision for property analysis
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              Continuous learning and adaptation
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800">
          <h2 className="text-2xl font-bold mb-4">Real-Time Processing</h2>
          <p className="text-gray-400 mb-4">
            All operations happen in real-time, ensuring immediate responses and up-to-date information
            for both agents and clients.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400">•</span>
              Instant response generation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">•</span>
              Live market data analysis
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">•</span>
              Dynamic lead scoring
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">•</span>
              Automated workflow triggers
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Data Architecture</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Data Collection</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Multi-source integration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Real-time updates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Historical preservation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Automated validation
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Data Processing</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                AI-powered analysis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Pattern recognition
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Predictive modeling
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Automated enrichment
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Data Security</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                End-to-end encryption
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Access control
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Audit logging
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Compliance measures
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Event-Driven Architecture</h2>
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Event Types</h3>
            <div className="space-y-3">
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="font-semibold text-blue-400">System Events:</span>
                <span className="text-gray-400 ml-2">Internal state changes and updates</span>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="font-semibold text-purple-400">User Events:</span>
                <span className="text-gray-400 ml-2">Actions and interactions from users</span>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="font-semibold text-pink-400">Integration Events:</span>
                <span className="text-gray-400 ml-2">External system interactions</span>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="font-semibold text-green-400">Business Events:</span>
                <span className="text-gray-400 ml-2">Important business milestones</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Microservices Architecture</h2>
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Key Services</h3>
            <div className="space-y-3">
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="font-semibold text-yellow-400">AI Core:</span>
                <span className="text-gray-400 ml-2">Central intelligence and processing</span>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="font-semibold text-orange-400">Data Service:</span>
                <span className="text-gray-400 ml-2">Data management and storage</span>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="font-semibold text-red-400">Integration Hub:</span>
                <span className="text-gray-400 ml-2">External system connections</span>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <span className="font-semibold text-cyan-400">Analytics Engine:</span>
                <span className="text-gray-400 ml-2">Reporting and insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800">
        <h2 className="text-2xl font-bold mb-6">System Principles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Scalability</h3>
            <p className="text-gray-400">
              Designed to handle growing workloads and user bases efficiently
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Reliability</h3>
            <p className="text-gray-400">
              Built for high availability and fault tolerance
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Security</h3>
            <p className="text-gray-400">
              Enterprise-grade security at every layer
            </p>
          </div>
          <div className="p-4 bg-black/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Extensibility</h3>
            <p className="text-gray-400">
              Flexible architecture supporting custom extensions
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
