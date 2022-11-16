import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const accountStore = defineStore('accounts', () => {
  const loggedInAccount = localStorage.getItem('users');
  const account = loggedInAccount
    ? ref({
        name: loggedInAccount,
        authenticated: true,
      })
    : ref({
        name: null,
        authenticated: false,
      });

  const authenticate = async (user) =>
    new Promise((resolve, reject) => {
      if (!window.hive_keychain) {
        return reject('Keychain not found');
      }

      // reset values
      account.value.name = null;
      account.value.authenticated = false;

      window.hive_keychain.requestSignBuffer(
        user,
        `${user}${Date.now()}`,
        'Active',
        async function (result) {
          if (result.error) {
            return reject(result.error);
          }

          account.value.name = user;
          account.value.authenticated = true;
          localStorage.setItem('users', account.value.name);

          return resolve(account.value);
        }
      );
    });

  const signOut = () => {
    account.value.name = null;
    account.value.authenticated = false;

    localStorage.removeItem('users');
  };

  return {
    authenticate,
    signOut,
    account,
  };
});
