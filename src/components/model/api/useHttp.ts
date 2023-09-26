const BASE_URL = 'http://127.0.0.1:3000/';

const useHttp = async (path: string, options?: RequestInit): Promise<Response> => fetch(`${BASE_URL}${path}`, options);

export default useHttp;
