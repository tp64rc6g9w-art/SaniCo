import Link from 'next/link';

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">

          <div>
            <div className="footer-brand">Sani<span>Co</span> Business Solutions</div>
            <p className="footer-tag">
              The operator&rsquo;s blueprint for building a contract-based corporate cleaning business
              with recurring monthly revenue.
            </p>
          </div>

          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              <li><Link href="#how">How It Works</Link></li>
              <li><Link href="#whats-inside">What&rsquo;s Inside</Link></li>
              <li><Link href="#why-now">The Opportunity</Link></li>
              <li><Link href="#offer">Get the System</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Support</h5>
            <ul>
              <li><a href="mailto:info@sanicogroup.com">info@sanicogroup.com</a></li>
              <li><a href="https://sanicogroup.com" target="_blank" rel="noopener">sanicogroup.com</a></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-base">
          <div>© {new Date().getFullYear()} SaniCo Business Solutions. All rights reserved.</div>
          <div className="footer-disclaim">
            Educational content based on industry averages. Individual results vary based on market,
            execution, and business conditions. Not financial or legal advice.
          </div>
        </div>

      </div>
    </footer>
  );
}
