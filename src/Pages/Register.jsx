import { HeaderForm } from "../components/Elements/Header/Header";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

export default function RegisterPage() {
  return (
    <>
      <HeaderForm />
      <AuthLayouts>
        <FormRegister />
      </AuthLayouts>
    </>
  );
}
