interface CloseButtonProps {
  className?: string;
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L22 21.9067M22 2.09332L2 22"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
export default CloseButton;
