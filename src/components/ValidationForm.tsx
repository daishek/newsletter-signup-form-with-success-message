import { useRef, useState } from "react";
import { Button, InputField, ListItem } from ".";
import MobileHero from "../assets/images/illustration-sign-up-mobile.svg";
import DesktopHero from "../assets/images/illustration-sign-up-desktop.svg";
import { isValidateEmail } from "../utils/functions";

const listItems = [
  { id: 1, text: "Product discovery and building what matters" },
  { id: 2, text: "Measuring to ensure updates are a success" },
  { id: 3, text: "And much more!" },
];

interface ValidationFormProps {
  setValidatedEmail: (value: string) => void;
  setIsFormValidated: (value: boolean) => void;
}
const ValidationForm: React.FC<ValidationFormProps> = ({
  setIsFormValidated,
  setValidatedEmail,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = formRef.current;
    if (!formData?.email.value) {
      return setError("Valid email required");
    }
    if (!isValidateEmail(formData?.email.value)) {
      return setError("Valid email required");
    }
    setValidatedEmail(formData?.email.value);
    setError("");
    setIsFormValidated(true);
  };
  return (
    <div
      className="
            min-h-screen
            md:grid
            md:place-items-center
            md:bg-dx_CharcoalGrey
            md:py-20
        "
    >
      <div
        className="
            md:rounded-[40px]
            bg-dx_White
            md:grid
            md:grid-cols-2
            md:gap-5
            md:items-center
            md:grid-flow-dense
            md:p-5
            
        "
      >
        <figure className="w-full md:order-2">
          <img src={MobileHero} alt="MobileHero" className="w-full md:hidden" />
          <img
            src={DesktopHero}
            alt="MobileHero"
            className="hidden md:block w-full h-full "
          />
        </figure>

        <div className="px-5 py-10 space-y-5 md:space-y-10 md:px-10">
          <h3 className="text-3xl md:text-6xl font-extrabold text-dx_DarkSlateGrey">
            Stay updated!
          </h3>
          <p className="text-dx_CharcoalGrey">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="text-dx_CharcoalGrey space-y-2 md:space-y-5">
            {listItems.map((item) => (
              <ListItem key={item.id} text={item.text} />
            ))}
          </ul>
          <form
            ref={formRef}
            className="space-y-5 md:space-y-10"
            onSubmit={handleSubmit}
          >
            <InputField
              label="Email address"
              placeholder="email@company.com"
              name="email"
              error={error}
            />
            <Button type="submit" label="Subscribe to monthly newsletter" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ValidationForm;
