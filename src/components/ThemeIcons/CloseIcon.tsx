interface MenuIconProps {
  fill: string;
  className?: string;
  onClick?: () => void;
}

export const CloseIcon: React.FC<MenuIconProps> = ({
  fill,
  className,
  onClick,
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={fill}
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4714 4.4714C12.7318 4.21105 12.7318 3.78894 12.4714 3.52859C12.2111 3.26824 11.789 3.26824 11.5286 3.52859L8.00004 7.05719L4.47145 3.52859C4.2111 3.26824 3.78899 3.26824 3.52864 3.52859C3.26829 3.78894 3.26829 4.21105 3.52864 4.4714L7.05723 7.99999L3.52864 11.5286C3.26829 11.7889 3.26829 12.211 3.52864 12.4714C3.78899 12.7317 4.2111 12.7317 4.47145 12.4714L8.00004 8.9428L11.5286 12.4714C11.789 12.7317 12.2111 12.7317 12.4714 12.4714C12.7318 12.211 12.7318 11.7889 12.4714 11.5286L8.94285 7.99999L12.4714 4.4714Z"
        fill={fill}
      />
    </svg>
  );
};
