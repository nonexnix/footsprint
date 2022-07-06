import type { ComponentType, FunctionComponent, SVGProps } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Variant = "transparent";

interface Props {
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  variant?: Variant;
  onClick: () => void;
  dialogbox?: {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    message: string;
    buttons: {
      text: string;
      variant?: Variant;
      onClick: () => void;
    }[];
  };
}

const Button: FunctionComponent<Props> = ({
  text,
  Icon,
  onClick,
  variant,
  dialogbox,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let style = "bg-primary-dark text-primary-light";

  switch (variant) {
    case "transparent": {
      style = "";
      break;
    }
  }

  const handler = () => {
    setIsOpen(true);
    if (onClick) {
      onClick();
    }
  };

  const closeDialogbox = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <button
        type="button"
        onClick={handler}
        className={`${style} hover-transition flex cursor-pointer items-center gap-2 rounded-base px-5 py-2 hover:opacity-90`}>
        {Icon && <Icon className="text h-6 w-6" />}
        {text}
      </button>

      {dialogbox && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDialogbox}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-primary-dark bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="grid min-h-full place-items-center p-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full max-w-md rounded-base bg-primary-light p-6 transition-all">
                    <Dialog.Title
                      as="h3"
                      className="flex items-center gap-2 text-lg font-medium">
                      <dialogbox.Icon className="h-6 w-6" />
                      <span>{dialogbox.title}</span>
                    </Dialog.Title>
                    <div className="mt-2 text-sm text-fade-dark">
                      <p>{dialogbox.message}</p>
                    </div>
                    <div className="mt-5 flex justify-end gap-2">
                      {dialogbox.buttons &&
                        dialogbox.buttons.map((button, index) => (
                          <Button
                            key={index}
                            text={button.text}
                            variant={button.variant}
                            onClick={() => {
                              closeDialogbox();
                              button.onClick();
                            }}
                          />
                        ))}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </Fragment>
  );
};

export default Button;
