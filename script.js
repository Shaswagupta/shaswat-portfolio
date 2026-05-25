const CONFIG = {
  // Web3Forms Access Key for silent background email submission.
  // Get a free key at https://web3forms.com/ and paste it below:
  WEB3FORMS_ACCESS_KEY: 'e795c05e-f999-456f-8cb6-ca323e2d6f88'
};

/* ═══════════════ PARTICLE SYSTEM ═══════════════ */
(function(){
  const canvas=document.getElementById('particles');
  const ctx=canvas.getContext('2d');
  let w,h,particles=[];
  function resize(){w=canvas.width=window.innerWidth;h=canvas.height=window.innerHeight}
  window.addEventListener('resize',resize);resize();
  class Particle{
    constructor(init = false){
      this.init = init;
      this.reset();
    }
    reset(){
      this.x=Math.random()*w;
      this.y=this.init ? Math.random()*h : h + Math.random()*30;
      this.size=Math.random()*3.5 + 1.2;
      this.speedX=(Math.random()-.5)*.04;
      this.speedY=-(Math.random()*.08 + .03); // Slow elegant rise
      this.opacity=Math.random()*.12 + .03;
      this.init = false;
    }
    update(){
      this.x+=this.speedX;
      this.y+=this.speedY;
      if(this.x<0||this.x>w||this.y<0)this.reset();
    }
    draw(){
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
      ctx.fillStyle='rgba(223, 197, 159, '+this.opacity+')'; // Champagne Gold Bokeh
      ctx.fill();
    }
  }
  for(let i=0;i<55;i++)particles.push(new Particle(true));
  function animate(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{p.update();p.draw()});
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ═══════════════ TEXT FADE TRANSITION ═══════════════ */
(function(){
  const el=document.getElementById('typingText');
  if(!el) return;
  const phrases=['Computer Science Engineer','Full-Stack Developer','Creative Problem Solver','Software Artisan'];
  let pi=0;
  el.textContent = phrases[pi];
  el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  el.style.opacity = '1';
  
  function cycle(){
    setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => {
        pi = (pi + 1) % phrases.length;
        el.textContent = phrases[pi];
        el.style.opacity = '1';
        cycle();
      }, 800);
    }, 3000);
  }
  cycle();
})();

/* ═══════════════ NAVBAR SCROLL ═══════════════ */
(function(){
  const nav=document.getElementById('navbar');
  const links=document.querySelectorAll('.nav-link');
  const sections=document.querySelectorAll('.section');
  window.addEventListener('scroll',function(){
    nav.classList.toggle('scrolled',window.scrollY>50);
    let current='';
    sections.forEach(s=>{if(window.scrollY>=s.offsetTop-200)current=s.getAttribute('id')});
    links.forEach(l=>{l.classList.toggle('active',l.getAttribute('href')==='#'+current)});
  });
})();

/* ═══════════════ HAMBURGER MENU ═══════════════ */
(function(){
  const btn=document.getElementById('hamburger');
  const menu=document.getElementById('navLinks');
  btn.addEventListener('click',function(){btn.classList.toggle('active');menu.classList.toggle('open')});
  document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',function(){btn.classList.remove('active');menu.classList.remove('open')}));
})();

/* ═══════════════ SCROLL ANIMATIONS ═══════════════ */
(function(){
  const observer=new IntersectionObserver(function(entries){entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.15});
  document.querySelectorAll('[data-anim]').forEach(el=>observer.observe(el));
})();

/* ═══════════════ SKILL BAR ANIMATION ═══════════════ */
(function(){
  const observer=new IntersectionObserver(function(entries){entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.skill-fill').forEach(bar=>{const level=bar.getAttribute('data-level');bar.style.setProperty('--level',level+'%');bar.classList.add('animated');bar.style.width=level+'%'})}})},{threshold:.3});
  document.querySelectorAll('.skill-card').forEach(c=>observer.observe(c));
})();

/* ═══════════════ CONTACT FORM & DATA STORAGE ═══════════════ */
const DataStore = {
  KEY: 'portfolio_submissions',
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || [];
    } catch(e) {
      return [];
    }
  },
  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },
  add(submission) {
    const list = this.getAll();
    list.unshift(submission); // newest first
    this.save(list);
  },
  delete(id) {
    let list = this.getAll();
    list = list.filter(item => item.id !== id);
    this.save(list);
  },
  clear() {
    localStorage.removeItem(this.KEY);
  },
  markRead(id, status = true) {
    const list = this.getAll();
    const item = list.find(item => item.id === id);
    if (item) {
      item.read = status;
      this.save(list);
    }
  }
};

(function(){
  const form=document.getElementById('contactForm');
  const success=document.getElementById('formSuccess');
  form.addEventListener('submit', async function(e){
    e.preventDefault();
    const name=document.getElementById('nameInput').value.trim();
    const email=document.getElementById('emailInput').value.trim();
    const subject=document.getElementById('subjectInput').value.trim();
    const message=document.getElementById('messageInput').value.trim();
    if(!name||!email||!subject||!message)return;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){alert('Please enter a valid email');return}
    
    // Save to local storage
    const newSubmission = {
      id: 'sub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      name: name,
      email: email,
      subject: subject,
      message: message,
      date: new Date().toISOString(),
      read: false
    };
    DataStore.add(newSubmission);
    
    // Send email via Web3Forms API if key is present, fallback to mailto client
    if (CONFIG.WEB3FORMS_ACCESS_KEY && CONFIG.WEB3FORMS_ACCESS_KEY !== 'YOUR_ACCESS_KEY_HERE') {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: CONFIG.WEB3FORMS_ACCESS_KEY,
            name: name,
            email: email,
            subject: subject,
            message: message,
            from_name: name + " (via Portfolio)"
          })
        });
        const result = await response.json();
        if (!result.success) {
          console.error("Web3Forms submission error:", result.message);
        }
      } catch (err) {
        console.error("Failed to post background form submission:", err);
      }
    } else {
      // Fallback: Generate pre-filled mailto URL and redirect visitor to their email client
      const mailtoUrl = `mailto:shaswagupta@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Shaswat,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nSent via Portfolio Contact Form.`)}`;
      window.location.href = mailtoUrl;
    }
    
    success.classList.add('show');
    form.reset();
    setTimeout(function(){success.classList.remove('show')},4000);
    
    // Refresh admin table if open
    if (document.getElementById('adminModal').classList.contains('open')) {
      window.renderAdminData();
    }
  });
})();

/* ═══════════════ ADMIN DASHBOARD LOGIC ═══════════════ */
const AdminDashboard = {
  selectedId: null,
  init() {
    // Open hooks
    const trigger = document.getElementById('adminTrigger');
    const closeBtn = document.getElementById('closeAdminBtn');
    const modal = document.getElementById('adminModal');
    const logo = document.getElementById('navLogo');
    
    let logoClicks = 0;
    let logoClickTimer;
    logo.addEventListener('click', (e) => {
      logoClicks++;
      clearTimeout(logoClickTimer);
      logoClickTimer = setTimeout(() => { logoClicks = 0; }, 2000);
      if (logoClicks >= 5) {
        e.preventDefault();
        logoClicks = 0;
        this.open();
      }
    });

    trigger.addEventListener('click', () => this.open());
    closeBtn.addEventListener('click', () => this.close());
    
    // Keyboard listener for typing "admin"
    let typed = '';
    window.addEventListener('keydown', (e) => {
      typed += e.key.toLowerCase();
      if (typed.length > 5) typed = typed.substring(typed.length - 5);
      if (typed === 'admin') {
        typed = '';
        this.open();
      }
    });

    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('admin')) {
      this.open();
    }

    // Modal listeners
    document.getElementById('adminSearchInput').addEventListener('input', () => this.render());
    document.getElementById('adminStatusFilter').addEventListener('change', () => this.render());
    document.getElementById('clearAllBtn').addEventListener('click', () => this.clearAll());
    document.getElementById('exportCsvBtn').addEventListener('click', () => this.exportCSV());

    // Detail Modal Close
    document.getElementById('closeDetailBtn').addEventListener('click', () => this.closeDetail());
    document.getElementById('markReadBtn').addEventListener('click', () => this.toggleReadStatus());
    document.getElementById('deleteDetailBtn').addEventListener('click', () => this.deleteDetail());
  },

  open() {
    document.getElementById('adminModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    this.render();
  },

  close() {
    document.getElementById('adminModal').classList.remove('open');
    document.body.style.overflow = '';
  },

  render() {
    const list = DataStore.getAll();
    const query = document.getElementById('adminSearchInput').value.toLowerCase().trim();
    const statusFilter = document.getElementById('adminStatusFilter').value;

    // Filter
    const filtered = list.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(query) || 
                            item.email.toLowerCase().includes(query) || 
                            item.subject.toLowerCase().includes(query) || 
                            item.message.toLowerCase().includes(query);
      const matchesStatus = statusFilter === 'all' || 
                            (statusFilter === 'unread' && !item.read) || 
                            (statusFilter === 'read' && item.read);
      return matchesSearch && matchesStatus;
    });

    // Stats
    const totalCount = list.length;
    const unreadCount = list.filter(i => !i.read).length;
    const latestDate = list.length > 0 ? new Date(list[0].date).toLocaleDateString() : '-';

    document.getElementById('statTotal').textContent = totalCount;
    document.getElementById('statUnread').textContent = unreadCount;
    document.getElementById('statLatest').textContent = latestDate;

    // Table Body
    const tbody = document.getElementById('adminTableBody');
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-dim); padding: 40px 0;">No matching submissions found.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(item => {
      const formattedDate = new Date(item.date).toLocaleString([], {month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
      const statusClass = item.read ? 'read' : 'unread';
      const rowClass = item.read ? '' : 'unread';
      return `
        <tr class="${rowClass}" data-id="${item.id}">
          <td>${formattedDate}</td>
          <td><strong>${this.escapeHTML(item.name)}</strong></td>
          <td><a href="mailto:${item.email}" style="color: var(--primary); text-decoration: none;">${this.escapeHTML(item.email)}</a></td>
          <td>${this.escapeHTML(item.subject)}</td>
          <td style="cursor: pointer;" onclick="AdminDashboard.viewDetail('${item.id}')">${this.escapeHTML(item.message)}</td>
          <td><span class="status-chip ${statusClass}">${item.read ? 'Read' : 'Unread'}</span></td>
          <td>
            <div class="action-btn-group">
              <button class="action-icon-btn" onclick="AdminDashboard.viewDetail('${item.id}')" title="View details">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
              <button class="action-icon-btn" onclick="AdminDashboard.toggleReadRow('${item.id}')" title="Toggle read/unread">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </button>
              <button class="action-icon-btn delete" onclick="AdminDashboard.deleteItem('${item.id}')" title="Delete submission">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  },

  viewDetail(id) {
    const list = DataStore.getAll();
    const item = list.find(i => i.id === id);
    if (!item) return;

    this.selectedId = id;
    
    // Automatically mark as read
    if (!item.read) {
      DataStore.markRead(id, true);
      this.render();
    }

    document.getElementById('detailSubject').textContent = item.subject || 'No Subject';
    document.getElementById('detailSender').innerHTML = `<strong>${this.escapeHTML(item.name)}</strong> (${this.escapeHTML(item.email)})`;
    document.getElementById('detailDate').textContent = new Date(item.date).toLocaleString();
    document.getElementById('detailMessage').textContent = item.message;
    
    document.getElementById('markReadBtn').textContent = 'Mark as Unread';
    document.getElementById('markReadBtn').style.background = 'rgba(255, 255, 255, 0.05)';
    document.getElementById('markReadBtn').style.border = '1px solid rgba(255, 255, 255, 0.1)';
    document.getElementById('markReadBtn').style.color = 'var(--text)';

    document.getElementById('detailModal').classList.add('open');
  },

  closeDetail() {
    document.getElementById('detailModal').classList.remove('open');
    this.selectedId = null;
  },

  toggleReadStatus() {
    if (!this.selectedId) return;
    const list = DataStore.getAll();
    const item = list.find(i => i.id === this.selectedId);
    if (item) {
      DataStore.markRead(this.selectedId, !item.read);
      this.render();
      this.closeDetail();
    }
  },

  toggleReadRow(id) {
    const list = DataStore.getAll();
    const item = list.find(i => i.id === id);
    if (item) {
      DataStore.markRead(id, !item.read);
      this.render();
    }
  },

  deleteItem(id) {
    if (confirm('Are you sure you want to delete this message?')) {
      DataStore.delete(id);
      this.render();
    }
  },

  deleteDetail() {
    if (this.selectedId && confirm('Are you sure you want to delete this message?')) {
      DataStore.delete(this.selectedId);
      this.closeDetail();
      this.render();
    }
  },

  clearAll() {
    if (confirm('WARNING: Are you sure you want to delete ALL messages? This cannot be undone.')) {
      DataStore.clear();
      this.render();
    }
  },

  exportCSV() {
    const list = DataStore.getAll();
    if (list.length === 0) {
      alert('No data to export.');
      return;
    }

    const headers = ['Date', 'Name', 'Email', 'Subject', 'Message', 'Status'];
    const rows = list.map(item => [
      new Date(item.date).toISOString(),
      item.name,
      item.email,
      item.subject,
      item.message,
      item.read ? 'Read' : 'Unread'
    ]);

    let csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `portfolio_submissions_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
};

// Expose render callback globally so contact form can trigger it
window.renderAdminData = () => AdminDashboard.render();

// Initialize Admin
document.addEventListener('DOMContentLoaded', () => {
  AdminDashboard.init();
});

/* ═══════════════ SMOOTH SCROLL ═══════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    try {
      const target=document.querySelector(href);
      if(target)target.scrollIntoView({behavior:'smooth'});
    } catch(err) {
      console.error('Smooth scroll error:', err);
    }
  });
});

/* ═══════════════ CUSTOM CURSOR ANIMATION ═══════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorOutline = document.querySelector('.custom-cursor-outline');
  
  if (cursorDot && cursorOutline) {
    let targetX = 0, targetY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;
    let isVisible = false;
    
    const LERP_DOT = 0.35;
    const LERP_OUTLINE = 0.12;
    
    window.addEventListener('mousemove', function(e) {
      targetX = e.clientX;
      targetY = e.clientY;
      
      if (!isVisible) {
        // Snaps positions instantly on first move to prevent starting from top-left (0,0)
        dotX = targetX;
        dotY = targetY;
        outlineX = targetX;
        outlineY = targetY;
        
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
        isVisible = true;
      }
    });
    
    document.addEventListener('mouseleave', function() {
      cursorDot.style.opacity = '0';
      cursorOutline.style.opacity = '0';
      isVisible = false;
    });
    
    // Inertia physics animation loop using LERP
    function renderCursor() {
      if (isVisible) {
        // LERP Math: current += (target - current) * speedFactor
        dotX += (targetX - dotX) * LERP_DOT;
        dotY += (targetY - dotY) * LERP_DOT;
        
        outlineX += (targetX - outlineX) * LERP_OUTLINE;
        outlineY += (targetY - outlineY) * LERP_OUTLINE;
        
        // Push transforms to GPU compositor thread
        cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
        cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);
    
    // Scale outline and shrink dot on interactive hovers
    const hoverSelectors = 'a, button, .glass-card, input, textarea, select, .hamburger, .social-link';
    const hoverElements = document.querySelectorAll(hoverSelectors);
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', function() {
        cursorDot.classList.add('hovered');
        cursorOutline.classList.add('hovered');
      });
      el.addEventListener('mouseleave', function() {
        cursorDot.classList.remove('hovered');
        cursorOutline.classList.remove('hovered');
      });
    });
  }
});
