import { FaPhone, FaUserCheck } from "react-icons/fa6";
import { MdRecordVoiceOver, MdSwapCalls, MdFiberManualRecord } from "react-icons/md";

const bars = Array.from({ length: 28 }, (_, i) => 6 + Math.abs(Math.sin(i * 0.7)) * 22);

const VoiceFlowShowcase = () => {
  return (
    <div className="vfs">
      <div className="vfs-flow">
        {/* Card 1: live call */}
        <div className="vfs-card vfs-call">
          <div className="vfs-call-top">
            <span className="vfs-call-avatar"><FaPhone /></span>
            <div>
              <div className="vfs-call-number">+91 98XXX XX188</div>
              <div className="vfs-call-status"><span className="vfs-dot" /> CALLING</div>
            </div>
          </div>
          <div className="vfs-waveform">
            {bars.map((h, i) => (
              <span key={i} className="vfs-bar" style={{ height: `${h}px`, animationDelay: `${i * 0.045}s` }} />
            ))}
          </div>
        </div>

        <div className="vfs-connector" />

        {/* Card 2: AI actions */}
        <div className="vfs-card vfs-actions">
          <div className="vfs-action-row">
            <span className="vfs-action-icon"><MdRecordVoiceOver /></span>
            <span className="vfs-action-label">AI GREETING</span>
            <span className="vfs-badge">ACTIVE</span>
          </div>
          <div className="vfs-action-row">
            <span className="vfs-action-icon"><MdSwapCalls /></span>
            <span className="vfs-action-label">OBJECTION HANDLING</span>
            <span className="vfs-badge">ACTIVE</span>
          </div>
          <div className="vfs-action-row">
            <span className="vfs-action-icon"><MdFiberManualRecord /></span>
            <span className="vfs-action-label">CALL RECORDING</span>
            <span className="vfs-badge">ACTIVE</span>
          </div>
        </div>

        <div className="vfs-connector" />

        {/* Card 3: queue + CRM */}
        <div className="vfs-stack">
          <div className="vfs-card vfs-queue">
            <div className="vfs-queue-row"><span>SALES QUEUE</span><b>24</b></div>
            <div className="vfs-queue-row"><span>SUPPORT QUEUE</span><b>12</b></div>
            <div className="vfs-queue-row"><span>VOICEMAIL</span><b>—</b></div>
          </div>
          <div className="vfs-card vfs-crm">
            <span className="vfs-crm-avatar"><FaUserCheck /></span>
            <div className="vfs-crm-info">
              <div className="vfs-crm-name">Rahul Sharma</div>
              <div className="vfs-crm-row"><span>Plan</span><b>Premium</b></div>
              <div className="vfs-crm-row"><span>Last Interaction</span><b>2h ago</b></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vfs {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto 3.5rem;
          background: #fafaf9;
          border: 1px solid #e7e5e4;
          border-radius: 20px;
          padding: clamp(1.5rem, 4vw, 3rem);
          box-shadow: 0 4px 20px rgba(28, 25, 23, 0.05);
        }

        .vfs-flow {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .vfs-connector {
          flex: 0 0 clamp(20px, 4vw, 48px);
          height: 2px;
          background: repeating-linear-gradient(90deg, #E63D00 0 6px, transparent 6px 12px);
          opacity: 0.5;
        }

        .vfs-card {
          background: #ffffff;
          border: 1px solid #e7e5e4;
          border-radius: 14px;
          padding: 1.1rem 1.2rem;
          box-shadow: 0 2px 10px rgba(28, 25, 23, 0.05);
        }

        .vfs-call { flex: 1 1 0; min-width: 0; }

        .vfs-call-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          min-width: 0;
        }

        .vfs-call-top > div {
          min-width: 0;
        }

        .vfs-call-avatar {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #E63D00, #E66700);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
        }

        .vfs-call-number {
          font-weight: 600;
          font-size: 0.95rem;
          color: #1c1917;
        }

        .vfs-call-status {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.4px;
          color: #E63D00;
        }

        .vfs-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E63D00;
          animation: vfs-blink 1.2s ease-in-out infinite;
        }

        .vfs-waveform {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 32px;
        }

        .vfs-bar {
          flex: 1;
          min-width: 2px;
          background: linear-gradient(180deg, #E63D00, #ffb366);
          border-radius: 2px;
          animation: vfs-wave 1.4s ease-in-out infinite;
          transform-origin: center;
        }

        .vfs-actions { flex: 1.15 1 0; min-width: 0; display: flex; flex-direction: column; gap: 0.75rem; }

        .vfs-action-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .vfs-action-icon {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #fff1eb;
          color: #E63D00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }

        .vfs-action-label {
          flex: 1;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: #44403c;
        }

        .vfs-badge {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          color: #16a34a;
          background: #dcfce7;
          padding: 0.15rem 0.5rem;
          border-radius: 999px;
        }

        .vfs-stack { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 0.9rem; }

        .vfs-queue-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: #57534e;
          padding: 0.3rem 0;
        }

        .vfs-queue-row b { color: #1c1917; }

        .vfs-crm {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .vfs-crm-avatar {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #fff1eb;
          color: #E63D00;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vfs-crm-name {
          font-weight: 600;
          font-size: 0.88rem;
          color: #1c1917;
          margin-bottom: 0.3rem;
        }

        .vfs-crm-row {
          display: flex;
          gap: 0.4rem;
          font-size: 0.72rem;
          color: #78716c;
        }

        .vfs-crm-row b { color: #44403c; }

        @keyframes vfs-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }

        @keyframes vfs-wave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }

        @media (max-width: 860px) {
          .vfs-flow { flex-direction: column; align-items: stretch; }
          .vfs-call, .vfs-actions, .vfs-stack { width: 100%; flex: none; }
          .vfs-connector { width: 2px; height: 24px; flex: none; margin: 0 auto; background: repeating-linear-gradient(180deg, #E63D00 0 6px, transparent 6px 12px); }
        }

        @media (max-width: 400px) {
          .vfs-call-number { font-size: 0.85rem; }
        }
      `}</style>
    </div>
  );
};

export default VoiceFlowShowcase;
