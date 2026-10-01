import { useActiveSection } from '../../hooks/useActiveSection';
import { identity } from '../../data/identity';

const scenes = [
  { id: 'intro', title: 'INTRO' },
  { id: 'about', title: 'PROFILE' },
  { id: 'stack', title: 'ECOSYSTEM' },
  { id: 'work', title: 'SELECTED WORK' },
  { id: 'journey', title: 'JOURNEY' },
  { id: 'contact', title: 'CONTACT' }
];

export function SceneIndicator() {
  const activeSceneId = useActiveSection(scenes.map(s => s.id));
  const activeIndex = scenes.findIndex(s => s.id === activeSceneId);
  const displayIndex = activeIndex >= 0 ? activeIndex + 1 : 1;
  const currentScene = scenes[activeIndex >= 0 ? activeIndex : 0];

  return (
    <div className="fixed bottom-8 right-8 z-50 font-mono text-[11px] tracking-[0.16em] uppercase hidden md:flex items-center gap-3 select-none">
      
      {/* Floating Resume Button */}
      {identity.resumeUrl && (
        <a 
          href={identity.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-sm border border-cyan/30 bg-[#0B1124]/85 backdrop-blur-md shadow-lg text-cyan hover:bg-[#0B1124] hover:border-cyan/70 transition-all duration-300 hover:shadow-glow-cyan focus-ring"
          aria-label="Download Resume"
        >
          <span>RESUME</span>
          <svg className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      )}

      {/* Scene Indicator Pill */}
      <div className="flex items-center gap-3 px-3.5 py-2 rounded-sm border border-border bg-[#0B1124]/85 backdrop-blur-md shadow-lg">
        <span className="text-cyan font-bold">
          {String(displayIndex).padStart(2, '0')} / {String(scenes.length).padStart(2, '0')}
        </span>
        <span className="w-px h-3 bg-border" />
        <span className="text-text-primary font-medium">{currentScene.title}</span>
      </div>
    </div>
  );
}
