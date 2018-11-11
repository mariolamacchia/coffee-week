import axios from 'axios';

const url = 'https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?department=engineering';

export function fetchEmployees() {
  return axios.get(url);
}
