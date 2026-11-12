import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  phase: number;
  phaseSpeed: number;
  amplitude: number;
  length: number;
  opacity: number;
  type: 'phasor' | 'sine';
}

interface GridNode { x: number; y: number; }
interface Pulse { segIdx: number; t: number; speed: number; }

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const hiddenRef = useRef(false);

  useEffect(() => {
    const rawCanvas = canvasRef.current;
    if (!rawCanvas) return;
    const canvasEl: HTMLCanvasElement = rawCanvas;
    const rawCtx = canvasEl.getContext('2d');
    if (!rawCtx) return;
    const ctx: CanvasRenderingContext2D = rawCtx;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      const w = canvasEl.offsetWidth, h = canvasEl.offsetHeight;
      canvasEl.width = w * devicePixelRatio;
      canvasEl.height = h * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      ctx.strokeStyle = 'rgba(201,162,75,0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 180) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 160) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      return;
    }

    let width = 0, height = 0;
    const gridNodes: GridNode[] = [];
    const gridSegs: [number, number][] = [];

    function buildGrid() {
      gridNodes.length = 0;
      gridSegs.length = 0;
      const cols = Math.ceil(width / 180) + 1;
      const rows = Math.ceil(height / 160) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          gridNodes.push({ x: c * 180 + 40, y: r * 160 + 40 });
        }
      }
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols - 1; c++) {
          if (Math.random() > 0.25) gridSegs.push([r * cols + c, r * cols + c + 1]);
        }
      }
      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.45) gridSegs.push([r * cols + c, (r + 1) * cols + c]);
        }
      }
    }

    const particles: Particle[] = [];

    function buildParticles() {
      particles.length = 0;
      for (let i = 0; i < 8; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.15,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: 0.018 + Math.random() * 0.015,
          amplitude: 20 + Math.random() * 25,
          length: 80 + Math.random() * 80,
          opacity: 0.04 + Math.random() * 0.04,
          type: i < 3 ? 'phasor' : 'sine',
        });
      }
    }

    const pulses: Pulse[] = [];

    function spawnPulse() {
      if (gridSegs.length === 0) return;
      pulses.push({ segIdx: Math.floor(Math.random() * gridSegs.length), t: 0, speed: 0.004 + Math.random() * 0.004 });
    }

    function resize() {
      width = canvasEl.offsetWidth;
      height = canvasEl.offsetHeight;
      canvasEl.width = width * devicePixelRatio;
      canvasEl.height = height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      buildGrid();
      buildParticles();
    }

    function drawPhasor(p: Particle, t: number) {
      const angle = p.phase + t * p.phaseSpeed;
      const ex = p.x + Math.cos(angle) * p.length;
      const ey = p.y + Math.sin(angle) * p.length;
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.strokeStyle = '#C9A24B';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(ex, ey);
      const hAngle = Math.atan2(ey - p.y, ex - p.x);
      ctx.moveTo(ex, ey);
      ctx.lineTo(ex - 8 * Math.cos(hAngle - 0.4), ey - 8 * Math.sin(hAngle - 0.4));
      ctx.moveTo(ex, ey);
      ctx.lineTo(ex - 8 * Math.cos(hAngle + 0.4), ey - 8 * Math.sin(hAngle + 0.4));
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#C9A24B';
      ctx.fill();
      ctx.restore();
    }

    function drawSine(p: Particle, t: number) {
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.strokeStyle = '#5B8FA8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i <= 64; i++) {
        const x = p.x + (i / 64) * p.length;
        const y = p.y + Math.sin((i / 64) * Math.PI * 2 + p.phase + t * p.phaseSpeed) * p.amplitude;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    }

    function animate(t: number) {
      if (hiddenRef.current) { rafRef.current = requestAnimationFrame(animate); return; }
      ctx.clearRect(0, 0, width, height);

      // SLD grid
      ctx.save();
      ctx.strokeStyle = 'rgba(201,162,75,0.04)';
      ctx.lineWidth = 1;
      for (const [a, b] of gridSegs) {
        if (!gridNodes[a] || !gridNodes[b]) continue;
        ctx.beginPath();
        ctx.moveTo(gridNodes[a].x, gridNodes[a].y);
        ctx.lineTo(gridNodes[b].x, gridNodes[b].y);
        ctx.stroke();
      }
      ctx.fillStyle = 'rgba(201,162,75,0.07)';
      for (const n of gridNodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Pulses
      if (Math.random() < 0.012) spawnPulse();
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.t += pulse.speed;
        if (pulse.t > 1) { pulses.splice(i, 1); continue; }
        const seg = gridSegs[pulse.segIdx];
        if (!seg) { pulses.splice(i, 1); continue; }
        const [a, b] = seg;
        if (!gridNodes[a] || !gridNodes[b]) { pulses.splice(i, 1); continue; }
        const px = gridNodes[a].x + (gridNodes[b].x - gridNodes[a].x) * pulse.t;
        const py = gridNodes[a].y + (gridNodes[b].y - gridNodes[a].y) * pulse.t;
        ctx.save();
        ctx.globalAlpha = 0.5 * (1 - pulse.t);
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#C9A24B';
        ctx.fill();
        ctx.restore();
      }

      // Particles
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -p.length) p.x = width + p.length;
        if (p.x > width + p.length) p.x = -p.length;
        if (p.y < -p.amplitude - 20) p.y = height + 20;
        if (p.y > height + p.amplitude + 20) p.y = -20;
        if (p.type === 'phasor') drawPhasor(p, t * 0.001);
        else drawSine(p, t * 0.001);
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    const onVisChange = () => { hiddenRef.current = document.hidden; };
    document.addEventListener('visibilitychange', onVisChange);
    const ro = new ResizeObserver(resize);
    ro.observe(canvasEl);
    resize();
    for (let i = 0; i < 6; i++) setTimeout(spawnPulse, i * 400);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero__canvas"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
}
