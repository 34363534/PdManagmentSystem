
import { ToastContainer, toast } from 'react-toastify';

  
  
  function Apt(){
    const notify = () => {toast.success("Successfuly created",{
     position: toast.POSITION.TOP_CENTER});
     toast.warn("Warning Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
  }
     
    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
export default Apt;