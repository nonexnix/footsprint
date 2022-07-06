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
  variant?: "success" | "danger" | "warning" | "close";
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
  variant,
  dialogbox,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let style = "";

  switch (variant) {
    case "success": {
      style = "";
      break;
    }
    case "danger": {
      style = "";
      break;
    }
    case "warning": {
      style = "";
      break;
    }
    case "close": {
      style = "bg-primary-dark text-primary-light";
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
        className={`${style} rounded-base px-4 py-2`}>
        {children}
      </button>
      {dialogbox && (
        <Dialogbox {...dialogbox} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </Fragment>
  );
};

export default Button;
