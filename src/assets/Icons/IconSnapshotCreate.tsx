export const IconSnapshotCreate = ({ scale = 1 }: { scale?: number }) => {
  return (
    <svg
      width={scale * 119}
      height={scale * 81}
      viewBox="0 0 82 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 0.5H81.5V59.5H0.5V0.5Z" fill="#F8F9FA" />
      <path d="M0.5 0.5H81.5V59.5H0.5V0.5Z" stroke="#C5CED5" />
      <g clipPath="url(#clip0_521_485)">
        <circle cx="41" cy="30" r="10" fill="#D0D3DB" />
        <path d="M41 24L44 30H38L41 24Z" fill="#082743" />
      </g>
      <text
        x="50%"
        y="85%"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fontWeight="600"
        fill="#232D42"
      >
        Snapshot Create
      </text>
      <defs>
        <clipPath id="clip0_521_485">
          <rect
            width="22"
            height="22"
            fill="white"
            transform="translate(30 12)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
