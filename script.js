const CONFIG = {
  // Web3Forms Access Key for silent background email submission.
  WEB3FORMS_ACCESS_KEY: 'e795c05e-f999-456f-8cb6-ca323e2d6f88',
  ADMIN_PASSCODE: 'admin',
  // Optional: EmailJS configuration for free confirmation auto-reply to senders.
  EMAILJS_SERVICE_ID: 'service_wvadgum',
  EMAILJS_TEMPLATE_ID: 'template_ujxpbls',
  EMAILJS_PUBLIC_KEY: 'GuXb5UGvY4zXFFm1I'
};

// Initialize EmailJS if credentials are provided
if (typeof emailjs !== 'undefined' && CONFIG.EMAILJS_PUBLIC_KEY && CONFIG.EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
  emailjs.init({
    publicKey: CONFIG.EMAILJS_PUBLIC_KEY,
  });
}

/* ═══════════════ PROJECT CASE STUDIES DATABASE ═══════════════ */
const caseStudies = {
  'bank-management': {
    title: 'Bank Management System',
    role: 'Lead C++ Developer',
    timeline: '4 Weeks',
    github: 'https://github.com/Shaswagupta',
    demo: '#',
    techStack: ['C++', 'Object-Oriented Programming (OOP)', 'File I/O', 'Data Persistence'],
    overview: 'A robust console-based banking application designed to handle critical operations like account creation, secure deposits/withdrawals, balance inquiries, and account updates. Built with C++ to explore systems-level performance, structured design patterns, and reliability.',
    problem: 'Traditional console management projects often rely on volatile memory, losing all data upon execution exit. The core challenge was implementing a lightweight, performant, and secure file-based storage format that acts as a relational database wrapper without modern third-party database dependencies.',
    solution: 'Designed a clean object-oriented architecture leveraging C++ file streams (fstream) to serialize and deserialize class structures. Implemented safety features like transaction logs and dynamic file buffering to protect data integrity during write failures.',
    features: [
      'Secure multi-user authentication with masked input routines.',
      'Dynamic ledger generation with complete transaction history support.',
      'Efficient O(1) account queries using file pointer offset calculation.',
      'Strict object-oriented validation preventing overdrafts and boundary violations.'
    ],
    challenges: 'Handling simultaneous file reads and writes safely. C++ file pointers can easily get corrupted if data offsets are miscalculated. Resolved by enforcing fixed-length records and implementing file lock validation rules.',
    learnings: 'Mastered file stream manipulation, pointer arithmetic, memory layout of C++ classes, and the importance of structured error handling in system programs.',
    achievement: 'Implemented O(1) constant-time direct record lookup using block serialization math.',
    image: 'img_bank.png',
    images: ['img_bank.png']
  },
  'crop-disease': {
    title: 'Crop Disease Detector',
    role: 'ML Engineer & Developer',
    timeline: '6 Weeks',
    github: 'https://github.com/Shaswagupta',
    demo: '#',
    techStack: ['Python', 'TensorFlow', 'Convolutional Neural Networks (CNN)', 'OpenCV', 'Streamlit'],
    overview: 'A high-performance machine learning system built to classify crop diseases in real-time. By leveraging computer vision and deep learning models, the app helps farmers identify plant abnormalities and suggests treatment plans.',
    problem: 'Smallholder farmers lose significant percentages of their yield due to late detection of crop diseases. Existing cloud solutions require constant high-speed internet connections, which is rare in remote agricultural areas.',
    solution: 'Trained a localized deep Convolutional Neural Network (CNN) using the PlantVillage dataset. Implemented model optimization techniques like float16 quantization to shrink the memory footprint to under 45MB, allowing edge deployment.',
    features: [
      'Real-time camera classification with optimized preprocessing.',
      'Support for 38 distinct crop-disease classes across 14 crop species.',
      'Actionable remedy output with links to eco-friendly treatment procedures.',
      'Offline mode support for remote deployment without internet access.'
    ],
    challenges: 'Preventing model overfitting while training on visual datasets with variable lighting conditions. Addressed by applying extensive data augmentation techniques (rotation, zoom, horizontal flips) and adding dropout regularization layers.',
    learnings: 'Acquired deep understanding of CNN feature extraction, model inference optimization, learning rate schedulers, and Streamlit dashboard design.',
    achievement: 'Achieved 95.8% validation accuracy while maintaining sub-100ms inference time on standard CPUs.',
    image: 'img_crop.png',
    images: ['img_crop.png']
  },
  'ecommerce': {
    title: 'E-Commerce Platform',
    role: 'Full-Stack Developer',
    timeline: '8 Weeks',
    github: 'https://github.com/Shaswagupta',
    demo: '#',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'JWT Authentication'],
    overview: 'An editorial-grade digital marketplace designed for modern retail. Features a responsive catalog, advanced multi-stage filtering, dynamic shopping cart logic, secure user profiles, and seamless credit card processing.',
    problem: 'Many custom e-commerce engines suffer from database bottlenecks during checkout spikes, along with security vulnerabilities in session-based cart states and token storage.',
    solution: 'Built a stateless, RESTful MERN stack architecture with JWTs stored in secure HTTP-only cookies. Implemented Stripe Webhooks to guarantee order creation only after successful payment authorization, bypassing front-end reliability issues.',
    features: [
      'High-performance search engine with autocomplete and category-based tagging.',
      'Dynamic real-time cart state syncing across multiple client tabs.',
      'Robust checkout pipeline integrated with secure Stripe APIs.',
      'Administrative metrics panel tracking total sales, status updates, and user records.'
    ],
    challenges: 'Preventing duplicate orders during concurrent API calls during high-traffic intervals. Solved by implementing optimistic locking on inventory counts in MongoDB and checking transaction status before executing credit charges.',
    learnings: 'Gained proficiency in secure cookie session handling, webhooks integration, database modeling with Mongoose, and CSS-based responsive layout optimization.',
    achievement: 'Designed a secure checkout pipeline with Stripe webhooks protecting orders from frontend manipulation.',
    image: 'img_ecommerce.png',
    images: ['img_ecommerce.png']
  },
  'movie-booking': {
    title: 'Movie Ticket Booking',
    role: 'DSA Specialist & Developer',
    timeline: '5 Weeks',
    github: 'https://github.com/Shaswagupta/movie-ticket-booking-system',
    demo: 'https://onlinegdb.com/ASSIbLcIg',
    techStack: ['C++', 'Data Structures (DSA)', 'Algorithms', 'Matrix Manipulation'],
    overview: 'A high-performance command-line seat booking and scheduling system. Utilizes advanced algorithms and custom data structures to optimize room layout queries, ticket pricing, and timetable planning.',
    problem: 'Dynamic seat reservation systems require low-latency verification to prevent double-booking issues under high concurrency, which can quickly degrade database performance.',
    solution: 'Created a custom matrix layout in C++ utilizing bit-vector representations for seats. This allows O(1) constant-time lookup and update operations per reservation, minimizing processor instruction cycles.',
    features: [
      'Interactive seat selection matrix outputted cleanly in console.',
      'Efficient O(log N) showtime lookup using balanced search trees.',
      'Custom queue scheduling sorting events by popularity and runtime.',
      'System diagnostics reports highlighting seat occupancy and total revenue.'
    ],
    challenges: 'Preventing memory leaks while handling large collections of showtime nodes dynamically. Addressed by utilizing C++ smart pointers (std::unique_ptr and std::shared_ptr) to ensure robust RAII memory management.',
    learnings: 'Solidified knowledge of algorithmic time complexity, bit-level manipulations, memory optimization, and custom container designs in C++.',
    achievement: 'Achieved O(1) seat validation lookup using bitmask arrays.',
    image: 'img_movie.png',
    images: ['img_movie.png']
  },
  'plant-disease': {
    title: 'Plant Disease Classification',
    role: 'Deep Learning Specialist',
    timeline: '6 Weeks',
    github: 'https://github.com/Shaswagupta',
    demo: '#',
    techStack: ['TensorFlow', 'Keras', 'Python', 'Transfer Learning', 'ResNet50', 'Matplotlib'],
    overview: 'An advanced computer vision system designed to classify diseases in crops using state-of-the-art Deep Convolutional Neural Networks. Built on top of pre-trained architectures for optimal accuracy.',
    problem: 'Training deep models from scratch requires enormous datasets and weeks of compute time. Small datasets often lead to overfitting and poor generalization in real-world environments.',
    solution: 'Utilized Transfer Learning by taking a ResNet50 model pre-trained on ImageNet. Replaced the top layers with custom dense blocks, freezing core convolutional weights, and fine-tuning the model using a low learning rate.',
    features: [
      'Leverages pre-trained ResNet50 weights for quick learning convergence.',
      'Detailed training metrics output highlighting accuracy curves and confusion matrices.',
      'Interactive predictions page with image uploading capabilities.',
      'Automatic feature activation mapping showcasing model focus areas.'
    ],
    challenges: 'Fine-tuning deeper layers without destroying general features already learned by ResNet50. Solved by implementing a custom training scheduler that progressively unfroze layers as validation loss converged.',
    learnings: 'Acquired hands-on experience in transfer learning strategies, custom layer design in Keras, activation visualization, and hyperparameter tuning.',
    achievement: 'Tuned ResNet50 to achieve 96.5% categorization accuracy in under 15 epochs.',
    image: 'img_plant.png',
    images: ['img_plant.png']
  },
  'data-visualization': {
    title: 'Data Visualization Dashboard',
    role: 'Front-End Developer',
    timeline: '4 Weeks',
    github: 'https://github.com/Shaswagupta',
    demo: '#',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'D3.js', 'REST API', 'JSON'],
    overview: 'An interactive analytical platform designed to present complex dataset parameters. Incorporates interactive charts, real-time filters, animations, and clean, high-performance rendering.',
    problem: 'Standard charting libraries struggle to render large, streaming datasets in real-time, resulting in UI freezes and poor user experience.',
    solution: 'Utilized raw SVG bindings in D3.js and virtual container groupings. Implemented data throttling algorithms in JS to update graph coordinates in batches, maintaining a steady 60 FPS refresh rate.',
    features: [
      'Dynamic bar, line, scatter, and pie charts updated in real-time.',
      'Comprehensive multi-parameter sorting and filtering pipeline.',
      'Responsive layout scaling charts to match current screen viewport dimensions.',
      'Custom micro-animations rendering transition states smoothly.'
    ],
    challenges: 'Recalculating chart bounds on dynamic window resizing without causing rendering delays. Solved by implementing debounce logic and utilizing CSS viewBox viewport configuration.',
    learnings: 'Mastered data binding concepts in D3, coordinate math, vector scaling, SVG paths, and JavaScript performance profiling tools.',
    achievement: 'Rendered over 5,000 active data points smoothly at 60 FPS using D3 dynamic updates.',
    image: 'img_dashboard.png',
    images: ['img_dashboard.png']
  },
  'skillsurfer': {
    title: 'SkillSurfer Platform',
    role: 'Full-Stack Developer & Lead Architect',
    timeline: '8 Weeks',
    github: 'https://github.com/Shaswagupta/frontend-dti',
    demo: 'https://unrivaled-paletas-195d67.netlify.app/',
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    overview: 'A unified digital platform for discovering, organizing, and tracking extracurricular activities, tournaments, and gaming events. Connects participants, organizers, and institutions into a structured, real-time digital ecosystem.',
    problem: 'Extracurricular events are highly fragmented—promoted through WhatsApp or Instagram and managed via volatile Google Sheets. This causes scheduling conflicts, low coordination efficiency, and isolates student achievements inside single institutions.',
    solution: 'Engineered a multi-role web platform utilizing React and Supabase. Implemented real-time scheduler synchronization, PostgreSQL Row-Level Security, a live interactive tournament bracket manager, and detailed analytics tracking student performance stats.',
    features: [
      'Dual-path dashboard interface supporting separate Student profile and Organizer administration portals.',
      'Live leaderboards and interactive point progression chart panels tracking individual and squad stats.',
      'Dynamic search engine with category-based filtering and instant registration workflows.',
      'Trophy case system showcasing earned digital credentials and user game libraries.'
    ],
    challenges: 'Handling concurrent state syncing and security validations for different user roles. Resolved by leveraging Supabase real-time subscriptions, secure auth flows, and designing robust context managers in React.',
    learnings: 'Mastered relational database normalization, custom charting with canvas elements, real-time communication protocols, and complex mobile-first UX layout strategies.',
    achievement: 'Designed a fully integrated SaaS platform that automates event scheduling verification and scales talent discovery across communities.',
    image: 'img_skillsurfer.png',
    images: ['img_skillsurfer.png', 'img_skillsurfer_analytics.png', 'img_skillsurfer_event.png', 'img_skillsurfer_login.png']
  }
};

/* ═══════════════ PARTICLE SYSTEM ═══════════════ */
(function(){
  const canvas=document.getElementById('particles');
  if(!canvas) return;
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

/* ═══════════════ HERO VISUAL INTERACTIVE 3D HOLOGRAPHIC GLOBE & SPACE-TIME GRID ═══════════════ */
(function(){
  const grid = document.querySelector('.interactive-glow-grid');
  const canvas = document.getElementById('heroGridCanvas');
  if (!grid || !canvas) return;
  
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const sizeCSS = 540;
  
  canvas.width = sizeCSS * dpr;
  canvas.height = sizeCSS * dpr;
  ctx.scale(dpr, dpr);
  
  // 1. Grid Lines setup (space-time fabric background)
  const lines = [];
  const verticalX = [175, 270, 365];
  verticalX.forEach(xBase => {
    const points = [];
    for (let y = 40; y <= 500; y += 12) {
      points.push({ xBase: xBase, yBase: y, x: xBase, y: y });
    }
    lines.push({ type: 'vertical', points: points });
  });
  
  const horizontalY = [175, 270, 365];
  horizontalY.forEach(yBase => {
    const points = [];
    for (let x = 40; x <= 500; x += 12) {
      points.push({ xBase: x, yBase: yBase, x: x, y: yBase });
    }
    lines.push({ type: 'horizontal', points: points });
  });
  
  // 2. 3D Globe particles setup (Fibonacci Lattice with Spring Physics)
  const spherePoints = [];
  const spherePointCount = 95;
  const centerX = 270;
  const centerY = 270;
  
  // Spring Radius properties
  let radiusVel = 0;
  let currentRadius = 115;
  let targetRadius = 115;
  const normalRadius = 115;
  const hoverRadius = 135;
  
  for (let i = 0; i < spherePointCount; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / spherePointCount);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    
    // Store as unit coordinates on a 1px radius sphere surface
    spherePoints.push({
      xBase: Math.cos(theta) * Math.sin(phi),
      yBase: Math.sin(theta) * Math.sin(phi),
      zBase: Math.cos(phi),
      // Current animated 3D coordinates
      x: 0, y: 0, z: 0,
      // Displacement offset for hover ripples
      dx: 0, dy: 0, dz: 0,
      // Projected 2D coordinates
      projX: 0, projY: 0, projScale: 1
    });
  }
  
  // Liquid Mercury Droplets physics variables
  const dropEls = [
    document.getElementById('droplet1'),
    document.getElementById('droplet2'),
    document.getElementById('droplet3')
  ];
  
  const droplets = [
    { el: dropEls[0], x: 140, y: 140, vx: 0, vy: 0 },
    { el: dropEls[1], x: 140, y: 140, vx: 0, vy: 0 },
    { el: dropEls[2], x: 140, y: 140, vx: 0, vy: 0 }
  ];
  
  // Interaction variables
  let mouseX = -9999;
  let mouseY = -9999;
  let targetMouseX = -9999;
  let targetMouseY = -9999;
  
  // Globe rotation state
  let rotX = 0;
  let rotY = 0;
  let velX = 0.002;
  let velY = 0.0035;
  const defaultVelX = 0.0015;
  const defaultVelY = 0.003;
  
  let lastMouseX = null;
  let lastMouseY = null;
  
  grid.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    // Map mouse coordinates correctly based on design resolution sizeCSS (540) vs visual CSS client size
    targetMouseX = (e.clientX - rect.left) * (sizeCSS / rect.width);
    targetMouseY = (e.clientY - rect.top) * (sizeCSS / rect.height);
    
    if (lastMouseX !== null && lastMouseY !== null) {
      // Add spin velocity based on mouse drag/movement speed
      const diffX = e.clientX - lastMouseX;
      const diffY = e.clientY - lastMouseY;
      velY += diffX * 0.0003;
      velX -= diffY * 0.0003;
    }
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });
  
  grid.addEventListener('mouseenter', () => {
    grid.classList.add('is-hovered');
    targetRadius = hoverRadius; // Scale up slowly on hover
  });
  
  grid.addEventListener('mouseleave', () => {
    targetMouseX = -9999;
    targetMouseY = -9999;
    lastMouseX = null;
    lastMouseY = null;
    grid.classList.remove('is-hovered');
    grid.classList.remove('is-clicked');
    targetRadius = normalRadius; // Scale down slowly to normal
  });
  
  grid.addEventListener('mousedown', () => {
    grid.classList.add('is-clicked');
    // Rapid outward explosion bounce!
    currentRadius = 185;
    radiusVel = 18;
    
    // Liquid Droplets explode outward on click
    droplets.forEach(d => {
      d.vx = (Math.random() - 0.5) * 32;
      d.vy = (Math.random() - 0.5) * 32;
    });
    
    setTimeout(() => {
      grid.classList.remove('is-clicked');
    }, 1500);
  });
  
  function updateAndRender() {
    // Smoothen mouse tracking with LERP
    if (targetMouseX === -9999) {
      mouseX = -9999;
      mouseY = -9999;
    } else {
      if (mouseX === -9999) {
        mouseX = targetMouseX;
        mouseY = targetMouseY;
      } else {
        mouseX += (targetMouseX - mouseX) * 0.12;
        mouseY += (targetMouseY - mouseY) * 0.12;
      }
    }
    
    // Slow down spin velocity back to elegant defaults
    velX += (defaultVelX - velX) * 0.04;
    velY += (defaultVelY - velY) * 0.04;
    
    // Update rotation angles
    rotX += velX;
    rotY += velY;
    
    // Update spring physics for dynamic radius
    const springK = 0.075;
    const damping = 0.82;
    const force = (targetRadius - currentRadius) * springK;
    radiusVel += force;
    radiusVel *= damping;
    currentRadius += radiusVel;
    
    // Update Liquid Mercury Droplets physics
    droplets.forEach((d, idx) => {
      let targetX = 140;
      let targetY = 140;
      
      if (mouseX !== -9999) {
        // Hover State: Droplets follow cursor and revolve around it
        const angleOffset = idx * (Math.PI * 2 / 3) + Date.now() * 0.0028;
        targetX = (mouseX - 130) + Math.cos(angleOffset) * 24;
        targetY = (mouseY - 130) + Math.sin(angleOffset) * 24;
        
        const ax = (targetX - d.x) * 0.045;
        const ay = (targetY - d.y) * 0.045;
        d.vx = (d.vx + ax) * 0.88;
        d.vy = (d.vy + ay) * 0.88;
      } else {
        // Idle State: Droplets orbit center and fuse with main blob
        const angle = Date.now() * 0.0014 + idx * (Math.PI * 2 / 3);
        targetX = 140 + Math.cos(angle) * 38;
        targetY = 140 + Math.sin(angle) * 38;
        
        const ax = (targetX - d.x) * 0.06;
        const ay = (targetY - d.y) * 0.06;
        d.vx = (d.vx + ax) * 0.86;
        d.vy = (d.vy + ay) * 0.86;
      }
      
      d.x += d.vx;
      d.y += d.vy;
      
      if (d.el) {
        d.el.style.transform = `translate(${d.x - 140}px, ${d.y - 140}px) translate(-50%, -50%)`;
      }
    });
    
    ctx.clearRect(0, 0, sizeCSS, sizeCSS);
    
    // 1. Render space-time fabric background grid lines
    lines.forEach(line => {
      line.points.forEach(pt => {
        let targetX = pt.xBase;
        let targetY = pt.yBase;
        
        if (mouseX !== -9999) {
          const dx = mouseX - pt.xBase;
          const dy = mouseY - pt.yBase;
          const dist = Math.hypot(dx, dy);
          
          if (dist < 140) {
            const influence = Math.pow(1 - dist / 140, 2);
            targetX = pt.xBase + dx * 0.25 * influence;
            targetY = pt.yBase + dy * 0.25 * influence;
          }
        }
        
        pt.x += (targetX - pt.x) * 0.15;
        pt.y += (targetY - pt.y) * 0.15;
      });
      
      ctx.beginPath();
      ctx.moveTo(line.points[0].x, line.points[0].y);
      for (let k = 1; k < line.points.length; k++) {
        ctx.lineTo(line.points[k].x, line.points[k].y);
      }
      ctx.strokeStyle = 'rgba(223, 197, 159, 0.07)';
      ctx.lineWidth = 0.85;
      ctx.stroke();
    });
    
    // 2. Rotate, project, and warp 3D Globe Points
    const fov = 320;
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    
    spherePoints.forEach(p => {
      // Rotate unit vectors around Y axis
      let x1 = p.xBase * cosY - p.zBase * sinY;
      let z1 = p.xBase * sinY + p.zBase * cosY;
      
      // Rotate unit vectors around X axis
      let y2 = p.yBase * cosX - z1 * sinX;
      let z2 = p.yBase * sinX + z1 * cosX;
      
      // Scale by current dynamically animated radius
      p.x = x1 * currentRadius;
      p.y = y2 * currentRadius;
      p.z = z2 * currentRadius;
      
      // Project to 2D screen coordinates
      p.projScale = fov / (fov + p.z);
      p.projX = centerX + p.x * p.projScale;
      p.projY = centerY + p.y * p.projScale;
      
      // Dynamic Magnetic Distortion towards liquid droplets + mouse cursor dent
      let targetDx = 0, targetDy = 0, targetDz = 0;
      
      // Magnetic pull outward towards liquid droplets
      droplets.forEach(d => {
        const dropCanvasX = d.x + 130;
        const dropCanvasY = d.y + 130;
        const dist2D = Math.hypot(p.projX - dropCanvasX, p.projY - dropCanvasY);
        if (dist2D < 80) {
          const pull = (1 - dist2D / 80) * 28; // Bulge outwards towards droplets
          targetDx += p.xBase * pull;
          targetDy += p.yBase * pull;
          targetDz += p.zBase * pull;
        }
      });
      
      // Gentle compression directly under cursor
      if (mouseX !== -9999) {
        const dist2D = Math.hypot(p.projX - mouseX, p.projY - mouseY);
        if (dist2D < 90) {
          const force = (1 - dist2D / 90) * -34; // Dent inwards
          targetDx += p.xBase * force;
          targetDy += p.yBase * force;
          targetDz += p.zBase * force;
        }
      }
      
      // LERP ripples
      p.dx += (targetDx - p.dx) * 0.15;
      p.dy += (targetDy - p.dy) * 0.15;
      p.dz += (targetDz - p.dz) * 0.15;
      
      // Re-apply rotation to displacement offsets
      const rDx = p.dx * cosY - p.dz * sinY;
      const rDz1 = p.dx * sinY + p.dz * cosY;
      const rDy = p.dy * cosX - rDz1 * sinX;
      const rDz = p.dy * sinX + rDz1 * cosX;
      
      p.x += rDx;
      p.y += rDy;
      p.z += rDz;
      
      // Re-project with displaced coordinates
      p.projScale = fov / (fov + p.z);
      p.projX = centerX + p.x * p.projScale;
      p.projY = centerY + p.y * p.projScale;
    });
    
    // Sort points by depth (Z-buffer) for realistic translucent overlay drawing
    const sortedPoints = [...spherePoints].sort((a, b) => b.z - a.z);
    
    // 3. Draw Holographic Mesh Connections
    ctx.lineWidth = 0.55;
    for (let i = 0; i < spherePoints.length; i++) {
      const p1 = spherePoints[i];
      // Limit connections to adjacent points to run smoothly at 60fps
      const connectLimit = 8;
      for (let j = 1; j <= connectLimit; j++) {
        const p2 = spherePoints[(i + j) % spherePoints.length];
        
        // Calculate 3D distance between points
        const dist3D = Math.hypot(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z);
        const maxDist = currentRadius * 0.74; // Scale connection thresholds dynamically
        if (dist3D < maxDist) {
          const avgZ = (p1.z + p2.z) / 2;
          const zDepthFactor = (currentRadius - avgZ) / (currentRadius * 2);
          if (zDepthFactor > 0.15) {
            const alpha = zDepthFactor * (1 - dist3D / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.strokeStyle = `rgba(223, 197, 159, ${alpha})`;
            ctx.stroke();
          }
        }
      }
    }
    
    // 4. Draw Projected 3D particles
    sortedPoints.forEach(p => {
      const zDepthFactor = (currentRadius - p.z) / (currentRadius * 2);
      const opacity = 0.15 + zDepthFactor * 0.65;
      const size = (1.5 + zDepthFactor * 4.0) * (p.projScale * 0.8);
      
      // Calculate cursor proximity for local glow highlight
      let isHovered = false;
      if (mouseX !== -9999) {
        const dist2D = Math.hypot(p.projX - mouseX, p.projY - mouseY);
        isHovered = (dist2D < 32);
      }
      
      ctx.beginPath();
      ctx.arc(p.projX, p.projY, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = isHovered 
        ? `rgba(255, 255, 255, 1)` 
        : `rgba(223, 197, 159, ${opacity})`;
      ctx.fill();
      
      // Draw outer halo circle on active hover
      if (isHovered) {
        ctx.beginPath();
        ctx.arc(p.projX, p.projY, size / 2 + 5.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(223, 197, 159, 0.45)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });
    
    requestAnimationFrame(updateAndRender);
  }
  
  requestAnimationFrame(updateAndRender);
})();

/* ═══════════════ NAVBAR SCROLL & ACTIVE LINK UPDATES ═══════════════ */
(function(){
  const nav=document.getElementById('navbar');
  const links=document.querySelectorAll('.nav-link');
  const sections=document.querySelectorAll('.section');
  const timelineContainer = document.querySelector('.timeline-container');
  const progressThread = document.querySelector('.timeline-progress-thread');
  const timelineItems = document.querySelectorAll('.timeline-item');
  if(!nav) return;
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbar() {
    const currentScrollY = window.scrollY;
    
    // Toggle background scrolled styling
    nav.classList.toggle('scrolled', currentScrollY > 50);
    
    // Hide/show navbar depending on scroll direction
    const navLinks = document.getElementById('navLinks');
    const isMenuOpen = navLinks && navLinks.classList.contains('open');
    if (currentScrollY > 20 && currentScrollY > lastScrollY && !isMenuOpen) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastScrollY = currentScrollY;
    
    let current = '';
    sections.forEach(s => {
      if (currentScrollY >= s.offsetTop - 220) {
        current = s.getAttribute('id');
      }
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });

    // Update Timeline Progress Thread & Active markers
    if (timelineContainer && progressThread) {
      const rect = timelineContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress percentage through the timeline container
      const startPoint = viewportHeight * 0.85; // Start drawing line when top of container is 85% down viewport
      const entryY = startPoint - rect.top;
      
      let percent = (entryY / rect.height) * 100;
      percent = Math.max(0, Math.min(100, percent));
      progressThread.style.height = `${percent}%`;

      // Show/hide year bubble dynamically based on progress
      const yearBubble = timelineContainer.querySelector('.timeline-year-bubble');
      if (yearBubble) {
        if (percent > 0.5 && percent < 99.5) {
          yearBubble.style.opacity = '1';
        } else {
          yearBubble.style.opacity = '0';
        }
      }
      
      // Activate milestones as they enter scroll threshold (e.g. above 70% of viewport height)
      let currentYear = "2023";
      timelineItems.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < viewportHeight * 0.7) {
          item.classList.add('active');
          const dateEl = item.querySelector('.timeline-date');
          if (dateEl) {
            const matches = dateEl.textContent.trim().match(/\d{4}/);
            if (matches) {
              currentYear = matches[0];
            }
          }
        } else {
          item.classList.remove('active');
        }
      });

      if (yearBubble && percent > 0.5) {
        yearBubble.textContent = currentYear;
      }
    }
  }

  // Timeline Cards mouse glow effect
  document.querySelectorAll('.timeline-content').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
    });
  });

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNavbar();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ═══════════════ HAMBURGER MENU ═══════════════ */
(function(){
  const btn=document.getElementById('hamburger');
  const menu=document.getElementById('navLinks');
  if(!btn || !menu) return;
  btn.addEventListener('click',function(){
    btn.classList.toggle('active');
    menu.classList.toggle('open');
  });
  document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',function(){
    btn.classList.remove('active');
    menu.classList.remove('open');
  }));
})();

/* ═══════════════ INTERSECTION OBSERVER ANIMATIONS ═══════════════ */
(function(){
  const observer=new IntersectionObserver(function(entries){
    entries.forEach(e=>{
      if(e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  },{threshold:.1});
  document.querySelectorAll('[data-anim]').forEach(el=>observer.observe(el));
})();

/* ═══════════════ INTERACTIVE SKILLS DASHBOARD SYSTEM ═══════════════ */
const skillsData = {
  languages: {
    title: "Programming Languages",
    desc: "Core languages used for systems programming, data structures, scripting, and backend applications.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    items: [
      {
        name: "C++",
        level: 90,
        mastery: "Expert",
        usage: 5,
        achievement: "Core language for real-time systems; designed multithreaded ticket bookings.",
        desc: "Primary language for performance-critical systems and low-level development. Deep understanding of memory management, pointer manipulation, and STL data structures.",
        topics: ["Memory Management", "Pointers & References", "STL", "Templates", "Object-Oriented Programming (OOP)"],
        projects: ["Bank Management System", "Movie Ticket Booking"]
      },
      {
        name: "JavaScript",
        level: 85,
        mastery: "Advanced",
        usage: 5,
        achievement: "Engineered single-page application router and custom trailing cursor renderer.",
        desc: "Engine for interactive frontends and scalable backend servers. Experienced with ES6+, asynchronous programming, closures, and Event Loop internals.",
        topics: ["ES6+", "Asynchronous JS (Promises, Async/Await)", "DOM Manipulation", "Event Loop", "V8 Engine Internals"],
        projects: ["E-Commerce Platform", "Data Visualization Dashboard", "SkillSurfer Platform"]
      },
      {
        name: "Python",
        level: 80,
        mastery: "Advanced",
        usage: 4,
        achievement: "Trained Convolutional Neural Networks achieving 95%+ classification accuracy.",
        desc: "Language of choice for data scripting, automation, and machine learning models. Skilled in mathematical libraries and scripting pipelines.",
        topics: ["Data Analysis (Pandas, NumPy)", "File I/O", "Automation Scripts", "TensorFlow & PyTorch", "Flask & FastAPI"],
        projects: ["Crop Disease Detector", "Plant Disease Classification"]
      },
      {
        name: "SQL",
        level: 75,
        mastery: "Proficient",
        usage: 4,
        achievement: "Optimized multi-table joins and defined relational schemas for e-commerce stores.",
        desc: "Relational database querying language. Proficient in database normalization, complex joins, indexing, and transaction safety.",
        topics: ["Relational Algebra", "Database Joins & Subqueries", "Indexing & Optimization", "ACID Compliance", "Schema Design"],
        projects: ["E-Commerce Platform"]
      }
    ]
  },
  webdev: {
    title: "Web Development",
    desc: "Technologies and frameworks used to create premium, interactive, and high-performance web applications.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    items: [
      {
        name: "HTML5 / CSS3",
        level: 92,
        mastery: "Expert",
        usage: 5,
        achievement: "Crafted high-fidelity editorial layouts and advanced interactive CSS glassmorphisms.",
        desc: "Foundational structure and premium styling of modern web applications. Skilled in Flexbox, CSS Grid, custom variables, responsive fluid layouts, and performance optimization.",
        topics: ["Semantic HTML", "Flexbox & Grid Layouts", "CSS Variables", "Responsive Design", "Transitions & Keyframe Animations"],
        projects: ["Portfolio Website", "E-Commerce Platform"]
      },
      {
        name: "React.js",
        level: 85,
        mastery: "Advanced",
        usage: 5,
        achievement: "Built stateful shopping carts and real-time dashboard analytics panels.",
        desc: "Component-driven frontend library. Proficient in functional components, hooks, custom state management (Context, Redux), and virtual DOM rendering optimization.",
        topics: ["React Hooks", "Context API & State Management", "Virtual DOM", "Component Lifecycle", "Performance Optimization (useMemo, useCallback)"],
        projects: ["E-Commerce Platform", "SkillSurfer Platform"]
      },
      {
        name: "Node.js",
        level: 78,
        mastery: "Proficient",
        usage: 4,
        achievement: "Engineered secure backend APIs handling user authentication and payment intents.",
        desc: "JavaScript runtime for building scalable server-side applications. Skilled in Express routing, middleware, authentication gates, and REST API design.",
        topics: ["Express.js Framework", "Middleware Architecture", "Event-Driven Programming", "HTTP Protocols & Security Headers", "npm & Package Management"],
        projects: ["E-Commerce Platform"]
      },
      {
        name: "REST APIs",
        level: 85,
        mastery: "Advanced",
        usage: 5,
        achievement: "Integrated Stripe payment gateways and implemented robust token-based authorization.",
        desc: "Architectural style for designing network applications. Experienced in designing robust endpoints, secure JWT-based auth, payload validation, and HTTP status handling.",
        topics: ["HTTP Methods & Status Codes", "JWT Authentication", "Payload Validation", "CORS & Security", "API Documentation"],
        projects: ["E-Commerce Platform", "Data Visualization Dashboard"]
      }
    ]
  },
  databases: {
    title: "Databases",
    desc: "Data persistence systems, query languages, caching layers, and database structure architectures.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
    items: [
      {
        name: "MongoDB",
        level: 76,
        mastery: "Advanced",
        usage: 4,
        achievement: "Configured document models and relational population for commerce systems.",
        desc: "NoSQL document store used for flexible data storage. Experienced with Mongoose schemas, aggregation pipelines, validation, and database connections.",
        topics: ["BSON Document Storage", "Mongoose Schemas", "Aggregation Pipelines", "Indexing", "Database Connections"],
        projects: ["E-Commerce Platform"]
      },
      {
        name: "PostgreSQL",
        level: 78,
        mastery: "Advanced",
        usage: 4,
        achievement: "Designed normalized tournament schemas and robust database constraints.",
        desc: "Advanced relational database system. Skilled in structural design, indexing, foreign keys, transaction handling, and SQL queries.",
        topics: ["Relational Schemas", "Foreign Key Constraints", "JSONB Support", "Views & Triggers", "Complex Queries"],
        projects: ["E-Commerce Platform", "SkillSurfer Platform"]
      },
      {
        name: "MySQL",
        level: 80,
        mastery: "Advanced",
        usage: 4,
        achievement: "Maintained transactional safety for system files and structured banking metrics.",
        desc: "Widely used open-source relational database. Competent in building structured tables, executing queries, optimizing slow operations, and schema administration.",
        topics: ["Relational Modeling", "Joins & Subqueries", "Database Indexing", "User Privileges", "Backup & Recovery"],
        projects: ["Bank Management System"]
      },
      {
        name: "Redis",
        level: 60,
        mastery: "Proficient",
        usage: 3,
        achievement: "Deployed session stores with automatic expiration to optimize response speeds.",
        desc: "In-memory key-value database used for caching and lightning-fast session storage. Experienced in basic operations and key expiration structures.",
        topics: ["In-Memory Storage", "Caching Strategies", "Key Expiration", "Data Types (Strings, Hashes, Lists)", "Session Management"],
        projects: ["E-Commerce Platform"]
      }
    ]
  },
  tools: {
    title: "Tools & Platforms",
    desc: "Modern development toolchains, containerization tools, code versioning pipelines, and visual layout frameworks.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    items: [
      {
        name: "Git / GitHub",
        level: 88,
        mastery: "Expert",
        usage: 5,
        achievement: "Managed code reviews, complex merges, and automated site deployments.",
        desc: "Distributed version control system. Skilled in branching strategies, merge conflict resolution, pull requests, commits, and collaborative repository workflows.",
        topics: ["Branching & Merging", "Conflict Resolution", "Git Rebase & Cherry-Pick", "GitHub Actions & CI/CD", "Pull Request Workflows"],
        projects: ["All Projects"]
      },
      {
        name: "Docker",
        level: 70,
        mastery: "Proficient",
        usage: 3,
        achievement: "Containerized multi-container Web apps for consistent local environments.",
        desc: "Containerization platform to build and ship applications. Familiar with writing Dockerfiles, defining compose networks, managing volumes, and deploying isolated stacks.",
        topics: ["Dockerfiles", "Docker Compose", "Container Networking", "Volume Persistence", "Image Optimization"],
        projects: ["E-Commerce Platform"]
      },
      {
        name: "VS Code",
        level: 95,
        mastery: "Expert",
        usage: 5,
        achievement: "Customized hotkeys, macro scripts, and workspaces to speed up building.",
        desc: "Preferred IDE for development. Highly customized with performance configurations, keybindings, debugging tools, and system terminal integrations.",
        topics: ["Integrated Debugging", "Extension Customization", "Task Automation", "Git Integration", "Multi-root Workspaces"],
        projects: ["All Projects"]
      },
      {
        name: "Figma / UI Design",
        level: 80,
        mastery: "Advanced",
        usage: 4,
        achievement: "Modeled game libraries, tournament brackets, and responsive dashboards.",
        desc: "Collaborative interface design tool. Skilled in wireframing, layout systems, component variants, auto-layout, prototyping, and establishing design tokens.",
        topics: ["Auto-Layout", "Component Library Systems", "Interactive Prototyping", "Design System Tokens", "Vector Layouts"],
        projects: ["Portfolio Website", "SkillSurfer Platform"]
      }
    ]
  },
  aicore: {
    title: "AI/ML & Core CS",
    desc: "Academic algorithms, software models, neural networks, object layouts, and general programming philosophies.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    items: [
      {
        name: "AI / ML Concepts",
        level: 75,
        mastery: "Advanced",
        usage: 4,
        achievement: "Applied transfer learning to ResNet architectures for crop health analysis.",
        desc: "Core concepts of artificial intelligence and machine learning. Experienced in neural networks, computer vision, data preparation, and training deep learning models.",
        topics: ["Supervised Learning", "Neural Network Layers", "Convolutional Neural Networks (CNN)", "Model Tuning & Regularization", "Computer Vision Fundamentals"],
        projects: ["Crop Disease Detector", "Plant Disease Classification"]
      },
      {
        name: "Data Structures (DSA)",
        level: 88,
        mastery: "Advanced",
        usage: 5,
        achievement: "Solved complex algorithmic problems with optimized time/space bounds.",
        desc: "Foundational concepts for writing efficient logic. Proficient in binary search, trees, sorting algorithms, graphs, hash tables, and big-O analysis.",
        topics: ["Linked Lists & Stacks", "Trees & Graphs", "Sorting & Searching Algorithms", "Big-O Notation", "Dynamic Programming"],
        projects: ["Movie Ticket Booking", "Bank Management System"]
      },
      {
        name: "Object-Oriented Programming (OOP)",
        level: 90,
        mastery: "Expert",
        usage: 5,
        achievement: "Designed modular banking system adhering to clean RAII and encapsulation.",
        desc: "Software design paradigm centering around objects. Expert in abstraction, encapsulation, inheritance, polymorphism, design patterns, and solid design principles.",
        topics: ["Abstraction & Encapsulation", "Inheritance & Polymorphism", "SOLID Design Principles", "Design Patterns", "RAII Memory Management"],
        projects: ["Bank Management System", "Movie Ticket Booking"]
      },
      {
        name: "Software Engineering Principles",
        level: 82,
        mastery: "Advanced",
        usage: 5,
        achievement: "Ensured high coverage via unit tests and adhered to clean modular architectures.",
        desc: "Methodology of building software in teams. Practiced in test-driven development, modular architecture, code readability, dry principles, and security gates.",
        topics: ["TDD & Unit Testing", "DRY & KISS Principles", "Modular Code Design", "Secure Coding Practices", "Documentation & Architecture"],
        projects: ["All Projects"]
      }
    ]
  }
};

(function(){
  const skillsTabs = document.getElementById('skillsTabs');
  const currentCategoryTitle = document.getElementById('currentCategoryTitle');
  const currentCategoryDesc = document.getElementById('currentCategoryDesc');
  const skillsListContainer = document.getElementById('skillsListContainer');
  const skillDetailPane = document.getElementById('skillDetailPane');

  if (!skillsTabs || !skillsListContainer || !skillDetailPane) return;

  let activeCategoryKey = 'languages';
  let activeSkillIndex = 0;

  // Project Scroll & Highlight Trigger
  function highlightProject(projectName) {
    // Check ifprojectName is "All Projects"
    if (projectName === "All Projects") {
      const section = document.getElementById('projects');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    const rows = document.querySelectorAll('.project-row');
    let targetRow = null;

    rows.forEach(row => {
      const titleEl = row.querySelector('.project-row-title');
      if (titleEl && titleEl.textContent.trim().toLowerCase() === projectName.trim().toLowerCase()) {
        targetRow = row;
      }
    });

    if (targetRow) {
      // UX Enhancement: If target row is hidden by filter, reset filters to "all"
      if (targetRow.classList.contains('hide-filter') || targetRow.classList.contains('fade-out-filter')) {
        const allBtn = document.querySelector('.project-filter-btn[data-filter="all"]');
        if (allBtn) {
          allBtn.click();
        }
      }

      // Wait a moment for filter transition to start before scrolling and pulsing
      setTimeout(() => {
        targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetRow.classList.add('project-highlight-pulse');
        setTimeout(() => {
          targetRow.classList.remove('project-highlight-pulse');
        }, 6000);
      }, 150);
    } else {
      // Fallback: scroll to projects section
      const section = document.getElementById('projects');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Render Category Tabs
  function renderTabs() {
    skillsTabs.innerHTML = '';
    Object.keys(skillsData).forEach(key => {
      const cat = skillsData[key];
      const btn = document.createElement('button');
      btn.className = `skill-tab-btn ${key === activeCategoryKey ? 'active' : ''}`;
      btn.innerHTML = `${cat.icon}<span>${cat.title}</span>`;
      btn.addEventListener('click', () => selectCategory(key));
      skillsTabs.appendChild(btn);
    });
  }

  // Handle Category Selection
  function selectCategory(key) {
    if (activeCategoryKey === key) return;
    activeCategoryKey = key;
    activeSkillIndex = 0;
    
    // Update Tab UI
    document.querySelectorAll('.skill-tab-btn').forEach(btn => btn.classList.remove('active'));
    renderTabs();
    
    // Update Header
    currentCategoryTitle.textContent = skillsData[key].title;
    currentCategoryDesc.textContent = skillsData[key].desc;
    
    // Render Skills List and detail pane
    renderSkillsList();
    updateSkillDetail();
  }

  // Render Left Skills List
  function renderSkillsList() {
    skillsListContainer.innerHTML = '';
    const skills = skillsData[activeCategoryKey].items;
    
    skills.forEach((skill, index) => {
      const item = document.createElement('div');
      item.className = `skill-dashboard-item ${index === activeSkillIndex ? 'active' : ''}`;
      item.style.setProperty('--i', index); // Set custom property for stagger delay
      item.innerHTML = `
        <div class="skill-item-info">
          <span class="skill-item-name">${skill.name}</span>
          <div class="skill-item-mini-bar">
            <div class="skill-item-mini-fill" style="width: ${skill.level}%"></div>
          </div>
        </div>
        <span class="skill-item-val">${skill.level}%</span>
      `;
      item.addEventListener('click', () => selectSkill(index));
      skillsListContainer.appendChild(item);
    });
  }

  // Handle Skill Selection
  function selectSkill(index) {
    if (activeSkillIndex === index) return;
    activeSkillIndex = index;
    
    // Update active row class
    document.querySelectorAll('.skill-dashboard-item').forEach((item, idx) => {
      if (idx === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    updateSkillDetail();
    
    // Auto-scroll to detail panel on mobile screens
    if (window.innerWidth <= 900) {
      setTimeout(() => {
        const detailPane = document.getElementById('skillDetailPane');
        if (detailPane) {
          detailPane.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 200);
    }
  }

  // Update Detail Panel on Right
  function updateSkillDetail() {
    const skill = skillsData[activeCategoryKey].items[activeSkillIndex];
    
    // Add switching effect (fade)
    skillDetailPane.classList.add('switching');
    
    setTimeout(() => {
      // Calculate SVG stroke offset: circumference is 2 * PI * r = 2 * 3.14159 * 70 = 439.82
      const radius = 70;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (skill.level / 100) * circumference;

      // Construct usage rating dots
      let dotsHTML = '';
      for (let i = 1; i <= 5; i++) {
        dotsHTML += `<div class="usage-dot ${i <= skill.usage ? 'active' : ''}"></div>`;
      }

      // Construct project links
      const projectPills = skill.projects.map(proj => {
        return `<a href="#projects" class="project-pill" data-project-target="${proj}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          ${proj}
        </a>`;
      }).join(' ');

      const topicsHTML = skill.topics.map(topic => `<span class="skill-detail-tag">${topic}</span>`).join('');

      skillDetailPane.innerHTML = `
        <div class="radial-progress-wrapper">
          <svg class="radial-progress-svg" viewBox="0 0 160 160">
            <circle class="radial-track" cx="80" cy="80" r="70" />
            <circle class="radial-fill" cx="80" cy="80" r="70" style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${circumference};" />
          </svg>
          <div class="radial-value-text">
            <span>${skill.level}</span>
            <span class="radial-value-percent">%</span>
          </div>
        </div>
        
        <div class="skill-mastery-badge">${skill.mastery}</div>
        
        <div class="skill-detail-body">
          <h3 class="skill-detail-title font-serif">${skill.name}</h3>
          <p class="skill-detail-desc">${skill.desc}</p>
          
          <div class="skill-detail-meta-row">
            <span>Usage Frequency</span>
            <div class="skill-usage-dots">
              ${dotsHTML}
            </div>
          </div>

          <p class="skill-detail-desc" style="font-style: italic; font-size: 0.85rem; color: var(--primary); margin-top: -10px; margin-bottom: 20px; border-left: 2px solid var(--primary); padding-left: 10px; text-align: left; max-width: 100%;">
            "${skill.achievement}"
          </p>
          
          <div class="skill-detail-section">
            <h4>Key Concepts & Topics</h4>
            <div class="skill-detail-tags">
              ${topicsHTML}
            </div>
          </div>
          
          <div class="skill-detail-section">
            <h4>Featured In Projects</h4>
            <div class="skill-detail-tags">
              ${projectPills}
            </div>
          </div>
        </div>
      `;

      // Set up click handlers for project pills
      skillDetailPane.querySelectorAll('[data-project-target]').forEach(link => {
        link.addEventListener('click', (ev) => {
          ev.preventDefault();
          const targetProject = link.getAttribute('data-project-target');
          highlightProject(targetProject);
        });
      });

      // Trigger drawing animation in next tick
      setTimeout(() => {
        const fill = skillDetailPane.querySelector('.radial-fill');
        if (fill) {
          fill.style.strokeDashoffset = offset;
        }
      }, 50);

      skillDetailPane.classList.remove('switching');
    }, 150);
  }

  // Initialize
  renderTabs();
  renderSkillsList();
  updateSkillDetail();
})();


/* ═══════════════ CASE STUDY OVERLAY ROUTING SYSTEM ═══════════════ */
(function(){
  const overlay = document.getElementById('caseStudyOverlay');
  const closeBtn = document.getElementById('closeCaseStudyBtn');
  
  if (!overlay) return;

  function showCaseStudy(p) {
    document.getElementById('caseStudyTitle').textContent = p.title;
    document.getElementById('caseStudyMeta').innerHTML = `
      <span><strong>Role</strong>${p.role}</span>
      <span><strong>Timeline</strong>${p.timeline}</span>
    `;
    
    // Tech stack
    const techContainer = document.getElementById('caseStudyTechStack');
    techContainer.innerHTML = p.techStack.map(tag => `<span>${tag}</span>`).join('');
    
    // Content sections
    document.getElementById('caseStudyOverview').textContent = p.overview;
    document.getElementById('caseStudyProblem').textContent = p.problem;
    document.getElementById('caseStudySolution').textContent = p.solution;
    document.getElementById('caseStudyChallenges').textContent = p.challenges;
    document.getElementById('caseStudyLearnings').textContent = p.learnings;
    document.getElementById('caseStudyAchievement').textContent = p.achievement;
    
    // Links
    document.getElementById('caseStudyGithub').href = p.github;
    document.getElementById('caseStudyDemo').href = p.demo;
    
    // Image Gallery
    const imgEl = document.getElementById('caseStudyImage');
    const thumbsContainer = document.getElementById('caseStudyGalleryThumbs');
    
    // Reset image classes
    imgEl.classList.remove('changing');
    
    // Set initial image
    imgEl.src = p.image;
    imgEl.alt = p.title;
    
    // Determine the array of images
    const imagesList = p.images || [p.image];
    
    if (imagesList.length > 1) {
      thumbsContainer.style.display = 'grid';
      thumbsContainer.innerHTML = imagesList.map((imgSrc, idx) => `
        <div class="case-study-thumb ${imgSrc === p.image ? 'active' : ''}" data-idx="${idx}">
          <img src="${imgSrc}" alt="${p.title} Visual ${idx + 1}" loading="lazy">
        </div>
      `).join('');
      
      // Add click listeners to thumbnails
      thumbsContainer.querySelectorAll('.case-study-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
          const idx = parseInt(thumb.getAttribute('data-idx'));
          const targetSrc = imagesList[idx];
          
          if (imgEl.src.endsWith(targetSrc)) return; // Already active
          
          // Smooth fade transition
          imgEl.classList.add('changing');
          
          // Toggle active class on thumbnails
          thumbsContainer.querySelectorAll('.case-study-thumb').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          
          setTimeout(() => {
            imgEl.src = targetSrc;
            imgEl.onload = () => {
              imgEl.classList.remove('changing');
            };
          }, 250);
        });
      });
    } else {
      thumbsContainer.style.display = 'none';
      thumbsContainer.innerHTML = '';
    }
    
    // Features list
    const featuresList = document.getElementById('caseStudyFeatures');
    featuresList.innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    
    // Open panel
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function hideCaseStudy() {
    overlay.classList.remove('open');
    // Restore body scroll only if admin dashboard is closed
    if (!document.getElementById('adminModal').classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  function handleRouting() {
    const hash = window.location.hash;
    const prefix = '#project-';
    if (hash.startsWith(prefix)) {
      const key = hash.substring(prefix.length);
      const project = caseStudies[key];
      if (project) {
        showCaseStudy(project);
      } else {
        hideCaseStudy();
      }
    } else {
      hideCaseStudy();
    }
  }

  window.addEventListener('hashchange', handleRouting);
  window.addEventListener('load', handleRouting);

  // Close handlers
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      history.replaceState(null, null, ' ');
      hideCaseStudy();
    });
  }
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      window.location.hash = '';
    }
  });
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
  if(!form) return;
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
    
    // Send confirmation auto-reply to the user if EmailJS is configured
    if (typeof emailjs !== 'undefined' && CONFIG.EMAILJS_PUBLIC_KEY && CONFIG.EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
      emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, {
        name: name,
        email: email,
        title: subject,
        message: message
      }).catch(err => console.error("EmailJS auto-reply error:", err));
    }
    
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
    const trigger = document.getElementById('adminTrigger');
    const closeBtn = document.getElementById('closeAdminBtn');
    const modal = document.getElementById('adminModal');
    const logo = document.getElementById('navLogo');
    
    if(!modal) return;

    let logoClicks = 0;
    let logoClickTimer;
    if (logo) {
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
    }

    if (trigger) trigger.addEventListener('click', () => this.open());
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    
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
    const searchInput = document.getElementById('adminSearchInput');
    const filterSelect = document.getElementById('adminStatusFilter');
    const clearBtn = document.getElementById('clearAllBtn');
    const exportBtn = document.getElementById('exportCsvBtn');

    if (searchInput) searchInput.addEventListener('input', () => this.render());
    if (filterSelect) filterSelect.addEventListener('change', () => this.render());
    if (clearBtn) clearBtn.addEventListener('click', () => this.clearAll());
    if (exportBtn) exportBtn.addEventListener('click', () => this.exportCSV());

    // Detail Modal Close
    const closeDetail = document.getElementById('closeDetailBtn');
    const markRead = document.getElementById('markReadBtn');
    const deleteDetail = document.getElementById('deleteDetailBtn');

    if (closeDetail) closeDetail.addEventListener('click', () => this.closeDetail());
    if (markRead) markRead.addEventListener('click', () => this.toggleReadStatus());
    if (deleteDetail) deleteDetail.addEventListener('click', () => this.deleteDetail());

    // Passcode gate form handlers
    const passcodeForm = document.getElementById('adminPasscodeForm');
    const passcodeField = document.getElementById('adminPasscodeField');
    const passcodeError = document.getElementById('passcodeError');
    const closePasscodeBtn = document.getElementById('closePasscodeBtn');

    if (passcodeForm) {
      passcodeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = passcodeField.value;
        if (val === CONFIG.ADMIN_PASSCODE) {
          sessionStorage.setItem('admin_verified', 'true');
          passcodeField.value = '';
          if (passcodeError) passcodeError.style.display = 'none';
          document.getElementById('adminPasscodeScreen').style.display = 'none';
          document.getElementById('adminModalContainer').style.display = 'flex';
          this.render();
        } else {
          if (passcodeError) passcodeError.style.display = 'block';
        }
      });
    }

    if (closePasscodeBtn) {
      closePasscodeBtn.addEventListener('click', () => this.close());
    }

    // Backdrop click close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.close();
      }
    });
  },

  open() {
    const isVerified = sessionStorage.getItem('admin_verified') === 'true';
    const passcodeScreen = document.getElementById('adminPasscodeScreen');
    const modalContainer = document.getElementById('adminModalContainer');
    const passcodeField = document.getElementById('adminPasscodeField');
    const passcodeError = document.getElementById('passcodeError');

    if (passcodeField) passcodeField.value = '';
    if (passcodeError) passcodeError.style.display = 'none';

    if (isVerified) {
      if (passcodeScreen) passcodeScreen.style.display = 'none';
      if (modalContainer) modalContainer.style.display = 'flex';
      this.render();
    } else {
      if (passcodeScreen) passcodeScreen.style.display = 'flex';
      if (modalContainer) modalContainer.style.display = 'none';
    }

    document.getElementById('adminModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    document.getElementById('adminModal').classList.remove('open');
    // Only restore body overflow if case study panel is not open
    if (!document.getElementById('caseStudyOverlay').classList.contains('open')) {
      document.body.style.overflow = '';
    }
  },

  render() {
    const list = DataStore.getAll();
    const query = document.getElementById('adminSearchInput').value.toLowerCase().trim();
    const statusFilter = document.getElementById('adminStatusFilter').value;

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

window.renderAdminData = () => AdminDashboard.render();

// Initialize Admin Dashboard
document.addEventListener('DOMContentLoaded', () => {
  AdminDashboard.init();
});

/* ═══════════════ SMOOTH SCROLL ═══════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const href = this.getAttribute('href');
    if (href === '#' || href.startsWith('#project-')) return;
    e.preventDefault();
    try {
      const target=document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth'});
    } catch(err) {
      console.error('Smooth scroll error:', err);
    }
  });
});

/* ═══════════════ CUSTOM LERP CURSOR ANIMATION ═══════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorOutline = document.querySelector('.custom-cursor-outline');
  
  if (cursorDot && cursorOutline) {
    // Only initialize custom cursor on devices that support hover (non-touch)
    if (!window.matchMedia('(pointer: fine)').matches) {
      cursorDot.style.display = 'none';
      cursorOutline.style.display = 'none';
      return;
    }
    
    let targetX = 0, targetY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;
    let isVisible = false;
    
    const LERP_DOT = 0.85;      // Make the dot follow almost instantly
    const LERP_OUTLINE = 0.35;  // Make the outer ring track much faster while keeping smoothness
    
    window.addEventListener('mousemove', function(e) {
      targetX = e.clientX;
      targetY = e.clientY;
      
      if (!isVisible) {
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
    
    function renderCursor() {
      if (isVisible) {
        dotX += (targetX - dotX) * LERP_DOT;
        dotY += (targetY - dotY) * LERP_DOT;
        
        outlineX += (targetX - outlineX) * LERP_OUTLINE;
        outlineY += (targetY - outlineY) * LERP_OUTLINE;
        
        cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
        cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);
    
    // Robust delegation-based hover detection for custom cursor
    document.addEventListener('mouseover', (e) => {
      const interactive = e.target.closest('a, button, input, textarea, select, .glass-card, .hamburger, .contact-action-card, .timeline-content, .case-study-btn');
      if (interactive) {
        cursorDot.classList.add('hovered');
        cursorOutline.classList.add('hovered');
      }
    });
    
    document.addEventListener('mouseout', (e) => {
      const interactive = e.target.closest('a, button, input, textarea, select, .glass-card, .hamburger, .contact-action-card, .timeline-content, .case-study-btn');
      if (interactive) {
        if (!e.relatedTarget || !e.relatedTarget.closest('a, button, input, textarea, select, .glass-card, .hamburger, .contact-action-card, .timeline-content, .case-study-btn')) {
          cursorDot.classList.remove('hovered');
          cursorOutline.classList.remove('hovered');
        }
      }
    });
  }
});

/* ═══════════════ ABOUT ME INTERACTIVE PORTRAIT ANIMATION ═══════════════ */
(function(){
  const container = document.getElementById('aboutPortraitContainer');
  const img = document.getElementById('aboutPortraitImg');
  const glow = document.getElementById('aboutPortraitGlow');
  const shine = document.getElementById('aboutPortraitShine');
  
  if (!container) return;
  
  let width = container.offsetWidth;
  let height = container.offsetHeight;
  
  window.addEventListener('resize', () => {
    width = container.offsetWidth;
    height = container.offsetHeight;
  });
  
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set custom properties for shine gradient
    const percentX = (x / width) * 100;
    const percentY = (y / height) * 100;
    shine.style.setProperty('--mouse-x', `${percentX}%`);
    shine.style.setProperty('--mouse-y', `${percentY}%`);
    
    // Calculate rotation values (Max 12 degrees)
    const rotateY = ((x - width / 2) / (width / 2)) * 12;
    const rotateX = -((y - height / 2) / (height / 2)) * 12;
    
    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Parallax movement inside
    if (img) {
      const moveX = -((x - width / 2) / (width / 2)) * 10;
      const moveY = -((y - height / 2) / (height / 2)) * 10;
      img.style.transform = `scale(1.08) translate3d(${moveX}px, ${moveY}px, 0)`;
    }
    
    if (glow) {
      const moveX = ((x - width / 2) / (width / 2)) * 15;
      const moveY = ((y - height / 2) / (height / 2)) * 15;
      glow.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }
  });
  
  container.addEventListener('mouseleave', () => {
    container.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    if (img) img.style.transform = 'scale(1.02) translate3d(0px, 0px, 0px)';
    if (glow) glow.style.transform = 'translate3d(0px, 0px, 0px)';
    shine.style.setProperty('--mouse-x', '50%');
    shine.style.setProperty('--mouse-y', '50%');
  });
})();


/* ═══════════════ PROJECT SHOWCASE: FILTERS & MOUSE GLOW ═══════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mouse-glow effect for old-style project cards (if any remain)
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
    });
  });

  // 2. Category filtering logic — targets .project-row (the new editorial layout)
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectRows = document.querySelectorAll('.project-row');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button class
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectRows.forEach(row => {
        const category = row.getAttribute('data-category');
        const matches = (filterValue === 'all' || category === filterValue);

        if (matches) {
          row.classList.remove('hide-filter');
          // Trigger reflow to make sure display is applied before removing fade-out-filter
          void row.offsetWidth;
          row.classList.remove('fade-out-filter');
        } else {
          if (row.classList.contains('hide-filter')) return;
          row.classList.add('fade-out-filter');
          
          setTimeout(() => {
            if (row.classList.contains('fade-out-filter')) {
              row.classList.add('hide-filter');
            }
          }, 400); // 0.4s matching CSS transition duration
        }
      });
    });
  });
});


// ── Project Cursor Pill ──────────────────────────────────────────────────────
(function() {
  const pill = document.getElementById('projectCursorPill');
  if (!pill) return;
  let pillX = 0, pillY = 0, curX = 0, curY = 0;
  document.addEventListener('mousemove', e => { curX = e.clientX; curY = e.clientY; });
  function animatePill() {
    pillX += (curX - pillX) * 0.12;
    pillY += (curY - pillY) * 0.12;
    pill.style.left = pillX + 'px';
    pill.style.top = pillY + 'px';
    requestAnimationFrame(animatePill);
  }
  animatePill();
  document.querySelectorAll('.project-row').forEach(row => {
    row.addEventListener('mouseenter', () => pill.classList.add('visible'));
    row.addEventListener('mouseleave', () => pill.classList.remove('visible'));
  });

})();