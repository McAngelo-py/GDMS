// Cursor Dot Trail Effect - Simplified & Debugged
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎨 Cursor effect initialized!');
  
  const numDots = 8;
  const dots = [];
  const colors = ['#1e7f4e', '#28a764', '#1d9e75', '#34d399', '#6ee7b7'];
  
  // Create and append dots
  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed;
      width: ${16 - i * 1.5}px;
      height: ${16 - i * 1.5}px;
      background: ${colors[i % colors.length]};
      border-radius: 50%;
      pointer-events: none;
      z-index: ${99999 - i};
      opacity: ${1 - i * 0.12};
      transition: opacity 0.2s ease;
    `;
    document.body.appendChild(dot);
    dots.push({
      el: dot,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });
  }
  
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  
  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Animation loop
  const animate = () => {
    let x = mouseX;
    let y = mouseY;
    
    dots.forEach((dot, index) => {
      // Smoothly move dot
      dot.x += (x - dot.x) * (0.25 - index * 0.02);
      dot.y += (y - dot.y) * (0.25 - index * 0.02);
      
      // Position dot
      dot.el.style.left = `${dot.x}px`;
      dot.el.style.top = `${dot.y}px`;
      dot.el.style.transform = 'translate(-50%, -50%)';
    });
    
    requestAnimationFrame(animate);
  };
  
  animate();
  console.log('✅ Cursor dots should now be visible!');
});