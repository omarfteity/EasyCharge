import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface VerificationDialogProps {
  open: boolean;
  onClose: () => void;
  email: string;
}

export default function VerificationDialog({
  open,
  onClose,
  email,
}: VerificationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Check your email</DialogTitle>
          <DialogDescription>
            We sent a verification link to {email}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <Mail className="h-12 w-12 text-green-600" />
          <p className="text-center text-sm text-muted-foreground">
            Please click the link in the email to verify your account. If you
            don't see it, check your spam folder.
          </p>
        </div>
        <div className="flex justify-end">
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
