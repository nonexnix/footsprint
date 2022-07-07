import type { ComponentType, FunctionComponent, SVGProps } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Variant = "transparent";

interface Props {
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  variant?: Variant;
  onClick: () => void;
  dialog?: {
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
  dialog,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handler = () => {
    onClick();
    dialog && toggleDialog();
  };

  let style = "bg-primary-dark text-primary-light";

  switch (variant) {
    case "transparent": {
      style = "";
      break;
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        onClick={handler}
        className={`${style} hover-transition flex cursor-pointer items-center gap-2 rounded-base px-5 py-2 hover:opacity-90`}>
        {Icon && <Icon className="icon" />}
        {text}
      </button>

      {dialog && (
        <Transition appear show={isDialogOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={toggleDialog}>
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
                      <dialog.Icon className="icon" />
                      <span>{dialog.title}</span>
                    </Dialog.Title>
                    <div className="mt-2 text-sm text-fade-dark">
                      <p>{dialog.message}</p>
                    </div>
                    <div className="mt-5 flex justify-end gap-2">
                      {dialog.buttons &&
                        dialog.buttons.map((button, index) => (
                          <Button
                            key={index}
                            text={button.text}
                            variant={button.variant}
                            onClick={() => {
                              toggleDialog();
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
