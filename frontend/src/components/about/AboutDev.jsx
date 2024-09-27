import { Container } from "../index";

const AboutDev = () => {
  return (
    <Container className="flex items-center justify-between gap-x-5 gap-y-5 flex-wrap">
      <div className="w-[600px] h-60 p-5">
        <h2 className="text-2xl font-semibold">About Developer</h2>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          ullam obcaecati eaque, soluta fugiat sed, tenetur consectetur labore
          ratione deleniti earum. Iste ratione animi molestias sapiente
          excepturi quis ex est!
        </p>
      </div>
      <div className="w-[400px] h-60 bg-green-200"></div>
    </Container>
  );
};

export default AboutDev;
