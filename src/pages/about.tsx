import App from "../components/App";
import PracticeItemList from "../components/ProblemItemList";
import { RecoilRoot } from "recoil";

export default function About() {
  return (
    <RecoilRoot>
      <App>
        <p>About Page</p>
        <PracticeItemList></PracticeItemList>
      </App>
    </RecoilRoot>
  );
}
