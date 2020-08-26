import {EventBus} from "@plugins/vue-event-bus";
import {runOnPlatform} from "@@/utils/resolvers/system/deviceResolver";
import {runInProcess, runInRenderer} from "@@/utils/resolvers/system/processResolver";
import {APP_ERROR} from "@/events/error/errorsEvents";


const ERROR_EMIT = 'error:emit';

export default class ErrorResolver {


  /**
   * Emit error
   *
   * @param error
   * @param AppWindow
   */
  static emitError(error, {AppWindow} = {}) {
    runOnPlatform(
      () => EventBus.$emit(ERROR_EMIT, error),
      () => {
        runInProcess(
          () => AppWindow ? AppWindow.sendToWindow(ERROR_EMIT, error) : null, // send error from main process to app window
          () => EventBus.$emit(ERROR_EMIT, error) // If emit error from render process -> use event bus
        )
      }
    );
  }


  /**
   * Catch error
   *
   * @param callback
   */
  static catchError(callback) {
    runOnPlatform(
      () => EventBus.$on(ERROR_EMIT, callback),
      () => {
        runInRenderer(electron => {

          electron.ipcRenderer.on(ERROR_EMIT, (e, error) => callback(error)); // Check from electron
          EventBus.$on(ERROR_EMIT, callback); // Check from event bus

        })
      }
    )
  }


  /**
   * Unsubscribe error event
   *
   * @param callback
   */
  static unsubscribeError(callback) {
    runOnPlatform(
      () => EventBus.$off(APP_ERROR, callback),
      () => runInRenderer(() => EventBus.$off(APP_ERROR, callback))
    )
  }

}

