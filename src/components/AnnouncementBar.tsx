export default function AnnouncementBar() {
  return (
    <div className="bg-plum py-2.5 px-4" role="banner">
      <p className="text-center text-butter text-xs md:text-sm font-mono tracking-wide">
        Good ideas are better when they have room to play.{' '}
        <span className="text-coral" aria-hidden="true">✳</span>
      </p>
    </div>
  );
}
