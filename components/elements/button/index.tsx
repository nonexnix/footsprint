import type {
  ComponentType,
  FunctionComponent,
  ReactNode,
  SVGProps,
} from "react";
import { Fragment, useState } from "react";
import Dialogbox from "../../sections/dialogbox";

interface Props {
  children: ReactNode;
  onClick: () => void;
  variant?: "default" | "transparent";
  dialogbox?: {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    message: string;
    action?: {
      name: string;
      onClick: () => void;
    };
  };
}

const Button: FunctionComponent<Props> = ({
  children,
  onClick,
  variant = "default",
  dialogbox,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let style = "";

  switch (variant) {
    case "default": {
      style = "bg-primary-dark text-primary-light";
      break;
    }
    case "transparent": {
      style = "";
      break;
    }
  }

  const eventHandler = () => {
    setIsOpen(true);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        onClick={eventHandler}
        className={`${style} hover-transition rounded-base px-5 py-2 hover:opacity-90`}>
        {children}
      </button>
      {dialogbox && (
        <Dialogbox {...dialogbox} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </Fragment>
  );
};

export default Button;
