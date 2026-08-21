export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-metadata text-secondary text-xs">
          © {year} Jainil Pidhadiya. All rights reserved.
        </p>
        
        <div className="text-metadata text-secondary text-xs flex items-center gap-2">
          <span>STATUS:</span>
          <span className="flex items-center gap-1.5 text-success">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
