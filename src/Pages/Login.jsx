import { HeaderForm } from "../components/Elements/Header/Header";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

export default function LoginPage() {
  return (
    <>
      <HeaderForm />
      <AuthLayouts>
        <FormLogin />
      </AuthLayouts>
    </>
  );
}
