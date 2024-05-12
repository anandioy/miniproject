export interface UserData {
    id: string;
    fullname: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    register_date?: string;
    redeemedPoints: number;
    referralcode: string;
  }
  
  export interface UserInt {
    message: string;
    data: UserData
  }

  export interface UserReg {
    fullname: string;
    email: string;
    password: string;
    phone: string;
    address: string;
  }