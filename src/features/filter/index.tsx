const FilterPage = () => {
  return (
    <>
      <div className="flex flex-col p-6 gap-[35px]">
        <div className="flex gap-[35px] justify-between items-center">
          <h1 className="font-montserrat text-2xl font-bold tracking-[0.2px]">
            Filter
          </h1>
          <img src="src/assets/x-2.svg" alt="" />
          <div className="flex justify-between">
            <div className="flex gap-2.5">
              <img src="src/assets/images/icons/clock.svg" alt="" />
              <span className="font-dmsans text-sm tracking-[0.2px]">
                Headphone
              </span>
            </div>
            <div>
              <img src="src/assets/images/icons/x.svg" className="" alt="" />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default FilterPage;
