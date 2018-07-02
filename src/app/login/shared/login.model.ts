class SignInRequest {
  username: string;
  password: string;
  is_member: boolean;
}

class SignInResponse {
  username: string;
  first_name: string;
  last_name: string;
  token: string;
  expire: string;
}

export {
  SignInRequest,
  SignInResponse
}