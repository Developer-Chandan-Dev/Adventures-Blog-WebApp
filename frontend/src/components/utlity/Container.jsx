// eslint-disable-next-line react/prop-types
const Container = ({ children, className="" }) => {
  return (
    <>
      <section className={`px-2 w-full md:w-11/12 xl:w-4/5 mx-auto py-5 ${className}`}>{children}</section>
    </>
  );
};

export default Container;
