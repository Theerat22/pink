export interface User {
    idnumber: string;
    firstname: string;
    nickname: string;
  }
  
  export interface Sport {
    _id: string; // หรือ ObjectId ขึ้นอยู่กับการตั้งค่า
    name: string;
    owner?: User; // ถ้ามีเจ้าของ
  }
  