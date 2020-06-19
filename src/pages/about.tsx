import App from "../components/App";
import ProblemItemList from "../components/ProblemItemList";
import { RecoilRoot } from "recoil";

export default function About() {
  return (
    <RecoilRoot>
      <App>
        <p>About Page</p>
        <ProblemItemList></ProblemItemList>
      </App>
    </RecoilRoot>
  );
}
