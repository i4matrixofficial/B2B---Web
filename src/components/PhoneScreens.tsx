import { MapPin, Navigation, Clock, User, Home, Calendar, History, ChevronRight, Users, Bell, CheckCircle2, XCircle, AlertCircle, BarChart3, TrendingUp, Shield } from 'lucide-react';

// ─── STAFF APP ───────────────────────────────────────────────────────────────
export function StaffAppScreen() {
  return (
    <div className="h-full flex flex-col bg-[#F8F9FA]" style={{ fontFamily: 'system-ui, sans-serif' }}>

      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-10 pb-2 bg-white">
        <span style={{ fontSize: 11, fontWeight: 600, color: '#1A1A1A' }}>9:41</span>
        <div className="flex items-center gap-1">
          <div style={{ width: 15, height: 8, border: '1.5px solid #1A1A1A', borderRadius: 2, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 1, top: 1, bottom: 1, width: '70%', background: '#1A1A1A', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-5 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p style={{ fontSize: 11, color: '#999', fontWeight: 500 }}>GOOD MORNING</p>
            <p style={{ fontSize: 17, fontWeight: 700, color: '#1A1A1A', marginTop: 2 }}>Dilini Jayawardena</p>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #f97316, #ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User style={{ width: 18, height: 18, color: '#fff' }} />
          </div>
        </div>
      </div>

      {/* Live tracking card */}
      <div className="mx-4 mt-3" style={{ background: '#111', borderRadius: 20, overflow: 'hidden' }}>
        {/* Map */}
        <div style={{ height: 140, position: 'relative', background: '#1a1a2e' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 240 140">
            {/* Grid roads */}
            <line x1="0" y1="70" x2="240" y2="70" stroke="#252540" strokeWidth="8" />
            <line x1="0" y1="30" x2="240" y2="30" stroke="#252540" strokeWidth="5" />
            <line x1="0" y1="110" x2="240" y2="110" stroke="#252540" strokeWidth="5" />
            <line x1="60" y1="0" x2="60" y2="140" stroke="#252540" strokeWidth="6" />
            <line x1="140" y1="0" x2="140" y2="140" stroke="#252540" strokeWidth="6" />
            <line x1="200" y1="0" x2="200" y2="140" stroke="#252540" strokeWidth="4" />
            {/* Route */}
            <path d="M 60 140 L 60 70 L 140 70 L 140 30" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 3" />
            {/* Blocks */}
            <rect x="65" y="35" width="70" height="30" fill="#252550" rx="3" />
            <rect x="145" y="75" width="50" height="30" fill="#252550" rx="3" />
            <rect x="5" y="75" width="50" height="30" fill="#252550" rx="3" />
            {/* Vehicle */}
            <circle cx="60" cy="95" r="10" fill="#f97316" />
            <circle cx="60" cy="95" r="16" fill="#f97316" fillOpacity="0.25" />
            <polygon points="60,88 65,98 55,98" fill="white" />
            {/* Destination pin */}
            <circle cx="140" cy="30" r="7" fill="#fff" />
            <circle cx="140" cy="30" r="4" fill="#f97316" />
          </svg>
          {/* ETA pill */}
          <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', borderRadius: 20, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>3 min away</span>
          </div>
        </div>
        {/* Card info */}
        <div style={{ padding: '12px 14px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: 10, color: '#f97316', fontWeight: 700, letterSpacing: '0.08em' }}>YOUR RIDE</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginTop: 2 }}>Van 07 · WP-CAB-1234</p>
              <p style={{ fontSize: 11, color: '#888', marginTop: 2 }}>Pickup · Kollupitiya Stop 3</p>
            </div>
            <button style={{ background: '#f97316', color: '#fff', border: 'none', borderRadius: 10, padding: '6px 12px', fontSize: 11, fontWeight: 700 }}>
              Track
            </button>
          </div>
        </div>
      </div>

      {/* Today's PIN card */}
      <div className="mx-4 mt-3" style={{ background: '#fff', borderRadius: 16, padding: '12px 14px', border: '1px solid #F0F0F0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 10, color: '#999', fontWeight: 600, letterSpacing: '0.06em' }}>TODAY'S CHECK-IN PIN</p>
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              {['4', '7', '2', '9'].map((d, i) => (
                <div key={i} style={{ width: 28, height: 34, background: '#FFF7ED', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: '#f97316', border: '1px solid rgba(249,115,22,0.2)' }}>
                  {d}
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield style={{ width: 18, height: 18, color: '#f97316' }} />
          </div>
        </div>
      </div>

      {/* Seat info */}
      <div className="mx-4 mt-3" style={{ background: '#fff', borderRadius: 16, padding: '10px 14px', border: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 30, height: 30, background: '#FFF7ED', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 14 }}>💺</span>
          </div>
          <div>
            <p style={{ fontSize: 11, color: '#1A1A1A', fontWeight: 600 }}>Seat 14A · Reserved</p>
            <p style={{ fontSize: 10, color: '#999' }}>Route 7 · 8:15 AM departure</p>
          </div>
        </div>
        <CheckCircle2 style={{ width: 18, height: 18, color: '#22c55e' }} />
      </div>

      {/* Bottom nav */}
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-around', padding: '10px 0 8px', borderTop: '1px solid #F0F0F0', background: '#fff' }}>
        {[
          { icon: Home, label: 'Home', active: true },
          { icon: Calendar, label: 'Bookings', active: false },
          { icon: History, label: 'History', active: false },
          { icon: User, label: 'Profile', active: false },
        ].map(({ icon: Icon, label, active }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <Icon style={{ width: 18, height: 18, color: active ? '#f97316' : '#ccc' }} />
            <span style={{ fontSize: 9, color: active ? '#f97316' : '#ccc', fontWeight: active ? 700 : 400 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── DRIVER APP ──────────────────────────────────────────────────────────────
export function DriverAppScreen() {
  return (
    <div className="h-full flex flex-col" style={{ background: '#0F0F0F', fontFamily: 'system-ui, sans-serif' }}>

      {/* Status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '36px 20px 0' }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>9:41</span>
        <div style={{ width: 15, height: 8, border: '1.5px solid #fff', borderRadius: 2, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 1, top: 1, bottom: 1, width: '80%', background: '#22c55e', borderRadius: 1 }} />
        </div>
      </div>

      {/* Trip header */}
      <div style={{ padding: '12px 20px 16px', borderBottom: '1px solid #1E1E1E' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: 10, color: '#22c55e', fontWeight: 700, letterSpacing: '0.08em' }}>TRIP ACTIVE · ROUTE 7</span>
            </div>
            <p style={{ fontSize: 16, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Turn left onto<br />Galle Road</p>
            <p style={{ fontSize: 11, color: '#666', marginTop: 4 }}>in 200 meters</p>
          </div>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(249,115,22,0.3)' }}>
            <Navigation style={{ width: 20, height: 20, color: '#f97316' }} />
          </div>
        </div>
      </div>

      {/* Navigation map */}
      <div style={{ flex: 1, position: 'relative', background: '#141420' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 260 200">
          {/* Road */}
          <rect x="100" y="0" width="60" height="200" fill="#1E1E2E" />
          {/* Divider dashes */}
          {[0, 30, 60, 90, 120, 150].map(y => (
            <rect key={y} x="128" y={y} width="4" height="18" fill="#2A2A3A" rx="2" />
          ))}
          {/* Sidewalks */}
          <rect x="90" y="0" width="10" height="200" fill="#181828" />
          <rect x="160" y="0" width="10" height="200" fill="#181828" />
          {/* Cross streets */}
          <rect x="0" y="60" width="260" height="30" fill="#1E1E2E" />
          <rect x="0" y="140" width="260" height="25" fill="#1E1E2E" />
          {/* Route highlight */}
          <rect x="104" y="0" width="52" height="200" fill="rgba(249,115,22,0.08)" />
          {/* Turn indicator at intersection */}
          <path d="M 130 180 L 130 60 Q 130 50 120 50 L 80 50" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
          <circle cx="80" cy="50" r="8" fill="#f97316" />
          <polygon points="72,50 80,43 80,57" fill="#fff" />
          {/* Vehicle */}
          <rect x="116" y="155" width="28" height="40" fill="#f97316" rx="6" />
          <rect x="120" y="158" width="20" height="14" fill="rgba(255,255,255,0.3)" rx="3" />
          <circle cx="120" cy="192" r="4" fill="#0F0F0F" />
          <circle cx="136" cy="192" r="4" fill="#0F0F0F" />
          {/* Pulse */}
          <circle cx="130" cy="175" r="22" fill="rgba(249,115,22,0.1)" />
        </svg>

        {/* Speed badge */}
        <div style={{ position: 'absolute', top: 10, left: 12, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: '6px 10px', textAlign: 'center' }}>
          <p style={{ fontSize: 18, fontWeight: 900, color: '#fff', lineHeight: 1 }}>42</p>
          <p style={{ fontSize: 8, color: '#888', letterSpacing: '0.06em' }}>KM/H</p>
        </div>

        {/* Next stop badge */}
        <div style={{ position: 'absolute', top: 10, right: 12, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: '6px 10px' }}>
          <p style={{ fontSize: 8, color: '#888', letterSpacing: '0.06em' }}>NEXT STOP</p>
          <p style={{ fontSize: 11, color: '#f97316', fontWeight: 700 }}>Kollupitiya</p>
        </div>
      </div>

      {/* Passenger panel */}
      <div style={{ background: '#1A1A1A', borderRadius: '24px 24px 0 0', padding: '14px 18px 16px' }}>
        <div style={{ width: 36, height: 4, background: '#333', borderRadius: 2, margin: '0 auto 14px' }} />

        {/* Progress */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Users style={{ width: 15, height: 15, color: '#f97316' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Passengers</span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 800, color: '#f97316' }}>8 / 12</span>
        </div>
        <div style={{ height: 6, background: '#2A2A2A', borderRadius: 3, overflow: 'hidden', marginBottom: 12 }}>
          <div style={{ height: '100%', width: '66%', background: 'linear-gradient(to right, #f97316, #fb923c)', borderRadius: 3 }} />
        </div>

        {/* Passenger list preview */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          {['DK', 'AS', 'RM', 'NP'].map((initials, i) => (
            <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: i < 3 ? 'rgba(249,115,22,0.2)' : '#2A2A2A', border: i < 3 ? '1.5px solid rgba(249,115,22,0.4)' : '1.5px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: i < 3 ? '#f97316' : '#666' }}>{initials}</span>
            </div>
          ))}
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#2A2A2A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 9, color: '#666', fontWeight: 600 }}>+4</span>
          </div>
        </div>

        {/* Next pickup */}
        <div style={{ background: '#222', borderRadius: 12, padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <MapPin style={{ width: 14, height: 14, color: '#f97316' }} />
            <div>
              <p style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>Sarah M. · Kollupitiya</p>
              <p style={{ fontSize: 10, color: '#666' }}>~2 min · Seat 06B</p>
            </div>
          </div>
          <ChevronRight style={{ width: 14, height: 14, color: '#555' }} />
        </div>
      </div>
    </div>
  );
}

// ─── COMPANY DASHBOARD ────────────────────────────────────────────────────────
export function CompanyDashboardScreen() {
  return (
    <div className="h-full flex flex-col bg-white" style={{ fontFamily: 'system-ui, sans-serif' }}>

      {/* Status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '36px 20px 0' }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#1A1A1A' }}>9:41</span>
        <div style={{ width: 15, height: 8, border: '1.5px solid #1A1A1A', borderRadius: 2, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 1, top: 1, bottom: 1, width: '90%', background: '#1A1A1A', borderRadius: 1 }} />
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: '10px 18px 12px', borderBottom: '1px solid #F5F5F5' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 10, color: '#999', fontWeight: 600, letterSpacing: '0.06em' }}>FLEET OVERVIEW</p>
            <p style={{ fontSize: 15, fontWeight: 800, color: '#1A1A1A', marginTop: 2 }}>Monday, May 27</p>
          </div>
          <div style={{ position: 'relative' }}>
            <Bell style={{ width: 20, height: 20, color: '#1A1A1A' }} />
            <div style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, background: '#f97316', borderRadius: '50%', border: '1.5px solid #fff' }} />
          </div>
        </div>
      </div>

      {/* Stat pills */}
      <div style={{ padding: '12px 18px', display: 'flex', gap: 8 }}>
        {[
          { value: '12', label: 'Active', dot: '#22c55e', bg: '#F0FDF4', text: '#166534' },
          { value: '2', label: 'Idle', dot: '#f59e0b', bg: '#FFFBEB', text: '#92400e' },
          { value: '1', label: 'Offline', dot: '#ef4444', bg: '#FEF2F2', text: '#991b1b' },
        ].map((s) => (
          <div key={s.label} style={{ flex: 1, background: s.bg, borderRadius: 12, padding: '8px 6px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 2 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.dot }} />
              <span style={{ fontSize: 16, fontWeight: 800, color: s.text }}>{s.value}</span>
            </div>
            <p style={{ fontSize: 9, color: s.text, opacity: 0.7, fontWeight: 600, letterSpacing: '0.04em' }}>{s.label.toUpperCase()}</p>
          </div>
        ))}
      </div>

      {/* Mini map */}
      <div style={{ margin: '0 18px', borderRadius: 16, overflow: 'hidden', height: 110, position: 'relative', background: '#1a1a2e' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 220 110">
          <line x1="0" y1="55" x2="220" y2="55" stroke="#252540" strokeWidth="10" />
          <line x1="0" y1="20" x2="220" y2="20" stroke="#252540" strokeWidth="6" />
          <line x1="0" y1="90" x2="220" y2="90" stroke="#252540" strokeWidth="6" />
          <line x1="55" y1="0" x2="55" y2="110" stroke="#252540" strokeWidth="8" />
          <line x1="130" y1="0" x2="130" y2="110" stroke="#252540" strokeWidth="8" />
          <line x1="190" y1="0" x2="190" y2="110" stroke="#252540" strokeWidth="5" />
          {/* Vehicles */}
          <circle cx="75" cy="42" r="7" fill="#f97316" />
          <circle cx="75" cy="42" r="12" fill="#f97316" fillOpacity="0.2" />
          <circle cx="155" cy="72" r="7" fill="#f97316" />
          <circle cx="155" cy="72" r="12" fill="#f97316" fillOpacity="0.2" />
          <circle cx="30" cy="20" r="5" fill="#f97316" fillOpacity="0.6" />
          <circle cx="200" cy="55" r="5" fill="#f97316" fillOpacity="0.4" />
        </svg>
        <div style={{ position: 'absolute', top: 8, left: 10, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', borderRadius: 6, padding: '2px 8px' }}>
          <span style={{ fontSize: 9, color: '#f97316', fontWeight: 700 }}>LIVE MAP</span>
        </div>
      </div>

      {/* Routes */}
      <div style={{ padding: '12px 18px 0' }}>
        <p style={{ fontSize: 9, color: '#999', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 8 }}>TODAY'S ROUTES</p>
        {[
          { name: 'Route 7 · Colombo Fort', progress: 80, stops: '8 stops', status: 'active' },
          { name: 'Route 3 · Battaramulla', progress: 45, stops: '6 stops', status: 'active' },
          { name: 'Route 12 · Dehiwala', progress: 0, stops: '5 stops', status: 'pending' },
        ].map((route, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 10, marginBottom: 10, borderBottom: i < 2 ? '1px solid #F5F5F5' : 'none' }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: route.status === 'active' ? '#FFF7ED' : '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {route.status === 'active'
                ? <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#f97316' }} />
                : <Clock style={{ width: 12, height: 12, color: '#ccc' }} />
              }
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: '#1A1A1A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{route.name}</p>
                <span style={{ fontSize: 9, color: route.status === 'active' ? '#f97316' : '#bbb', fontWeight: 700, flexShrink: 0, marginLeft: 6 }}>{route.stops}</span>
              </div>
              <div style={{ height: 4, background: '#F0F0F0', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${route.progress}%`, background: route.progress > 0 ? 'linear-gradient(to right, #f97316, #fb923c)' : 'transparent', borderRadius: 2 }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom summary bar */}
      <div style={{ marginTop: 'auto', background: '#FFF7ED', borderTop: '1px solid rgba(249,115,22,0.15)', padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <TrendingUp style={{ width: 13, height: 13, color: '#f97316' }} />
          <span style={{ fontSize: 10, color: '#f97316', fontWeight: 700 }}>94% On Time Today</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Users style={{ width: 13, height: 13, color: '#666' }} />
          <span style={{ fontSize: 10, color: '#666', fontWeight: 600 }}>142 / 150 checked in</span>
        </div>
      </div>
    </div>
  );
}

// ─── DOWNLOAD SECTION VARIANTS (kept for AppDownloadSection) ─────────────────
export function StaffAppDownloadScreen() {
  return <StaffAppScreen />;
}

export function DriverAppDownloadScreen() {
  return <DriverAppScreen />;
}