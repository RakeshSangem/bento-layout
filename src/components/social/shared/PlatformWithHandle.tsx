export default function PlatformWithHandle({
  platform,
  username,
}: {
  platform: string;
  username: string;
}) {
  return (
    <div>
      <h3 className="text-base font-semibold uppercase tracking-wide text-white">
        {platform}
      </h3>
      <a
        href="#"
        className="mt-1 block text-sm font-normal leading-tight text-white/65"
      >
        {username}
      </a>
    </div>
  );
}
