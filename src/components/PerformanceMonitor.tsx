import React, { useEffect, useState } from 'react';

interface PerformanceStats {
  fps: number;
  memoryUsage: number;
  loadTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 0;

    const calculateFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        
        // Update stats
        setStats(prev => ({
          ...prev,
          fps,
          memoryUsage: (performance as any).memory ? 
            Math.round((performance as any).memory.usedJSHeapSize / 1048576) : 0,
          loadTime: Math.round(performance.timing.loadEventEnd - performance.timing.navigationStart),
        }));
      }
      
      requestAnimationFrame(calculateFPS);
    };

    requestAnimationFrame(calculateFPS);

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyP') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-ai-dark/90 backdrop-blur-sm border border-ai-cyan/20 rounded-lg p-4 text-xs font-mono text-white z-50">
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={stats.fps > 50 ? 'text-green-400' : stats.fps > 30 ? 'text-yellow-400' : 'text-red-400'}>
            {stats.fps}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="text-ai-cyan">{stats.memoryUsage}MB</span>
        </div>
        <div className="flex justify-between">
          <span>Load:</span>
          <span className="text-ai-cyan">{stats.loadTime}ms</span>
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-2">
        Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;