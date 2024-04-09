import World from "./world";
import Counter from "../counter/page";

// http://localhost:3001/hello
export default function Hello() {
  return (
    <>
      <h1>
        Hello,
        <World name="junseo" />!

      </h1>

      <img src="cat.jpg" alt="cat" />

      <Counter />
    </>
  );
}