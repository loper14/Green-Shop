import { Skeleton } from "antd";

const UseLoader = () => {
  const category_loader = () => {
    return (
      <div className="w-full flex flex-col gap-3 mt-[12px]">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <Skeleton.Input
              className="px-2.5"
              key={index}
              active={true}
              block
            />
          );
        })}
      </div>
    );
  };
  const main_card_skeleton = (l?: number) => {
    return Array.from({ length: l ?? 10 }).map((_, index) => {
      return (
        <div key={index} className="h-[300px] flex flex-col ">
          <Skeleton.Image
            className="w-full main_card "
            key={index}
            active={true}
          />
          <h3 className="font-bold mt-[12px]">
            <Skeleton.Input active={true} />
          </h3>
          <p className="font-bold">
            <Skeleton.Input active={true} />
          </p>
        </div>
      );
    });
  };
  return { category_loader, main_card_skeleton };
};
export { UseLoader };
