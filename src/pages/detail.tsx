import App from "../components/App";
import PracticeDetail from "../components/PracticeDetail";
import { RecoilRoot } from "recoil";

export default function Practices() {
  return (
    <RecoilRoot>
      <App>
        <PracticeDetail></PracticeDetail>
      </App>
    </RecoilRoot>
  );
}
