import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
function AddCabin() {
  return (
    <>
      <div>
        <Modal>
          <Modal.Open opens={"cabin-form"}>
            <Button>Add new Cabin</Button>
          </Modal.Open>
          <Modal.Window name={"cabin-form"}>
            <CreateCabinForm />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

// function AddCabin() {
//   const [isModalOpen,setIsModalOpen]=useState(false)

//   return (
//     <>
//     <Button onClick={()=>setIsModalOpen((prev)=>!prev)}>Add new Cabin</Button>
//       {isModalOpen && <Modal onClose={()=>setIsModalOpen(false)}>
//             <CreateCabinForm onCloseModal={()=>setIsModalOpen(false)}/>
//         </Modal>}
//     </>
//   )
// }

export default AddCabin;
