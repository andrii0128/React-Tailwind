import Button from "./components/Button";
import Search1 from "./components/search/Search1";
import Search2 from "./components/search/Search2";
import Search3 from "./components/search/Search3";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-x-4">
        <Button>Button</Button>
        <Button className="bg-red-600">Button</Button>
        <Button className="bg-green-600">Button</Button>
        <Button className="bg-purple-600">Button</Button>
        <Button className="bg-cyan-600">Button</Button>
      </div>
      <div className="flex gap-x-4">
        <Search1 />
        <Search2 />
        <Search3 />
      </div>
    </div>
  );
}

export default App;
