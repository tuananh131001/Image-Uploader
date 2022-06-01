import Card from "./components/Card";
import UploadFinish from "./components/UploadFinish";
import UploadLoading from "./components/UploadLoading";
function App() {
  return (
    <>
      <div className="grid place-content-center h-screen ">
        <Card></Card>
        {/* <UploadLoading></UploadLoading> */}
        {/* <UploadFinish></UploadFinish> */}
      </div>
    </>
  );
}

export default App;
