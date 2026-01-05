import { InfiniteSlider } from '../motion-primitives/infinite-slider';
import Image from 'next/image';

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider speedOnHover={20} gap={24}>
      <Image
        src='https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'
        alt='Dean blunt - Black Metal 2'
        className='aspect-square w-[120px] rounded-[4px]'
        width={100}
        height={100}
      />
      <Image
        src='https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'
        alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        className='aspect-square w-[120px] rounded-[4px]'
        width={100}
        height={100}
      />
      <Image
        src='https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'
        alt='Yung Lean - Stardust'
        className='aspect-square w-[120px] rounded-[4px]'
        width={100}
        height={100}
      />
      <Image
        src='https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'
        alt='Lana Del Rey - Ultraviolence'
        className='aspect-square w-[120px] rounded-[4px]'
        width={100}
        height={100}
      />
      <Image
        src='https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'
        alt='A$AP Rocky - Tailor Swif'
        className='aspect-square w-[120px] rounded-[4px]'
        width={100}
        height={100}
      />
      <Image
        src='https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        className='aspect-square w-[120px] rounded-[4px]'
        width={100}
        height={100}
      />
    </InfiniteSlider>
  );
}
