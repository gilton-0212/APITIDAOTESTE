export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ResponseUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

//INTERFACE CREAT
export interface RequestCreate {
  name: string;
  job: string;
}

export interface ResponseCreate {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}
//

//INTERFACE PARA APENAS UM USUARIO
export interface ResponseUser{
  data: User;
}

// INTERFACCE PARA UPDATE
export interface RequestUptade {
  name: string;
  job: string;
}

export interface ResponseUptade {
  name: string;
  job: string;
  updatedAt: Date;
}
