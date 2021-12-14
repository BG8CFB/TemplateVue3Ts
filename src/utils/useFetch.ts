// 请求封装处理 添加loading状态
// 使用：const [ fetch,loading ] = useFetch(api);
import { Ref, ref } from 'vue';

const useFetch = (
  api: (data?: any) => void
): [(params?: any) => Promise<any>, Ref<boolean>] => {
  const loading = ref<boolean>(false);
  function fetch(params?: any): Promise<any> {
    loading.value = true;
    return new Promise(async (resolve) => {
      try {
        const res = await api(params);
        loading.value = false;
        resolve(res);
      } catch (e) {
        loading.value = false;
      }
    });
  }
  return [fetch, loading];
};

export default useFetch;
