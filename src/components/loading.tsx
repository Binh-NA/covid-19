const Component = (): JSX.Element => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-wrap content-center w-full h-full bg-gray-50">
      <span className="relative block w-0 h-0 mx-auto my-0 text-old-navy-solid">
        <div className="transform -translate-y-1/2">
          <svg className="w-8 h-8 mr-3 animate-spin">
            <use href="/icon.svg#loading" />
          </svg>
        </div>
      </span>
    </div>
  );
};

export const Loading: {
  Component: () => JSX.Element;
} = {
  Component,
};
