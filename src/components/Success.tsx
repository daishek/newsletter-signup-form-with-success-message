import { Button } from ".";
import Icon from "../assets/images/icon-success.svg";
interface SuccessProps {
  email: string;
  setsetIsFormValidated: (value: boolean) => void;
}

const Success: React.FC<SuccessProps> = ({ email, setsetIsFormValidated }) => {
  return (
    <div
      className="
        min-h-screen
            md:grid
            md:place-items-center
            md:bg-dx_CharcoalGrey
            
      "
    >
      <div
        className="
        px-5
        py-10
        flex
        flex-col
        bg-dx_White
        md:max-w-[450px]
        md:rounded-3xl
        md:p-10
        md:block
      "
      >
        <div className="flex-1 flex flex-col md:block justify-center md:pb-10 pb-20">
          <img src={Icon} alt="icon" width={50} className="mb-10" />
          <h1 className="text-dx_DarkSlateGrey text-4xl font-extrabold mb-5">
            Thanks for subscribing!
          </h1>
          <p className="text-dx_CharcoalGrey">
            A confirmation email has been sent to <b>{email}</b>. Please open it
            and click the button inside to confirm your subscription.
          </p>
        </div>
        <Button
          label="Dismiss message"
          type="button"
          onClick={() => setsetIsFormValidated(false)}
        />
      </div>
    </div>
  );
};

export default Success;
