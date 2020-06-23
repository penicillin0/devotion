import App from "../components/App";
import PracticeItemList from "../components/PracticeItemList";
import { RecoilRoot } from "recoil";

export default function Practices() {
  return (
    <RecoilRoot>
      <App>
        <PracticeItemList></PracticeItemList>
      </App>
    </RecoilRoot>
  );
}
