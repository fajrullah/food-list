import Image from 'next/image';
import style from './style.module.css';

function Button({ onClick }: ButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      <Image
        src="/assets/plus-svgrepo-com.svg"
        alt="plus"
        width={9}
        height={9}
        style={{
          paddingRight: '0.2rem',
        }}
      />
      Show More
    </button>
  );
}

export default Button;
