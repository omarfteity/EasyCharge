import { Dialog, DialogContent } from "@/components/ui/dialog";
import StationMap from "./StationMap";

interface ExpandedMapDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ExpandedMapDialog({
  open,
  onClose,
}: ExpandedMapDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full p-6">
        <StationMap className="h-[80vh]" />
      </DialogContent>
    </Dialog>
  );
}
