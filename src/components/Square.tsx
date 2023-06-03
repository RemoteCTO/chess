'use client';

export default function Square(props) {
  const { ky, onClick, selected } = props;

  const colorClass = () => {
    if (selected) {
      return 'bg-lime-500';
    } else {
      if (ky / 8 % 2 < 1) {
        if (ky % 2 < 1) {
          return 'bg-lime-800';
        } else {
          return 'bg-lime-100';
        }
      } else {
        if (ky % 2 < 1) {
          return 'bg-lime-100';
        } else {
          return 'bg-lime-800';
        }
      }
    }
  };

  return (
    <div
      className={`float-left w-[12.5%] h-[12.5%] flex ${colorClass()}`}
      onClick={onClick}
    >
      <div className="m-auto">

      </div>
    </div>
  );
}
