import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import ProductImages from '@/components/ProductImages';
import CustomizedProducts from '@/components/CustomizedProducts';
import Add from '@/components/Add';

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* INFO */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          This product is crafted with the highest quality materials to ensure
          durability and longevity. Its sleek design and modern aesthetics make
          it a perfect addition to any home or office. With advanced features
          and user-friendly functionality, it offers unparalleled convenience.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizedProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            We offer fast and reliable shipping to ensure your products arrive
            on time. Orders are processed within 1-2 business days and shipped
            via our trusted carriers. Shipping costs are calculated at checkout
            based on the destination and weight of the items. You will receive a
            tracking number once your order has been dispatched. Please note
            that delivery times may vary depending on your location and any
            unforeseen delays.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            We offer fast and reliable shipping to ensure your products arrive
            on time. Orders are processed within 1-2 business days and shipped
            via our trusted carriers. Shipping costs are calculated at checkout
            based on the destination and weight of the items. You will receive a
            tracking number once your order has been dispatched. Please note
            that delivery times may vary depending on your location and any
            unforeseen delays.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            We offer fast and reliable shipping to ensure your products arrive
            on time. Orders are processed within 1-2 business days and shipped
            via our trusted carriers. Shipping costs are calculated at checkout
            based on the destination and weight of the items. You will receive a
            tracking number once your order has been dispatched. Please note
            that delivery times may vary depending on your location and any
            unforeseen delays.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
