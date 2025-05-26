import Header from "./components/Elements/Header/Header";
import FormLogin from "./components/Fragments/FormLogin";
import FormRegister from "./components/Fragments/FormRegister";
import AuthLayouts from "./components/Layouts/AuthLayouts";
function App() {
  return (
    <div className="bg-[#FFFDF3] font-[Lato]">
      <Header />
      <AuthLayouts>
        <FormRegister />
      </AuthLayouts>
    </div>
  );
}

export default App;
