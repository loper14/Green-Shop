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
  return { category_loader };
};
export { UseLoader };
