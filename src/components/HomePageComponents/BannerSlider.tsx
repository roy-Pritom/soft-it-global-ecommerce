import { Carousel } from 'antd';
import Image from 'next/image';

const BannerSlider = () => {
    return (
      <div className='px-2 pt-2'>
        <Carousel autoplay>
          <Image width={445} height={445} className="h-[445px] w-full" src='/banner.jpg' alt="" />
          <Image width={445} height={445} className="h-[445px] w-full" src='/banner1.webp' alt="" />
          <Image width={445} height={445} className="h-[445px] w-full" src='/banner.jpg' alt="" />
        </Carousel>
      </div>
    );
};

export default BannerSlider;