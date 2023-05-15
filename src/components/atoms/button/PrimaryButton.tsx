import { VFC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
};
export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
      backgroundColor="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
});
