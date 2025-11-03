export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <p className="text-sm text-black/60">© {new Date().getFullYear()} Velodent. All rights reserved.</p>
        <div className="text-sm text-black/60">AI automation for dental clinics</div>
      </div>
    </footer>
  );
}
