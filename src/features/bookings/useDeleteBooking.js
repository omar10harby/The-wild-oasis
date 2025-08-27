import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi} from "../../services/apiBookings";

 export function useDeleteBooking(){
     const queryClient = useQueryClient();

  const { isLoading: isDeleteing, mutate:deletebooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success("booking successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return{isDeleteing,deletebooking}
 }