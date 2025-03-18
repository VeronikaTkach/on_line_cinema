export interface User {
  id: number,
  login: string,
  email: string,
  phone: string,
  isLoading: boolean
}

//autorization types:

export interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  inputStyles: string;
  buttonStyles: string;
  titleStyles: string;
  contentStyles: string;
  wrapperStyles: string;
}
