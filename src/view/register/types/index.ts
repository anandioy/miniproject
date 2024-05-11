export interface FormValues {
    fullname: string;
    email: string;
    password: string;
    phone: string;
    address: string;
  }
  
  export interface FormProps {
    initialFullname?: string;
    initialEmail?: string;
    initialPassword?: string;
    initialPhone?: string;
    initialAddress?: string;
  }
  