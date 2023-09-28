import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';

function App() {
  let toastInstance : ToastComponent ;
  function showToast(){
    toastInstance.show();
  }
  function hideToast(){
    toastInstance.hide('All');
  }
  function templateData():JSX.Element{
    return(
      <div>
        <div className="horizontal-align">
          <div className='toast-content'>
            <div className='toast-title'>
                Weekend Alarm
            </div>
            <div className='toast-message'>
                With traffic, its likely to take 45 minutes to get to jenny's 24th Birthday Bash at Hillside Bar, 454 E.
                Olive Way by 10:00PM
            </div>
          </div>
        </div>
          <img src='https://ej2.syncfusion.com/demos/src/toast/resource/map.jpg'></img>
      </div>
    )
  }
  return (
    <div className="App">
      <ToastComponent title='Adaptive Tiles Meeting'
      content='Conference Room 01 / Building 135 10:00 AM-10:30 AM'
      ref={toast=> toastInstance = toast!} position={{X:'Right',Y:'Top'}} timeOut={0}
      showCloseButton={true} template={templateData}>

      </ToastComponent>
      <ButtonComponent onClick={showToast}>Show Toast</ButtonComponent>
      <ButtonComponent onClick={hideToast}>Hide All</ButtonComponent>
    </div>
  );
}

export default App;
