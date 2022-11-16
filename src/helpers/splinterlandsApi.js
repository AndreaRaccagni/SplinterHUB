export const getCards = async () => {
  try {
    const resolve = await fetch(
      'https://api.splinterlands.io/cards/get_details'
    );
    const result = await resolve.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const getPlayerBalances = async () => {
  try {
    const resolve = await fetch(
      'https://api.splinterlands.io/players/balances?username=yozen'
    );
    const result = await resolve.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const getPlayerCollection = async () => {
  try {
    const resolve = await fetch(
      'https://api.splinterlands.io/cards/collection/yozen'
    );
    const result = await resolve.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const getPlayerSettings = async () => {
  try {
    const resolve = await fetch(
      'https://api.splinterlands.io/players/details?name=yozen'
    );
    const result = await resolve.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const getPlayerSettingsAdvanced = async () => {
  try {
    const resolve = await fetch(
      'https://api.splinterlands.io/players/login?name=yozen'
    );
    const result = await resolve.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
