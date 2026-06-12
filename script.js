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
  'nexus': {
    title: 'Project Nexus',
    role: 'Full-Stack Developer & Lead Architect',
    timeline: '8 Weeks',
    github: 'https://github.com/SatyamRaj2007/nexus_coder_world.git',
    demo: 'https://magenta-otter-3efeb5.netlify.app/',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'OpenStreetMap', 'OpenAI API'],
    overview: 'A comprehensive campus super-app designed for IIT Ropar students, faculty, and staff. Integrates daily campus services, AI-powered email summarization, a peer-to-peer marketplace, ride-sharing, lost & found, interactive campus maps, and an academic study planner into a single, unified digital ecosystem.',
    problem: 'Campus life services and tools are fragmented—emails are overwhelming, marketplace and ride-sharing are managed informally via WhatsApp group chats, and campus maps lack details, causing inefficiency and information silos.',
    solution: 'Developed Project Nexus, a unified campus portal built with React 18 and TypeScript. Integrated OpenStreetMap for interactive directions, OpenAI API for automated email summarization and categorization, and localStorage for state persistence across modules.',
    features: [
      'Daily Pulse dashboard featuring AI-powered mail summarization, deadline extraction, and mess menu schedules.',
      'Student Exchange hub integrating a peer-to-peer buy/sell marketplace, ride-sharing coordinator, and lost & found system.',
      'Explorer\'s Guide providing an interactive campus map with OpenStreetMap, location reviews, and directions.',
      'Academic Cockpit detailing course timetables, assignments, and an AI-powered strategic study planner.'
    ],
    challenges: 'Aggregating diverse services while maintaining seamless client performance on mobile screens. Solved by designing centralized React Context managers, local storage caching, and optimizing rendering layers for map components.',
    learnings: 'Mastered leaflet mapping integration, token-based authentication flows, client-side global search algorithms, and responsive mobile-first SaaS architecture.',
    achievement: 'Developed a feature-complete campus super-app with integrated AI utilities, interactive maps, and P2P exchange platforms.',
    image: 'img_nexus_pulse.png',
    images: ['img_nexus_pulse.png', 'img_nexus_exchange.png', 'img_nexus_explorer.png', 'img_nexus_library.png']
  },
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
    image: 'img_movie_check.jpg',
    images: [
      'img_movie_check.jpg',
      'img_movie_stats.jpg'
    ]
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
      let currentYear = "2025";
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
  document.addEventListener('click', function(e) {
    if (menu.classList.contains('open')) {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        btn.classList.remove('active');
        menu.classList.remove('open');
      }
    }
  });
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

/* ═══════════════ SKILLS MOSAIC GALAXY SYSTEM ═══════════════ */
const skillsData = {
  languages: {
    title: "Programming Languages",
    filterKey: "languages",
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
        projects: ["Bank Management System", "Movie Ticket Booking"],
        featured: true
      },
      {
        name: "JavaScript",
        level: 85,
        mastery: "Advanced",
        usage: 5,
        achievement: "Engineered single-page application router and custom trailing cursor renderer.",
        desc: "Engine for interactive frontends and scalable backend servers. Experienced with ES6+, asynchronous programming, closures, and Event Loop internals.",
        topics: ["ES6+", "Asynchronous JS (Promises, Async/Await)", "DOM Manipulation", "Event Loop", "V8 Engine Internals"],
        projects: ["SkillSurfer Platform", "Project Nexus"]
      },
      {
        name: "Python",
        level: 80,
        mastery: "Advanced",
        usage: 4,
        achievement: "Trained Convolutional Neural Networks achieving 95%+ classification accuracy.",
        desc: "Language of choice for data scripting, automation, and machine learning models. Skilled in mathematical libraries and scripting pipelines.",
        topics: ["Data Analysis (Pandas, NumPy)", "File I/O", "Automation Scripts", "TensorFlow & PyTorch", "Flask & FastAPI"],
        projects: ["Crop Disease Detector"]
      },
      {
        name: "SQL",
        level: 75,
        mastery: "Proficient",
        usage: 4,
        achievement: "Optimized multi-table joins and defined relational schemas for e-commerce stores.",
        desc: "Relational database querying language. Proficient in database normalization, complex joins, indexing, and transaction safety.",
        topics: ["Relational Algebra", "Database Joins & Subqueries", "Indexing & Optimization", "ACID Compliance", "Schema Design"],
        projects: []
      }
    ]
  },
  webdev: {
    title: "Web Development",
    filterKey: "webdev",
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
        projects: ["Portfolio Website"],
        featured: true
      },
      {
        name: "React.js",
        level: 85,
        mastery: "Advanced",
        usage: 5,
        achievement: "Built stateful shopping carts and real-time dashboard analytics panels.",
        desc: "Component-driven frontend library. Proficient in functional components, hooks, custom state management (Context, Redux), and virtual DOM rendering optimization.",
        topics: ["React Hooks", "Context API & State Management", "Virtual DOM", "Component Lifecycle", "Performance Optimization (useMemo, useCallback)"],
        projects: ["SkillSurfer Platform", "Project Nexus"]
      },
      {
        name: "Node.js",
        level: 78,
        mastery: "Proficient",
        usage: 4,
        achievement: "Engineered secure backend APIs handling user authentication and payment intents.",
        desc: "JavaScript runtime for building scalable server-side applications. Skilled in Express routing, middleware, authentication gates, and REST API design.",
        topics: ["Express.js Framework", "Middleware Architecture", "Event-Driven Programming", "HTTP Protocols & Security Headers", "npm & Package Management"],
        projects: []
      },
      {
        name: "REST APIs",
        level: 85,
        mastery: "Advanced",
        usage: 5,
        achievement: "Integrated Stripe payment gateways and implemented robust token-based authorization.",
        desc: "Architectural style for designing network applications. Experienced in designing robust endpoints, secure JWT-based auth, payload validation, and HTTP status handling.",
        topics: ["HTTP Methods & Status Codes", "JWT Authentication", "Payload Validation", "CORS & Security", "API Documentation"],
        projects: ["Project Nexus"]
      }
    ]
  },
  databases: {
    title: "Databases",
    filterKey: "databases",
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
        projects: []
      },
      {
        name: "PostgreSQL",
        level: 78,
        mastery: "Advanced",
        usage: 4,
        achievement: "Designed normalized tournament schemas and robust database constraints.",
        desc: "Advanced relational database system. Skilled in structural design, indexing, foreign keys, transaction handling, and SQL queries.",
        topics: ["Relational Schemas", "Foreign Key Constraints", "JSONB Support", "Views & Triggers", "Complex Queries"],
        projects: ["SkillSurfer Platform"],
        featured: true
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
        projects: []
      }
    ]
  },
  tools: {
    title: "Tools & Platforms",
    filterKey: "tools",
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
        projects: ["All Projects"],
        featured: true
      },
      {
        name: "Docker",
        level: 70,
        mastery: "Proficient",
        usage: 3,
        achievement: "Containerized multi-container Web apps for consistent local environments.",
        desc: "Containerization platform to build and ship applications. Familiar with writing Dockerfiles, defining compose networks, managing volumes, and deploying isolated stacks.",
        topics: ["Dockerfiles", "Docker Compose", "Container Networking", "Volume Persistence", "Image Optimization"],
        projects: []
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
    filterKey: "aicore",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
    items: [
      {
        name: "AI / ML Concepts",
        level: 75,
        mastery: "Advanced",
        usage: 4,
        achievement: "Applied transfer learning to ResNet architectures for crop health analysis.",
        desc: "Core concepts of artificial intelligence and machine learning. Experienced in neural networks, computer vision, data preparation, and training deep learning models.",
        topics: ["Supervised Learning", "Neural Network Layers", "Convolutional Neural Networks (CNN)", "Model Tuning & Regularization", "Computer Vision Fundamentals"],
        projects: ["Crop Disease Detector"],
        featured: true
      },
      {
        name: "Data Structures",
        level: 88,
        mastery: "Advanced",
        usage: 5,
        achievement: "Solved complex algorithmic problems with optimized time/space bounds.",
        desc: "Foundational concepts for writing efficient logic. Proficient in binary search, trees, sorting algorithms, graphs, hash tables, and big-O analysis.",
        topics: ["Linked Lists & Stacks", "Trees & Graphs", "Sorting & Searching Algorithms", "Big-O Notation", "Dynamic Programming"],
        projects: ["Movie Ticket Booking", "Bank Management System"]
      },
      {
        name: "OOP",
        level: 90,
        mastery: "Expert",
        usage: 5,
        achievement: "Designed modular banking system adhering to clean RAII and encapsulation.",
        desc: "Software design paradigm centering around objects. Expert in abstraction, encapsulation, inheritance, polymorphism, design patterns, and solid design principles.",
        topics: ["Abstraction & Encapsulation", "Inheritance & Polymorphism", "SOLID Design Principles", "Design Patterns", "RAII Memory Management"],
        projects: ["Bank Management System", "Movie Ticket Booking"]
      },
      {
        name: "Software Engineering",
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

(function() {
  const filterStrip = document.getElementById('skillsFilterStrip');
  const container = document.getElementById('skillsConstellationContainer');
  const canvas = document.getElementById('skillsConstellationCanvas');
  const drawerOverlay = document.getElementById('skillDrawerOverlay');
  const drawerClose = document.getElementById('skillDrawerClose');
  const drawerInner = document.getElementById('skillDrawerInner');

  if (!filterStrip || !canvas || !drawerInner || !drawerOverlay || !drawerClose) return;

  const hintEl = container.querySelector('.skills-map-hint');
  const isMobileHint = window.matchMedia('(max-width: 768px)').matches;
  if (hintEl && isMobileHint) {
    hintEl.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--primary);"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      Drag to pan • Pinch to zoom • Tap nodes to explore
    `;
  }

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;

  let activeFilter = 'all';
  let hoveredNode = null;
  let transitionOpacity = 1.0;

  // Zoom/pan state (centered and scaled for left-to-right tree)
  let panX = 60;
  let panY = 0;
  let scale = 0.8;
  
  let targetPanX = 60;
  let targetPanY = 0;
  let targetScale = 0.8;

  function resetView() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      targetScale = Math.min(0.45, (width - 120) / 530);
      targetPanX = 25;
      targetPanY = 0;
    } else {
      targetScale = 0.8;
      targetPanX = 60;
      targetPanY = 0;
    }
    scale = targetScale;
    panX = targetPanX;
    panY = targetPanY;
  }

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let dragX = 0;
  let dragY = 0;
  let dragDistance = 0;

  // Helper for cubic Bezier evaluation (flowing left-to-right)
  function getBezierPoint(t, p0, p1, p2, p3) {
    const oneMinusT = 1 - t;
    const term0 = oneMinusT * oneMinusT * oneMinusT;
    const term1 = 3 * oneMinusT * oneMinusT * t;
    const term2 = 3 * oneMinusT * t * t;
    const term3 = t * t * t;
    return {
      x: term0 * p0.x + term1 * p1.x + term2 * p2.x + term3 * p3.x,
      y: term0 * p0.y + term1 * p1.y + term2 * p2.y + term3 * p3.y
    };
  }

  // Color mappings
  function getMasteryColor(mastery) {
    const m = mastery.toLowerCase();
    if (m === 'expert') return '#dfc59f'; // Gold
    if (m === 'advanced') return '#a8c4b8'; // Seafoam
    return '#9ea8bf'; // Slate Blue
  }

  function hexToRGBA(hex, alpha) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    return result 
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`
      : hex;
  }

  // Define nodes list
  const nodes = [];
  const links = [];

  // 1. Center node (ROOT)
  const centerNode = {
    id: 'center',
    type: 'center',
    label: 'ROOT',
    x: -350,
    y: 0,
    radius: 9,
    seed: Math.random() * 100,
    color: '#dfc59f' // Gold matching the Champagne-Gold theme
  };
  nodes.push(centerNode);

  // Map categories to vertical positions for hierarchical left-to-right tree
  const catMetadata = {
    languages: { y: -280, label: 'Languages' },
    webdev: { y: -140, label: 'Web Development' },
    databases: { y: 0, label: 'Databases' },
    tools: { y: 140, label: 'Tools & Platforms' },
    aicore: { y: 280, label: 'AI/ML & Core CS' }
  };

  let skillCount = 0;

  // Build graph data
  Object.entries(skillsData).forEach(([key, cat]) => {
    const meta = catMetadata[key];
    
    const hubNode = {
      id: 'hub_' + key,
      type: 'hub',
      key: key,
      label: cat.title,
      x: -80,
      y: meta.y,
      radius: 7,
      seed: Math.random() * 100,
      color: '#dfc59f', // Gold
      catData: cat
    };
    nodes.push(hubNode);
    
    // Connect center to hub
    links.push({
      source: centerNode,
      target: hubNode,
      type: 'core-hub',
      category: key
    });

    const items = cat.items;

    items.forEach((skill, idx) => {
      // Calculate skill Y coordinates based on global index to keep spacing uniform (from -332.5 to 332.5)
      const skillY = -332.5 + skillCount * 35;
      skillCount++;
      
      const skillNode = {
        id: 'skill_' + skill.name,
        type: 'skill',
        name: skill.name,
        category: key,
        x: 180,
        y: skillY,
        radius: 6,
        seed: Math.random() * 100,
        color: '#f5e4cf', // Champagne Gold
        data: skill,
        catData: cat
      };
      nodes.push(skillNode);

      // Connect hub to skill
      links.push({
        source: hubNode,
        target: skillNode,
        type: 'hub-skill',
        category: key
      });
    });
  });

  // Background stars
  const stars = [];
  for (let i = 0; i < 80; i++) {
    stars.push({
      x: (Math.random() - 0.5) * 1200,
      y: (Math.random() - 0.5) * 1200,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      twinkleSpeed: 0.003 + Math.random() * 0.007,
      dir: Math.random() > 0.5 ? 1 : -1
    });
  }

  // Path particles
  const particles = [];
  links.forEach(link => {
    particles.push({
      link: link,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.003
    });
    particles.push({
      link: link,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.003
    });
  });

  // Shooting stars system
  const shootingStars = [];

  let isInitialized = false;

  // Resize canvas
  function resize() {
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    width = rect.width;
    height = rect.height;

    if (!isInitialized && width > 0) {
      resetView();
      isInitialized = true;
    }
  }
  window.addEventListener('resize', resize);
  resize();

  // Set up filter pills click handler
  function buildFilterStrip() {
    filterStrip.innerHTML = '';

    const allPill = document.createElement('button');
    allPill.className = 'skills-filter-pill active';
    allPill.textContent = 'All Skills';
    allPill.dataset.filter = 'all';
    allPill.addEventListener('click', () => setFilter('all', allPill));
    filterStrip.appendChild(allPill);

    Object.entries(skillsData).forEach(([key, cat]) => {
      const pill = document.createElement('button');
      pill.className = 'skills-filter-pill';
      pill.innerHTML = cat.icon + `<span style="margin-left:8px">${cat.title}</span>`;
      pill.style.display = 'flex';
      pill.style.alignItems = 'center';
      pill.dataset.filter = key;
      pill.addEventListener('click', () => setFilter(key, pill));
      filterStrip.appendChild(pill);
    });
  }

  function setFilter(key, clickedPill) {
    // Set transition opacity to 0 to trigger a smooth fade transition
    transitionOpacity = 0.0;

    activeFilter = key;
    document.querySelectorAll('.skills-filter-pill').forEach(p => p.classList.remove('active'));
    
    let targetPill = clickedPill;
    if (!targetPill) {
      targetPill = document.querySelector(`.skills-filter-pill[data-filter="${key}"]`);
    }
    if (targetPill) targetPill.classList.add('active');

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (key === 'all') {
      if (isMobile) {
        targetScale = Math.min(0.45, (width - 120) / 530);
        targetPanX = 25;
        targetPanY = 0;
      } else {
        targetPanX = 60;
        targetPanY = 0;
        targetScale = 0.8;
      }
    } else {
      // Find the hub node
      const hub = nodes.find(n => n.type === 'hub' && n.key === key);
      if (hub) {
        if (isMobile) {
          targetScale = 0.75;
          targetPanX = 35 - hub.x * targetScale - width / 2;
          targetPanY = -hub.y * targetScale;
        } else {
          targetScale = 1.25;
          targetPanX = -hub.x * targetScale - 30; // Shift left slightly to make children fit beautifully
          targetPanY = -hub.y * targetScale;
        }
      }
    }
  }

  // Conversion helpers (screen space to map space)
  function getMapCoords(screenX, screenY) {
    const rect = canvas.getBoundingClientRect();
    const x = screenX - rect.left;
    const y = screenY - rect.top;
    
    const mx = (x - panX - width / 2) / scale;
    const my = (y - panY - height / 2) / scale;
    return { x: mx, y: my };
  }

  // Hit testing
  function getNodeAtCoords(x, y) {
    const time = performance.now();
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      const floatAmp = node.type === 'skill' ? 4.5 : 2.5;
      const floatX = Math.cos(time * 0.001 + node.seed) * floatAmp;
      const floatY = Math.sin(time * 0.00085 + node.seed) * floatAmp;
      
      const nx = node.x + floatX;
      const ny = node.y + floatY;
      
      const dx = x - nx;
      const dy = y - ny;
      const distSq = dx * dx + dy * dy;
      
      const hitRadius = node.radius + 12;
      if (distSq < hitRadius * hitRadius) {
        return node;
      }
    }
    return null;
  }

  // Event handlers
  canvas.addEventListener('mousemove', e => {
    const coords = getMapCoords(e.clientX, e.clientY);
    hoveredNode = getNodeAtCoords(coords.x, coords.y);
    
    if (hoveredNode) {
      canvas.style.cursor = 'pointer';
    } else {
      canvas.style.cursor = isDragging ? 'grabbing' : 'grab';
    }

    if (isDragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      
      const maxPanX = width * 0.5;
      const maxPanY = height * 0.5;
      
      targetPanX = Math.max(-maxPanX, Math.min(maxPanX, dragX + dx));
      targetPanY = Math.max(-maxPanY, Math.min(maxPanY, dragY + dy));
      dragDistance += Math.sqrt(dx*dx + dy*dy);
    }
  });

  canvas.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    dragX = panX;
    dragY = panY;
    dragDistance = 0;
    canvas.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
    
    if (dragDistance < 6) {
      const coords = getMapCoords(e.clientX, e.clientY);
      const clicked = getNodeAtCoords(coords.x, coords.y);
      if (clicked) {
        handleNodeClick(clicked);
      }
    }
  });

  // Toast warning display timeout variable
  let toastTimeout = null;
  const scrollToast = document.getElementById('skillsScrollToast');

  canvas.addEventListener('wheel', e => {
    // Only intercept scroll and zoom if Ctrl or Cmd key is held
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const zoomFactor = 1.08;
      let nextScale = targetScale;
      
      if (e.deltaY < 0) {
        nextScale *= zoomFactor;
      } else {
        nextScale /= zoomFactor;
      }
      
      nextScale = Math.max(0.5, Math.min(2.0, nextScale));
      
      targetPanX = mouseX - width / 2 - (mouseX - width / 2 - targetPanX) * (nextScale / targetScale);
      targetPanY = mouseY - height / 2 - (mouseY - height / 2 - targetPanY) * (nextScale / targetScale);
      
      const maxPanX = width * 0.5;
      const maxPanY = height * 0.5;
      targetPanX = Math.max(-maxPanX, Math.min(maxPanX, targetPanX));
      targetPanY = Math.max(-maxPanY, Math.min(maxPanY, targetPanY));
      
      targetScale = nextScale;
    } else {
      // Show warning toast that Ctrl/Cmd is required to zoom
      if (scrollToast) {
        scrollToast.classList.add('visible');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          scrollToast.classList.remove('visible');
        }, 1800);
      }
    }
  }, { passive: false });

  // Touch support
  let touchStartDist = 0;
  let touchStartScale = 1;
  let isMobileSwipeVertical = false;
  
  canvas.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
      isDragging = true;
      isMobileSwipeVertical = false;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      dragX = panX;
      dragY = panY;
      dragDistance = 0;
    } else if (e.touches.length === 2) {
      isDragging = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartDist = Math.sqrt(dx*dx + dy*dy);
      touchStartScale = targetScale;
    }
  }, { passive: true });

  canvas.addEventListener('touchmove', e => {
    if (isDragging && e.touches.length === 1) {
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      
      // Determine if swipe is vertical on first movement
      if (dragDistance < 10) {
        if (Math.abs(dy) > Math.abs(dx) * 1.3) {
          isMobileSwipeVertical = true;
          isDragging = false;
          return;
        }
      }
      
      if (!isMobileSwipeVertical) {
        const maxPanX = width * 0.5;
        const maxPanY = height * 0.5;
        
        targetPanX = Math.max(-maxPanX, Math.min(maxPanX, dragX + dx));
        targetPanY = Math.max(-maxPanY, Math.min(maxPanY, dragY + dy));
        dragDistance += Math.sqrt(dx*dx + dy*dy);
      }
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (touchStartDist > 0) {
        const factor = dist / touchStartDist;
        targetScale = Math.max(0.5, Math.min(2.0, touchStartScale * factor));
      }
    }
  }, { passive: true });

  canvas.addEventListener('touchend', e => {
    if (isDragging) {
      isDragging = false;
      if (dragDistance < 8 && e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        const coords = getMapCoords(touch.clientX, touch.clientY);
        const clicked = getNodeAtCoords(coords.x, coords.y);
        if (clicked) {
          handleNodeClick(clicked);
        }
      }
    }
  }, { passive: true });

  function getActiveSkillsList() {
    return nodes.filter(n => n.type === 'skill' && (activeFilter === 'all' || n.category === activeFilter));
  }

  function handleNodeClick(node) {
    if (node.type === 'center') {
      setFilter('all');
    } else if (node.type === 'hub') {
      setFilter(node.key);
    } else if (node.type === 'skill') {
      // Focus/pan exactly on the selected skill node
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      targetScale = isMobile ? 0.85 : 1.35;
      targetPanX = isMobile ? (50 - node.x * targetScale - width / 2) : (-node.x * targetScale);
      targetPanY = isMobile ? (-node.y * targetScale - 90) : (-node.y * targetScale);
      openDrawer(node.data, node.catData);
    }
  }

  function openDrawer(skill, cat) {
    const activeSkills = getActiveSkillsList();
    const currentIndex = activeSkills.findIndex(s => s.name === skill.name);
    
    const prevBtnDisabled = currentIndex <= 0 ? 'disabled style="opacity: 0.35; pointer-events: none;"' : '';
    const nextBtnDisabled = currentIndex >= activeSkills.length - 1 ? 'disabled style="opacity: 0.35; pointer-events: none;"' : '';

    const topicsHTML = skill.topics.map(t => `<span class="drawer-topic-chip">${t}</span>`).join('');
    const projectsHTML = skill.projects.map(proj => `
      <a href="#projects" class="drawer-project-pill" data-project-target="${proj}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        ${proj}
      </a>
    `).join('');

    drawerInner.innerHTML = `
      <!-- Previous / Next Navigation -->
      <div class="drawer-nav-bar">
        <button class="drawer-nav-btn prev-skill-btn" ${prevBtnDisabled}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; display: inline-block; vertical-align: middle;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          <span style="vertical-align: middle;">Prev</span>
        </button>
        <span class="drawer-nav-index">
          ${currentIndex >= 0 ? currentIndex + 1 : 1} / ${activeSkills.length}
        </span>
        <button class="drawer-nav-btn next-skill-btn" ${nextBtnDisabled}>
          <span style="vertical-align: middle;">Next</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 6px; display: inline-block; vertical-align: middle;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>

      <div class="drawer-header">
        <div class="drawer-icon">${cat.icon}</div>
        <div class="drawer-title-block">
          <div class="drawer-skill-name">${skill.name}</div>
          <div class="drawer-skill-cat">${cat.title}</div>
        </div>
        <span class="skill-mastery-label drawer-mastery ${skill.mastery.toLowerCase()}">${skill.mastery}</span>
      </div>

      <p class="drawer-desc">${skill.desc}</p>

      <div class="drawer-achievement">
        <div class="drawer-achievement-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <p>${skill.achievement}</p>
      </div>

      <div class="drawer-section-label">Key Topics</div>
      <div class="drawer-topics">${topicsHTML}</div>

      <div class="drawer-section-label">Featured In Projects</div>
      <div class="drawer-projects">${projectsHTML}</div>
    `;

    // Hook Next/Prev actions
    const prevBtn = drawerInner.querySelector('.prev-skill-btn');
    const nextBtn = drawerInner.querySelector('.next-skill-btn');

    if (prevBtn && currentIndex > 0) {
      prevBtn.addEventListener('click', () => {
        const prevSkillNode = activeSkills[currentIndex - 1];
        handleNodeClick(prevSkillNode);
      });
    }

    if (nextBtn && currentIndex < activeSkills.length - 1) {
      nextBtn.addEventListener('click', () => {
        const nextSkillNode = activeSkills[currentIndex + 1];
        handleNodeClick(nextSkillNode);
      });
    }

    drawerInner.querySelectorAll('[data-project-target]').forEach(link => {
      link.addEventListener('click', ev => {
        ev.preventDefault();
        closeDrawer();
        setTimeout(() => highlightProject(link.getAttribute('data-project-target')), 150);
      });
    });

    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function highlightProject(projectName) {
    if (projectName === "All Projects") {
      const section = document.getElementById('projects');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      if (targetRow.classList.contains('hide-filter') || targetRow.classList.contains('fade-out-filter')) {
        const allBtn = document.querySelector('.project-filter-btn[data-filter="all"]');
        if (allBtn) allBtn.click();
      }
      setTimeout(() => {
        targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetRow.classList.add('project-highlight-pulse');
        setTimeout(() => targetRow.classList.remove('project-highlight-pulse'), 6000);
      }, 150);
    } else {
      const section = document.getElementById('projects');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function closeDrawer() {
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
    
    // Re-center view on category or all
    if (activeFilter === 'all') {
      resetView();
    } else {
      const hub = nodes.find(n => n.type === 'hub' && n.key === activeFilter);
      if (hub) {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        targetScale = isMobile ? 0.75 : 1.25;
        targetPanX = isMobile ? (35 - hub.x * targetScale - width / 2) : (-hub.x * targetScale - 30);
        targetPanY = -hub.y * targetScale;
      }
    }
  }

  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay && drawerOverlay.addEventListener('click', e => {
    if (e.target === drawerOverlay) closeDrawer();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Render loop
  function render() {
    // Clamp targets before interpolating to ensure boundaries are maintained
    const maxPanX = width * 0.5;
    const maxPanY = height * 0.5;
    targetPanX = Math.max(-maxPanX, Math.min(maxPanX, targetPanX));
    targetPanY = Math.max(-maxPanY, Math.min(maxPanY, targetPanY));
    targetScale = Math.max(0.5, Math.min(2.0, targetScale));

    panX += (targetPanX - panX) * 0.085;
    panY += (targetPanY - panY) * 0.085;
    scale += (targetScale - scale) * 0.085;

    // Interpolate transition opacity for filter fade effect
    if (transitionOpacity < 1.0) {
      transitionOpacity += (1.0 - transitionOpacity) * 0.12;
      if (transitionOpacity > 0.99) transitionOpacity = 1.0;
    }

    ctx.clearRect(0, 0, width, height);

    const time = performance.now();

    // Ambient living cosmic nebula atmosphere (Space-Black & Slate theme)
    const glowX = width / 2 + Math.cos(time * 0.00018) * 55;
    const glowY = height / 2 + Math.sin(time * 0.00012) * 35;
    const bgGlow = ctx.createRadialGradient(glowX, glowY, 20, glowX, glowY, Math.max(width, height));
    bgGlow.addColorStop(0, '#07090c'); // Deeper Slate Black core
    bgGlow.addColorStop(0.5, '#030406'); // Pitch Space Black
    bgGlow.addColorStop(1, '#010203');
    ctx.fillStyle = bgGlow;
    ctx.fillRect(0, 0, width, height);

    stars.forEach(star => {
      star.alpha += star.dir * star.twinkleSpeed;
      if (star.alpha >= 0.95) {
        star.alpha = 0.95;
        star.dir = -1;
      } else if (star.alpha <= 0.15) {
        star.alpha = 0.15;
        star.dir = 1;
      }
      ctx.fillStyle = `rgba(223, 197, 159, ${star.alpha * 0.6})`;
      ctx.beginPath();
      const sx = width / 2 + star.x + panX * 0.25;
      const sy = height / 2 + star.y + panY * 0.25;
      
      ctx.arc(sx, sy, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    // Update and draw shooting stars in the background
    if (shootingStars.length < 2 && Math.random() < 0.006) {
      const angle = Math.PI * 0.25 + (Math.random() - 0.5) * 0.25;
      const speed = 7 + Math.random() * 9;
      shootingStars.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length: 50 + Math.random() * 80,
        width: 0.8 + Math.random() * 1.0,
        alpha: 1.0,
        decay: 0.015 + Math.random() * 0.015
      });
    }

    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const ss = shootingStars[i];
      ss.x += ss.dx;
      ss.y += ss.dy;
      ss.alpha -= ss.decay;
      if (ss.alpha <= 0) {
        shootingStars.splice(i, 1);
        continue;
      }

      // Parallax offset matching stars depth
      const sx = ss.x + panX * 0.15;
      const sy = ss.y + panY * 0.15;

      const grad = ctx.createLinearGradient(
        sx, sy,
        sx - ss.dx * (ss.length / 10), sy - ss.dy * (ss.length / 10)
      );
      grad.addColorStop(0, `rgba(255, 255, 255, ${ss.alpha})`);
      grad.addColorStop(0.15, `rgba(223, 197, 159, ${ss.alpha * 0.7})`);
      grad.addColorStop(1, 'rgba(223, 197, 159, 0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = ss.width;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx - ss.dx * (ss.length / 10), sy - ss.dy * (ss.length / 10));
      ctx.stroke();
    }

    nodes.forEach(node => {
      // Gentle sway animation for a clean tree structure feel
      const floatAmp = node.type === 'skill' ? 1.5 : 1.0;
      node.floatX = Math.cos(time * 0.001 + node.seed) * floatAmp;
      node.floatY = Math.sin(time * 0.00085 + node.seed) * floatAmp;
      
      node.rx = node.x + node.floatX;
      node.ry = node.y + node.floatY;
    });

    ctx.save();
    ctx.translate(panX + width / 2, panY + height / 2);
    ctx.scale(scale, scale);
    ctx.globalAlpha = transitionOpacity;

    // Render connection S-curves (Gold curves theme)
    links.forEach(link => {
      const s = link.source;
      const t = link.target;

      let opacity = 0.18;
      if (activeFilter === 'all') {
        opacity = link.type === 'core-hub' ? 0.3 : 0.2;
      } else if (link.category === activeFilter) {
        opacity = 0.65;
      }

      // Spotlight effect on hovered node connections
      if (hoveredNode) {
        const isConnected = (s.id === hoveredNode.id || t.id === hoveredNode.id);
        if (isConnected) {
          opacity = 0.85;
        } else {
          opacity *= 0.15; // Dim unrelated lines
        }
      }

      // Draw curve with translucent gold matching the theme
      ctx.strokeStyle = `rgba(223, 197, 159, ${opacity})`;
      ctx.lineWidth = hoveredNode && (s.id === hoveredNode.id || t.id === hoveredNode.id) ? 1.8 : 1.0;
      
      const midX = s.rx + (t.rx - s.rx) * 0.5;
      ctx.beginPath();
      ctx.moveTo(s.rx, s.ry);
      ctx.bezierCurveTo(midX, s.ry, midX, t.ry, t.rx, t.ry);
      ctx.stroke();
    });

    // Render particles flowing along Bezier curves (Gold particles theme)
    particles.forEach(p => {
      const link = p.link;
      const s = link.source;
      const t = link.target;

      if (activeFilter !== 'all' && link.category !== activeFilter) return;

      p.progress += p.speed;
      if (p.progress >= 1) p.progress = 0;

      const midX = s.rx + (t.rx - s.rx) * 0.5;
      const pt = getBezierPoint(p.progress, 
        { x: s.rx, y: s.ry },
        { x: midX, y: s.ry },
        { x: midX, y: t.ry },
        { x: t.rx, y: t.ry }
      );
      const px = pt.x;
      const py = pt.y;

      let alpha = 0.45;
      if (hoveredNode && (s.id === hoveredNode.id || t.id === hoveredNode.id)) {
        alpha = 0.95;
      }

      ctx.fillStyle = `rgba(223, 197, 159, ${alpha})`;
      ctx.shadowColor = '#dfc59f';
      ctx.shadowBlur = 6;
      
      ctx.beginPath();
      ctx.arc(px, py, 1.8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;
    });

    nodes.forEach(node => {
      let opacity = 1.0;
      if (activeFilter !== 'all') {
        if (node.type === 'center') opacity = 0.3;
        else if (node.type === 'hub' && node.key !== activeFilter) opacity = 0.22;
        else if (node.type === 'skill' && node.category !== activeFilter) opacity = 0.15;
      }

      // Spotlight effect on nodes when hovering
      if (hoveredNode) {
        const isHovered = hoveredNode.id === node.id;
        const isConnected = links.some(l => 
          (l.source.id === hoveredNode.id && l.target.id === node.id) ||
          (l.target.id === hoveredNode.id && l.source.id === node.id)
        );
        
        if (isHovered) {
          opacity = 1.0;
        } else if (isConnected) {
          opacity = 0.9;
        } else {
          opacity *= 0.18; // Dim unrelated nodes
        }
      }

      const isHovered = hoveredNode && hoveredNode.id === node.id;
      const radius = isHovered ? node.radius * 1.25 : node.radius;

      // Draw concentric expanding energy waves under hovered node
      if (isHovered && opacity > 0.3) {
        const pulseCycle = 1800;
        const tCycle1 = (time % pulseCycle) / pulseCycle;
        const r1 = radius * (1.0 + tCycle1 * 1.3);
        const a1 = (1.0 - tCycle1) * 0.35 * opacity;

        ctx.strokeStyle = hexToRGBA(node.color, a1);
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(node.rx, node.ry, r1, 0, Math.PI * 2);
        ctx.stroke();

        const tCycle2 = ((time + pulseCycle / 2) % pulseCycle) / pulseCycle;
        const r2 = radius * (1.0 + tCycle2 * 1.3);
        const a2 = (1.0 - tCycle2) * 0.35 * opacity;

        ctx.strokeStyle = hexToRGBA(node.color, a2);
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(node.rx, node.ry, r2, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Glowing dot shadow
      ctx.shadowColor = node.color;
      ctx.shadowBlur = isHovered ? 18 : 8;

      // Draw the solid dot
      ctx.fillStyle = `rgba(7, 9, 12, ${opacity})`;
      ctx.strokeStyle = node.color;
      ctx.lineWidth = isHovered ? 2.5 : 1.5;
      
      ctx.beginPath();
      ctx.arc(node.rx, node.ry, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Inner dot matching target design
      ctx.fillStyle = node.color;
      ctx.beginPath();
      ctx.arc(node.rx, node.ry, radius * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Disable shadow blur for text drawing to keep it sharp
      ctx.shadowBlur = 0;

      // Text label drawing
      let textOpacity = opacity;
      if (activeFilter !== 'all' && node.category !== activeFilter && node.type !== 'center') {
        textOpacity = 0.15;
      } else if (!isHovered && activeFilter === 'all') {
        textOpacity = 0.75;
      } else {
        textOpacity = 1.0;
      }

      // Draw label text (Soft Ivory normally, highlighted Gold on hover)
      if (isHovered) {
        ctx.fillStyle = `rgba(223, 197, 159, ${textOpacity})`;
      } else {
        ctx.fillStyle = `rgba(244, 243, 240, ${textOpacity})`;
      }

      if (node.type === 'center') {
        ctx.font = `bold 12px 'Plus Jakarta Sans', sans-serif`;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.rx - 15, node.ry);
      } else if (node.type === 'hub') {
        ctx.font = `bold 11px 'Plus Jakarta Sans', sans-serif`;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.rx - 15, node.ry);
      } else {
        ctx.font = node.data.featured 
          ? `bold 11px 'Plus Jakarta Sans', sans-serif`
          : `500 10.5px 'Plus Jakarta Sans', sans-serif`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, node.rx + 15, node.ry);
      }
    });

    ctx.restore();

    requestAnimationFrame(render);
  }

  // Floating Controls Event Listeners
  const btnZoomIn = document.getElementById('skillsZoomIn');
  const btnZoomOut = document.getElementById('skillsZoomOut');
  const btnReset = document.getElementById('skillsReset');

  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', () => {
      let nextScale = Math.min(2.0, targetScale * 1.25);
      targetPanX = targetPanX * (nextScale / targetScale);
      targetPanY = targetPanY * (nextScale / targetScale);
      targetScale = nextScale;
    });
  }

  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', () => {
      let nextScale = Math.max(0.5, targetScale / 1.25);
      targetPanX = targetPanX * (nextScale / targetScale);
      targetPanY = targetPanY * (nextScale / targetScale);
      targetScale = nextScale;
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      resetView();
      activeFilter = 'all';
      document.querySelectorAll('.skills-filter-pill').forEach(p => p.classList.remove('active'));
      const allPill = document.querySelector('.skills-filter-pill[data-filter="all"]');
      if (allPill) allPill.classList.add('active');
    });
  }

  buildFilterStrip();
  requestAnimationFrame(render);
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
    
    // Links - only show buttons if valid link is provided
    const githubLink = document.getElementById('caseStudyGithub');
    const demoLink = document.getElementById('caseStudyDemo');
    
    if (githubLink) {
      if (p.github && p.github !== '#') {
        githubLink.style.display = 'inline-flex';
        githubLink.href = p.github;
      } else {
        githubLink.style.display = 'none';
      }
    }
    
    if (demoLink) {
      if (p.demo && p.demo !== '#') {
        demoLink.style.display = 'inline-flex';
        demoLink.href = p.demo;
      } else {
        demoLink.style.display = 'none';
      }
    }
    
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
            // Set event handler before updating src to prevent race conditions
            imgEl.onload = () => {
              imgEl.classList.remove('changing');
            };
            imgEl.src = targetSrc;
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
  
  // Immediately handle routing if script loads after DOM load or hash is already set
  if (window.location.hash) {
    handleRouting();
  }

  // Close handlers
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Simply clear the hash which automatically triggers hashchange and closes the modal
      window.location.hash = '';
    });
  }
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      window.location.hash = '';
    }
  });

  // Esc key closes the overlay
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
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

  // Disable cursor follower pill on touch devices where hover is simulated
  if (!window.matchMedia('(pointer: fine)').matches) {
    pill.style.display = 'none';
    return;
  }

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