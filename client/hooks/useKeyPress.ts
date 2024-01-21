import { useEffect } from "react";

/**
 * A hook which allows actions to be attached to keypresses.
 *
 * https://keycode.info/ to find the event.key to attach to
 *
 * @param {keyCode} keyCode that the action will be attached to. KeyboardEvent.keys are valid strings
 * @param {action} action that will be called when key is pressed
 */
export const useKeyPress = (keyCode: string, action: VoidFunction): void => {
  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent): void => {
      if (event.code === keyCode) {
        action();
      }
    };
    window.addEventListener("keyup", onKeyUp);

    return () => window.removeEventListener("keyup", onKeyUp);
  });
};
