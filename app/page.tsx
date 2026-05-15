export default function Home() {
  const faqs = [
    {
      q: 'How does it connect to my bank accounts?',
      a: 'We use Plaid, the industry-standard bank connection layer trusted by thousands of fintechs. Your credentials never touch our servers.'
    },
    {
      q: 'How accurate are the runway projections?',
      a: 'Projections use your last 90 days of actual spend patterns, weighted by category trends, giving you a realistic forward-looking estimate — not just a simple average.'
    },
    {
      q: 'What happens when I hit a danger zone?',
      a: 'You get instant Slack and email alerts when projected runway drops below your configured threshold (default: 3 months), so you can act before it becomes a crisis.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Startup Finance Intelligence
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Know Your Runway<br />
          <span className="text-[#58a6ff]">Before It Runs Out</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your bank accounts and credit cards. Get real-time burn rate calculations, runway projections, and danger-zone alerts — all in one dashboard built for founders.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200"
        >
          Start Tracking — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees. Works in minutes.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-2xl p-8 bg-[#161b22]">
          {[['$2.4M+', 'Burn tracked monthly'], ['340+', 'Founders protected'], ['3 min', 'Avg setup time']].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22] text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#58a6ff] mb-2">All-Inclusive Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to stay ahead of your burn</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited bank & card connections via Plaid',
              'Real-time burn rate dashboard',
              'AI-powered expense categorization',
              '12-month runway projections',
              'Slack + email danger-zone alerts',
              'Historical spend pattern analysis',
              'CSV export & investor-ready reports'
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-xl transition-colors duration-200 text-center"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">14-day money-back guarantee</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Runway Tracker. Built for founders who move fast.
      </footer>
    </main>
  )
}
