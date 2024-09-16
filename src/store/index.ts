import { defineStore } from 'pinia';

const useLoginStore = defineStore('user', {
  state: () => {
    const storedUser = localStorage.getItem('userinfo');
    let user = {};

    if (storedUser) {
      try {
        // 尝试将storedUser解析为JSON
        user = JSON.parse(storedUser);
      } catch (error) {
        console.error('Failed to parse user info from localStorage:', error);
        // 如果解析失败，可以选择清空存储以避免后续问题
        localStorage.removeItem('userinfo');
      }
    }

    return { user };
  },
  actions: {
    getlogin(userInputData) {
      console.log('Storing user input data:', userInputData);

      try {
        // 确保你存储的是一个有效的JSON字符串
        localStorage.setItem('userinfo', JSON.stringify(userInputData));
        console.log('User info stored successfully.');
      } catch (error) {
        console.error('Failed to store user info in localStorage:', error);
      }
    }
  },
  getters: {
    // 如果需要的话，定义getters来获取state中的数据
  }
});

export default useLoginStore;