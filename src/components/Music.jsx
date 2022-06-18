import useSound from 'use-sound';

import bgm from '../sounds/bgm-1.mp3';

export default function Music() {
  const [play] = useSound(bgm);
  // const handleClick = () => {
  //   console.log('music click');
  // };

  return (
    <div>
      <button type="button" onClick={play}>
        Music
      </button>
    </div>
  );
}
